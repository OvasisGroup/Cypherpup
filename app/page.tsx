import AboutComponent from "./components/AboutComponent";
import HeaderComponent from "./components/HeaderComponent";
import MiddleComponent from "./components/MiddleComponent";
import TheparkComponent from "./components/TheparkComponent";
import Thestandout from "./components/Thestandout";


export default function Home() {
  return (
    <div>
      <HeaderComponent/>
      <AboutComponent/>
      <TheparkComponent/>
      <MiddleComponent/>
      <Thestandout/>
    </div>
  );
}
