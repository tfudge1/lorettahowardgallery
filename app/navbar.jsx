// components/Navbar.jsx
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
          <div className="nav-headding">
        <a href="/">
        <Image
          src="/LHGlogo.png"
          alt="Loretta Howard Gallery logo"
          width={200}
          height={100}
          priority
        />
        </a>
        <ul>
          <li><Link href="/artists">Artists</Link></li>
          <li><Link href="/exhibitions">Exhibitions</Link></li>
          <li><Link href="/catalogues">Catalogues</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <hr />
      </div>
  );
};

export default Navbar;
