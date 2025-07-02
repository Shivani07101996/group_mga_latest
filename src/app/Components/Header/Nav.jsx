import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="">Home</Link>
        
      </li>
      <li>
        <Link href="">Pages</Link>
      </li>  

      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
      </li> 
      
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>
          Services
        </Link>

      </li>      
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
