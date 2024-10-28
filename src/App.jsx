import AppHeader from './components/app-header/AppHeader.jsx';
import MainPage from './pages/main-page/MainPage.jsx';
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
