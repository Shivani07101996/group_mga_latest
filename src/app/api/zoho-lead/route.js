import { NextResponse } from 'next/server';
import { zohoService } from '../../../lib/zohoService';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, description } = body;
    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    const zohoResult = await zohoService.createLead({ name, phone, email, description });
    return NextResponse.json({ success: true, zohoResult });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Failed to create lead.' }, { status: 500 });
  }
} 