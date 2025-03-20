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
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          
            <Link href="/dashboard">
                Dashboard
            </Link>
          
        </li>
      </ul>
    
    </>
  );
}
