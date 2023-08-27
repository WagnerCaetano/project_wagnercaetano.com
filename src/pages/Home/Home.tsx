import { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import "./Home.css";

function Home() {
  useEffect(() => {
    const chatnow_cta_button = document.querySelector(".chatnow_cta_button");
    const chatnow_cta_message = document.querySelector(".chatnow_cta_message");

    chatnow_cta_button.addEventListener("mouseover", () => {
      chatnow_cta_message.classList.remove("hidden");
    });

    chatnow_cta_button.addEventListener("mouseout", () => {
      chatnow_cta_message.classList.add("hidden");
    });

    const chatnow_images_button = document.querySelector(".chatnow_images_button");
    const chatnow_images_message = document.querySelector(".chatnow_images_message");

    chatnow_images_button.addEventListener("mouseover", () => {
      chatnow_images_message.classList.remove("hidden");
    });

    chatnow_images_button.addEventListener("mouseout", () => {
      chatnow_images_message.classList.add("hidden");
    });

    const chatnow_navbar_button = document.querySelector(".chatnow_navbar_button");
    const chatnow_navbar_message = document.querySelector(".chatnow_navbar_message");

    chatnow_navbar_button.addEventListener("mouseover", () => {
      chatnow_navbar_message.classList.remove("hidden");
    });

    chatnow_navbar_button.addEventListener("mouseout", () => {
      chatnow_navbar_message.classList.add("hidden");
    });
  }, []);

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

      <div className="flex flex-col w-full max-w-7xl p-8 gap-24">
        <div className="card-background rounded-lg p-4 flex flex-col items-center gap-4 hover:shadow-[0_0px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300">
          <h2 className="text-4xl font-bold text-text">Project 1</h2>
          <img src="/assets/chatnow.png" alt="" className="rounded-lg mt-4" />
          <div className="absolute flex flex-col lg:top-[95em] lg:left-[29em] w-48 h-38">
            <span className="chatnow_cta_button w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full cursor-pointer border-primary border-2 z-10" />
            <span className="relative -top-6 w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full border-primary border-2 animate-ping" />
            <p className="chatnow_cta_message hidden w-48 bg-secondary bg-opacity-25 rounded p-2 -mt-4 border-darkPrimary border-2 border-opacity-25 text-darkPrimary font-semibold transition-all">
              Customizable CTA buttons optimized for your business
            </p>
          </div>

          <div className="absolute flex flex-col lg:top-[165%] lg:left-[60%] w-48 h-38">
            <span className="chatnow_images_button w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full cursor-pointer border-primary border-2 z-10" />
            <span className="relative -top-6 w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full border-primary border-2 animate-ping" />
            <p className="chatnow_images_message hidden w-48 bg-secondary bg-opacity-25 rounded p-2 -mt-4 border-darkPrimary border-2 border-opacity-25 text-darkPrimary font-semibold transition-all">
              Interactive images that will make your website stand out
            </p>
          </div>

          <div className="absolute flex flex-col lg:top-[121%] lg:left-[54%] w-48 h-38">
            <span className="chatnow_navbar_button w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full cursor-pointer border-primary border-2 z-10" />
            <span className="relative -top-6 w-6 h-6 bg-[rgba(255,_255,_255,_0.7)] rounded-full border-primary border-2 animate-ping" />
            <p className="chatnow_navbar_message hidden w-48 bg-secondary bg-opacity-25 rounded p-2 -mt-4 border-darkPrimary border-2 border-opacity-25 text-darkPrimary font-semibold transition-all">
              Multi-page websites with a navbar that will make your website look professional
            </p>
          </div>
        </div>

        <div className="card-background rounded-lg p-4 flex flex-col items-center gap-4 hover:shadow-[0_0px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300">
          <h2 className="text-4xl font-bold text-text">Project 2</h2>
          <img src="/assets/chatnow.png" alt="" className="rounded-lg mt-4" />
        </div>
      </div>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </div>
  );
}

export default Home;
