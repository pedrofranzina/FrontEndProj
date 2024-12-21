import { Link } from "wouter";

function Header() {
  return (
    <header className="sticky opacity-90 top-0 z-10 bg-quaternary text-white text-hero font-geo shadow-xl lg:h-[100px] md:h-[100px]">
      <nav className="p-4 h-full md:flex md:items-center md:justify-between">
        <div className="hidden md:flex">
          <img
            className="rounded-full size-40 mt-20 ml-10"
            src="/img/logo.jpeg"
            alt=""
          />        </div>

        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl lg:text-3xl font-extrabold bg-clip-text lg:hover:text-3xl lg:transition-transform lg:ease-linear lg:hover:scale-125">
              Beyond the Horizon
            </h1>
          </Link>
        </div>
        <div className="flex lg:items-center lg:space-x-4">
          <div className="flex items-center space-x-2 text-opacity-90 lg:space-x-4">
            <Link href="/" className="hover:underline hover:font-hero">Homepage</Link>
            <span>|</span>
            <Link href="/form" className="hover:underline">Any idea?</Link>
            <span>|</span>
            <Link href="/aboutme" className="hover:underline">About me</Link>
          </div>
        </div>
      </nav>
    </header >
  );
}

export default Header;
