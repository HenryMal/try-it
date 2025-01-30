import Link from "next/link";
import Image from "next/image";
import TryItLogo from "../images/TryItLogo.png";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-3 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image
            src={TryItLogo}
            alt="Try It! Logo"
            width={56}
            height={56}
          ></Image>
          Try It!
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link href="/explore" className="hover:text-gray-400">
          Explore
        </Link>
        <Link href="/closet" className="hover:text-gray-400">
          Closet
        </Link>
        <Link href="/account" className="hover:text-gray-400">
          Account
        </Link>
      </div>
    </nav>
  );
}
