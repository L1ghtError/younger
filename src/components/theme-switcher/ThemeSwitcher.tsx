import './themeSwitcherStyles.css';

import sun_ico from '../../assets/sun_ico.svg';
import moon_ico from '../../assets/moon_ico.svg';

function ThemeSwitcher() {
  const setTheme = (theme) => {
    document.querySelector('body').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };
  return (
    <div id="themeSwitcher">
      <button className="themeSwitch" onClick={() => setTheme('light')}>
        <img draggable="false" src={sun_ico} className="themeSwitchIco"></img>
      </button>
      <button className="themeSwitch" onClick={() => setTheme('dark')}>
        <img draggable="false" src={moon_ico} className="themeSwitchIco"></img>
      </button>
    </div>
  );
}

export default ThemeSwitcher;
