import './mainPageStyles.css';
import IntroContainer from '../../containers/intro-container/IntroContainer';
import WeOffers from '../../containers/we-offers/WeOffers';
import actresss from '../../assets/pic_one.png';
function MainPage() {
  return (
    <div id="MainPage">
      <IntroContainer></IntroContainer>
      <img draggable="false" src={actresss} alt="actress" id="backgroundActress" />
      <WeOffers></WeOffers>
    </div>
  );
}

export default MainPage;
