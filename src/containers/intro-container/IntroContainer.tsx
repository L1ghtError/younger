import './introContainerStyles.css';
import ControlButton from '../../components/control-button/ControlButton';
function IntroContainer() {
  return (
    <div id="introContainer">
      <div id="introWrapper">
        <h1 className="regularIntroText" id="introContainer__regular">
          Monetise your
        </h1>
        <h1 className="regularIntroText" id="introContainer__regular">
          creativity with
        </h1>
        <h1 className="regularIntroText" id="introContainer__regular_appname">
          Younger
        </h1>
      </div>
      <ControlButton
        className="introButton"
        btnDesc="Create account"
        btnIcon={''}
        onClick={()=>{}}></ControlButton>
      <p>30 Days free trial | No credit required</p>
    </div>
  );
}

export default IntroContainer;
