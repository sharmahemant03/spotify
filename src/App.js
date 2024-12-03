import LeftSection from "./components/LeftSection";
import MidSection from "./components/MidSection";
import Navbar from "./components/Navbar";
import Play from "./components/Play";
import RightSection from "./components/RightSection";
function App() {
  return (
  <div className="bg-black">
    <Navbar/>
    <div className="flex ">
      <LeftSection/>
      <MidSection/>
      <RightSection/>
    </div>
    <Play/>
  </div>
   
   

  );
}

export default App;
