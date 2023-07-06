import { useDispatch } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { useEffect } from 'react';
import Missions from './pages/Missions';
import Root from './layouts.js/root';
import { getMissions } from './redux/missions/missionSlice';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Missions />} />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
