import AppHeader from './components/app-header/AppHeader.js';
import MainPage from './pages/main-page/MainPage.js';
import './App.css';

function App() {
  const selectedTheme = localStorage.getItem('theme');
  if (selectedTheme) {
    document.querySelector('body').setAttribute('data-theme', selectedTheme);
  }
  return (
    <>
      <div id="appBackground"></div>
      <AppHeader></AppHeader>
      <MainPage></MainPage>
    </>
  );
}

export default App;
