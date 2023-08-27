import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="flex flex-col h-screen w-scren items-center">
      <div className="custom-background w-full flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 min-h-[1024px]">
          <Nav />
          <div className="hero flex flex-col place-content-center items-center h-[680px] hero-background">
            <h1 className="text-7xl font-bold text-text mt-4">DIGITAL AGENCY</h1>
            <p className="text-3xl font-light text-text max-w-lg text-center">
              professional and optimized websites for your business
            </p>
            <button className="text-4xl bg-primary text-text px-8 py-4 rounded-lg mt-12 hover:bg-secondary transition-all duration-300 z-10">
              Create your website here
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-7xl p-8 gap-8">
        <div className="card-background shadow-2xl rounded-lg p-4 flex flex-row items-center gap-4 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="w-1/4 flex flex-col justify-between h-full py-12 text-text">
            <p className="text-right">
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>

            <p className="text-right">
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-text">Projeto 1</h2>
            <img src="https://picsum.photos/600/400" alt="" className="rounded-lg mt-4" />
          </div>
          <div className="w-1/4 flex flex-col justify-between h-full py-12 text-text">
            <p>
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
            <p>
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
          </div>
        </div>

        <div className="card-background shadow-2xl rounded-lg p-4 flex flex-row items-center gap-4 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <div className="w-1/4 flex flex-col justify-between h-full py-12 text-text">
            <p className="text-right">
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>

            <p className="text-right">
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-text">Projeto 1</h2>
            <img src="https://picsum.photos/600/400" alt="" className="rounded-lg mt-4" />
          </div>
          <div className="w-1/4 flex flex-col justify-between h-full py-12 text-text">
            <p>
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
            <p>
              <b>Idea</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam
            </p>
          </div>
        </div>
      </div>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </div>
  );
}

export default Home;
