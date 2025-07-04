import path from 'path';
import fs from 'fs';

class ZohoService {
  constructor() {
    this.baseUrl = process.env.ZOHO_CRM_API_URL || 'https://www.zohoapis.com/crm/v3';
    this.accessToken = process.env.ZOHO_ACCESS_TOKEN || '';
    this.refreshToken = process.env.ZOHO_REFRESH_TOKEN || '';
    this.clientId = process.env.ZOHO_CLIENT_ID || '';
    this.clientSecret = process.env.ZOHO_CLIENT_SECRET || '';
    this.envFilePath = path.resolve(process.cwd(), '.env');
  }

  async updateEnvFile(newToken) {
    try {
      let envContent = fs.readFileSync(this.envFilePath, 'utf8');
      const formattedToken = String(newToken).trim();
      if (envContent.includes('ZOHO_ACCESS_TOKEN=')) {
        envContent = envContent.replace(
          /ZOHO_ACCESS_TOKEN=.*/,
          `ZOHO_ACCESS_TOKEN="${formattedToken}"`
        );
      } else {
        envContent += `\nZOHO_ACCESS_TOKEN="${formattedToken}"`;
      }
      fs.writeFileSync(this.envFilePath, envContent);
      console.log('Updated access token in .env file');
    } catch (error) {
      console.error('Error updating .env file:', error);
    }
  }

  async refreshAccessToken() {
    try {
      const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          refresh_token: this.refreshToken,
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: 'refresh_token'
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Failed to refresh Zoho token: ' + JSON.stringify(data));
      }
      this.accessToken = data.access_token;
      await this.updateEnvFile(data.access_token);
      return data.access_token;
    } catch (error) {
      console.error('Error refreshing access token:', error);
      throw error;
    }
  }

  async createNote(noteData) {
    try {
      let response = await fetch(`${this.baseUrl}/Notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [noteData] }),
      });
      let responseData = await response.json();
      if (response.status === 401) {
        await this.refreshAccessToken();
        response = await fetch(`${this.baseUrl}/Notes`, {
          method: 'POST',
          headers: {
            'Authorization': `Zoho-oauthtoken ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: [noteData] }),
        });
        responseData = await response.json();
      }
      if (!response.ok) {
        throw new Error(`Failed to create note: ${JSON.stringify(responseData)}`);
      }
      return responseData;
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  }

  async createLead({ name, phone, email, description }) {
    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ') || 'NLN';
    const leadData = {
      First_Name: firstName,
      Last_Name: lastName,
      Email: email,
      Phone: phone,
      Lead_Source: 'PABEx',
      Lead_Status: 'Lead Received',
      Lead_Received_Date: new Date().toISOString().split('T')[0],
      Product_Type_Applied: 'PAB Exchange'
    };
    try {
      let response = await fetch(`${this.baseUrl}/Leads`, {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [leadData] }),
      });
      let responseData = await response.json();
      if (response.status === 401) {
        // Token expired, refresh and retry once
        await this.refreshAccessToken();
        response = await fetch(`${this.baseUrl}/Leads`, {
          method: 'POST',
          headers: {
            'Authorization': `Zoho-oauthtoken ${this.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: [leadData] }),
        });
        responseData = await response.json();
      }
      if (!response.ok) {
        throw new Error(`Zoho API Error: ${JSON.stringify(responseData)}`);
      }
      // If description is provided, add it as a note to the lead
      if (description && responseData.data && responseData.data[0] && responseData.data[0].details && responseData.data[0].details.id) {
        const noteData = {
          Note_Title: 'Lead Description',
          Note_Content: description,
          Parent_Id: responseData.data[0].details.id,
          $se_module: 'Leads'
        };
        await this.createNote(noteData);
      }
      return responseData;
    } catch (error) {
      console.error('Error creating lead in Zoho CRM:', error);
      throw error;
    }
  }
}

export const zohoService = new ZohoService(); 