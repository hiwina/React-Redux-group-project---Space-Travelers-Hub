import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';
import MyProfile from './routes/MyProfile';
import PageNotFound from './routes/PageNotFound';
import Dragon from './routes/Dragon';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="categories" element={<Missions />} />
        <Route path="categories" element={<Dragon />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
