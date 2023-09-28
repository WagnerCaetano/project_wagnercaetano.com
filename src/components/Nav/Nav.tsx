import "./Nav.css";

function Nav() {
  return (
    <nav className="flex flex-row justify-between p-4">
      <img className="w-32" src="./assets/logo.svg" alt="logo" />
      <div className="flex flex-row gap-4 items-center">
        <a href="/" className="text-text hover:text-primary transition-all duration-300">
          Home
        </a>
        <a href="https://wagnercaetano.dev" className="text-text hover:text-primary transition-all duration-300">
          About
        </a>
        <a
          href="https://forms.gle/56VgGZzZn5dxBg9W6"
          className="border-primary text-primary border-2 p-2 rounded hover:bg-secondary transition-all duration-300"
        >
          Get in contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
