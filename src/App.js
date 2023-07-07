import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar';
import Rocket from './components/Rocket';
import Mission from './components/Mission';
import Myprofile from './components/profile';
// import Dragon from './components/Dragon';
import DragonsPage from './pages/DragonsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/dragon" element={<DragonsPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
