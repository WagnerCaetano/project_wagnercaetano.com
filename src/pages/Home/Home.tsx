import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="custom-background flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 min-h-screen">
        <Nav />
        <div className="hero flex flex-col place-content-center items-center h-[420px] hero-background">
          <p className="text-7xl font-bold text-text mt-4">DIGITAL AGENCY</p>
          <p className="text-3xl font-light text-text max-w-lg text-center">
            professional and optimized websites for your business
          </p>
          <button className="bg-primary text-text px-4 py-2 rounded-lg mt-12 hover:bg-secondary transition-all duration-300">
            Create your website here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
