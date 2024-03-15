import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa6";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="h-[50vh] md:h-[75vh] bg-gradient-to-bl from-[rgba(176,229,201,0.7)] to-[rgba(92,202,238,0.21)]  text-zinc-700 flex flex-col justify-center items-center">
        <p className="uppercase font-bold text-teal-900/75 tracking-[0.4rem] text-2xl mb-2">
          CHRONOSYNC
        </p>
        <img className="w-fit h-fit" src="/logo-lg.png" alt="" />
        <h3 className="mt-12 mb-2 text-3xl">Unleash your</h3>
        <h1 className="text-4xl md:text-5xl text-center rounded-lg uppercase text-teal-800 font-bold">
          Project Potential
        </h1>
      </section>
      {/* Introduction */}
      <section className="text-zinc-800 my-6 md:my-12 w-[85%] md:w-[90%] lg:w-[75%] mx-auto">
        <h1 className="text-3xl md:text-4xl mb-6 font-medium">
          Why choose ChronoSync?
        </h1>
        <div className="flex flex-wrap text-lg gap-8">
          <div className="w-full md:w-[45%]">
            Unshackle your team&apos;s productivity with our advanced project
            management features, tailored to ensure smooth and efficient
            workflows. Don&apos;t settle for less, elevate your game with
            Chronosync!
          </div>
          <div className="w-full md:w-[45%]">
            Kanban boards to visualize progress, task lists to keep everyone
            organized and impressive analytics to optimize for success,
            Chronosync&apos;s toolkit is overflowing with greatness. Achieve
            outstanding project outcomes today!
          </div>
        </div>
      </section>
      {/* Screenshots */}
      {/* Testimonials */}
      <section className="bg-teal-900 p-8">
        <h1 className="text-center text-white  text-3xl md:text-4xl mb-10">
          Here&apos;s what out clients say about us
        </h1>

        <div className="flex flex-wrap gap-4 justify-between lg:w-[80%] mx-auto">
          <div className="p-4 bg-teal-100/10 rounded-xl text-lg text-teal-100 w-full md:w-[48%]">
            Chronosync helped us realign our priorities and optimize our wrk
            processes, skyrocketing efficiency across the board. A game-changer!
            <br />
            <div className="italic text-right mt-6 text-teal-50">
              &#45; Productify
            </div>
          </div>
          <div className="p-4 bg-teal-100/10 rounded-xl text-lg text-teal-100 w-full md:w-[48%]">
            Our teams have never been so organized. From ideation to
            implementation, Chronosync has revolutionized the way we handle
            projects at Innovatix.
            <br />
            <div className="italic text-right mt-6 text-teal-50">
              &#45; Innovatix
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="w-[85%] md:w-[90%] lg:w-[75%] my-10 mx-auto">
        <h1 className="text-5xl mb-2">So what are you waiting for?</h1>
        <h3 className="text-3xl text-zinc-700 mb-6">
          Transform your project managament today
        </h3>
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 rounded-md mr-2 bg-teal-700 text-white hover:bg-teal-600 transit"
        >
          Get Started
        </button>
        <button className="px-4 py-2 rounded-md bg-zinc-200/50 hover:bg-zinc-200 hover:text-teal-500 transit text-teal-700 font-semibold">
          Learn More
        </button>
      </section>
      {/* Footer */}
      <footer className="border-t border-zinc-300 bg-zinc-100 pb-10 text-zinc-500">
        {/* Links */}
        <div className="w-[85%] md:w-[90%] lg:w-[75%] mx-auto my-20 flex flex-wrap flex-col md:flex-row justify-between gap-8">
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Documentation</li>
            <li>Support</li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="flex flex-col items-center">
          <ul className="flex items-center gap-4 justify-evenly mb-2">
            <li>
              <FaFacebookF
                size={24}
                className="hover:text-blue-600 transit cursor-pointer"
              />
            </li>
            <li>
              <FaXTwitter
                size={24}
                className="hover:text-black transit cursor-pointer"
              />
            </li>
            <li>
              <FaInstagram
                size={24}
                className="hover:text-fuchsia-500 transit cursor-pointer"
              />
            </li>
            <li>
              <FaTwitch
                size={24}
                className="hover:text-violet-600 transit cursor-pointer"
              />
            </li>
          </ul>
          <p>&copy; 2023 Chronosync. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
