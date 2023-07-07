import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RocketItem from './RocketItem';
import { getData } from '../redux/Rocket/rocketSlice';

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  if (error) {
    return <div>{error.message}</div>;
  }
  return isLoading ? (
    <div>Data is loading...</div>
  ) : (
    <>
      {rockets.length > 0 ? (
        <div>
          {rockets.map((data) => (
            <RocketItem key={data.id} data={data} />
          ))}
        </div>
      ) : (
        'no rockets'
      )}
    </>
  );
};

export default Rockets;
