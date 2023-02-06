import profileSampleMale from "./assets/pictures/PortraitTest.jpg";

// Icons
import { DiJavascript } from "react-icons/di";

// Components
import BioCard from "./components/BioCard/BioCard";
import Portrait from "./Components/BioCard/Portrait";

function App() {
  return (
    <div className="App">
      <BioCard
        imgSrc={profileSampleMale}
        name="remi andreas"
        short="Some fancy descript short text"
      >
        {/* Skill Icons here */}
        <DiJavascript size={30} />
        <DiJavascript size={30} />
      </BioCard>
      <Portrait />
      <DiJavascript size={60}/>

      <div className="placeholder"></div>
    </div>
  );
}

export default App;
