import AboutComponent from "./components/AboutComponent";
import ContactsComponent from "./components/ContactsComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavigationComponent from "./components/NavigationComponent";
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
      <Thestandout/>
      <TeknomicsComponent/>
      <ContactsComponent/>
      <FooterComponent/>
    </div>
  );
}
