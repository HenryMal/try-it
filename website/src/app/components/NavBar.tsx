import Link from "next/link";
import Image from "next/image";
import TryItLogo from "../images/TryItLogo.png";

export function NavBar() {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 bg-[#ca812d] text-white w-36 h-72 rounded-3xl flex flex-col items-center p-4 shadow-lg">
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
      <div className="mt-6 flex flex-col items-center space-y-16 text-lg font-bold w-full text-center">
        <Link href="/closet" className="hover:text-gray-300">
          My Closet
        </Link>
        <Link href="/account" className="hover:text-gray-300">
          My Account
        </Link>
      </div>
    </nav>
  );
}
