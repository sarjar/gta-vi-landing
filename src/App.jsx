import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div className="text-3xl text-indigo-600">
        <h1>Welcome to the world of GTA and GSAP!</h1>
      </div>
    </main>
  );
};

export default App;
