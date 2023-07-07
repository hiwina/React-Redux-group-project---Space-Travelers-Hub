import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar';
import Rocket from './components/Rocket';
import Mission from './pages/Missions';
import Myprofile from './components/profile';
import Dragon from './components/Dragon';
import { getMissions } from './redux/missions/missionSlice';
import DragonsPage from './pages/DragonsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
