function Footer() {
  return (
    <>
      <footer className="bg-quaternary h-[200px]">
        <div className="flex justify-between lg:justify-around mx-auto h-full items-center px-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://www.instagram.com/pedrofranzina"
              >
                <img className="w-6 h-6" src="/img/instagram.png" alt="Instagram Icon" />
              </a>
              <a href="https://www.linkedin.com/in/pedrofranzina/">
                <img className="w-6 h-6" src="/img/linkedin.png" alt="LinkedIn Icon" />
              </a>
              <a href="https://www.facebook.com/pedrofranzina">
                <img className="w-6 h-6" src="/img/facebook.png" alt="Facebook Icon" />
              </a>
              <a href="https://www.github.com/pedrofranzina">
                <img className="w-6 h-6" src="/img/github.png" alt="GitHub Icon" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <form className="w-[200px] md:w-[300px] mx-auto">
              <p className="mb-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="border rounded w-full px-3 py-2"
                />
              </p>
              <p className="mb-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="border rounded w-full px-3 py-2"
                />
              </p>
              <button type="submit" className="relative flex items-center justify-around w-[200px] md:w-[300px] min-h-[53px] cursor-pointer bg-gradient-to-r from-[#6eefdf80] to-[#6ae0ff45] border-2 border-[#acf7ff] text-white text-[18px] font-semibold rounded hover:bg-blue-600 active:bg-blue-800">
                Subscribe
              </button>

            </form>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;

