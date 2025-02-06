import AboutComponent from "./components/AboutComponent";
import ContactsComponent from "./components/ContactsComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import MeettheTeamComponent from "./components/MeettheTeamComponent";
import MiddleComponent from "./components/MiddleComponent";
import NavigationComponent from "./components/NavigationComponent";
import SubscriptionComponent from "./components/SubscriptionComponent";
import TeknomicsComponent from "./components/TeknomicsComponent";
import TheparkComponent from "./components/TheparkComponent";
import Thestandout from "./components/Thestandout";


export default function Home() {
  return (
    <div>
      <NavigationComponent/>
      <HeaderComponent/>
      <TheparkComponent/>
      <AboutComponent/>
      
      <MiddleComponent/>
      <Thestandout/>
      <TeknomicsComponent/>
      <MeettheTeamComponent/>
      <ContactsComponent/>
      <SubscriptionComponent/>

      <FooterComponent/>
    </div>
  );
}
