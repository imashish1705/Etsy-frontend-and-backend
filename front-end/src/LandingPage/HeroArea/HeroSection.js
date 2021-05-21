import "./HeroSection.css";
//import Login from "../Components/Login";
//import LoginMe from "../Components/LoginMe";
import EverydayFinds from "./EverydayFinds";


function Heroarea() {
  return (
    <>
      <div className="heroarea__container">
        <h1 className="hero__title">
          Find things you'll love. Support independent sellers. Only here.
        </h1>
        <div className="finds__container">
          <h2 className="finds__title">Everyday finds</h2>
          <EverydayFinds/>
        </div>
      </div>
    </>
  );
}

export default Heroarea;
