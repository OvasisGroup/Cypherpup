import AboutComponent from "./components/AboutComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MeettheTeamComponent from "./components/MeettheTeamComponent";
import MiddleComponent from "./components/MiddleComponent";
import TeknomicsComponent from "./components/TeknomicsComponent";
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
      <TeknomicsComponent/>
      <MeettheTeamComponent/>

      <FooterComponent/>
    </div>
  );
}
