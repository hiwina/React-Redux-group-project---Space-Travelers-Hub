import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonSlice';
import Dragon from '../components/Dragon';

const Dragons = () => {
  const dragons = useSelector((store) => store.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);
  return (
    <div className="container">
      {dragons.loading && <div>loading</div>}
      {!dragons.loading && dragons.error ? (
        <div>
          Error
          {dragons.error}
        </div>
      ) : null}
      {!dragons.loading && dragons.rocket.length ? (
        dragons.rocket.map((dragon) => (
          <Dragon
            key={dragon.id}
            name={dragon.name}
            img={dragon.flickr_images[0]}
            id={dragon.id}
            desc={dragon.description}
          />
        ))
      ) : null}
    </div>
  );
};

export default Dragons;
