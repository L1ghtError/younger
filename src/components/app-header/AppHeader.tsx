import './appHeaderStyles.css';
import ControlButton from '../control-button/ControlButton';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
function AppHeader() {
  return (
    <div id="appHeader">
      <div id="optionsWrapper">
        <div id="headerContentSeparator">
          <div className="headerText headerMain">Younger</div>
          <div id="headerSeparator">
            <a href="live" className="headerText headerLink">
              Live
            </a>
            <a href="help" className="headerText headerLink">
              Help
            </a>
            <ThemeSwitcher></ThemeSwitcher>
            <ControlButton btnDesc="Profile"></ControlButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
