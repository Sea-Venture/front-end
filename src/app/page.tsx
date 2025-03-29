import Image from "next/image";
import Link from 'next/link'
import LandingPage from "./pages/landingPage/landingpage";
import ThemeWrapper from "./components/wrappers/themeWrapper";

export default function Home() {
  return (
    <>

    <LandingPage/>

  

      <ul>
        <li>
          <Link href="/api/login">Login</Link>
        </li>
        <li>
          <Link href="/api/register">Register</Link>
        </li>
        <li>
          
            <Link href="/api/user/dashboard">
                Dashboard
            </Link>
          
        </li>
        <li>
          <Link href="/api/admin/dashboard">AdminDashboard</Link>
        </li>
      </ul>
    
    </>
  );
}
