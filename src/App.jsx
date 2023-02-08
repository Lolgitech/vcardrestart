import profileSampleMale from "./assets/pictures/PortraitTest.jpg";

// Icons
import { DiJavascript } from "react-icons/di";

// Components
import BioCard from "./components/BioCard/BioCard";
import Avatar from "./Components/BioCard/Avatar";


// byttet navn Profile mot Avatar

function App() {
  return (
    <div className="App">
      <BioCard />
        
        <Avatar
        imgSrc={profileSampleMale}
        name="remi andreas"
        short="Some fancy descript short text"
      ></Avatar>
        {/* Skill Icons here */}
        <DiJavascript size={30} />
        <DiJavascript size={30} />
      <Avatar />
      <DiJavascript size={60}/>

      <div className="placeholder"></div>
    </div>
  );
}

export default App;
