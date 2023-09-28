import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="flex flex-col h-screen w-scren items-center">
      <div className="custom-background w-full flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 min-h-[900px]">
          <Nav />
          <div className="hero flex flex-col place-content-center items-center h-[680px] hero-background">
            <h1 className="text-7xl font-bold text-text mt-4">DIGITAL AGENCY</h1>
            <p className="text-3xl font-light text-text max-w-lg text-center">
              professional and optimized websites for your business
            </p>
            <a
              href="https://forms.gle/56VgGZzZn5dxBg9W6"
              className="text-4xl bg-primary text-text px-8 py-4 rounded-lg mt-12 hover:bg-secondary transition-all duration-300 z-10"
            >
              Create your website here
            </a>
          </div>
        </div>
      </div>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </div>
  );
}

export default Home;
