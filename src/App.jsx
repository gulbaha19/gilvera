import "./App.css";
import MainPage from "./pages/MainPage";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <MainPage />
    </div>
  );
}

export default App;
