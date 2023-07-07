import { Routes, Route } from 'react-router-dom';
import './App.css';

import Rocket from './components/Rocket';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Rocket />} />
      </Routes>
    </div>
  );
}

export default App;
