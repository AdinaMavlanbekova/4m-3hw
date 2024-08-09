import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import TodoPage from "./pages/todoPage/TodoPage";

function App() {
  return (
    <div className="App">
        <MainPage/>
        <AboutPage/>
        <TodoPage/>
    </div>
  );
}

export default App;
