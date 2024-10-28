import './weOffersStyles.css';
function WeOffers() {
  return (
    <div id="weOffers">
      <div className="weOffers__wrap">
        <div className="weOffers__item">
          <h3>Ability</h3>
          <p>All the features for the successful</p>
          <p> monetization of your creativity</p>
        </div>
        <div className="weOffers__item">
          <h3>Withdraw</h3>
          <p>Fast, automated withdrawals with </p>
          <p>the lowest possible commission</p>
          <p> and no additional payment chains </p>
          <p>for the service.</p>
        </div>
      </div>
      <div className="weOffers__wrap">
        <div className="weOffers__item">
          <h3>Stats</h3>
          <p>Widgets for</p> <p>statistics, such </p>
          <p>as top donor, </p> <p>latest donor, etc.</p>
        </div>
        <div className="weOffers__item">
          <h3>Integration</h3>
          <p>Compatible with OBS.</p>
          <p> Tip alerts, leaderboard</p>
          <p> and goal widgets</p>
        </div>
      </div>
    </div>
  );
}

export default WeOffers;
