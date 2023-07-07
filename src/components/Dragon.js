import PropTypes from 'prop-types';
import '../styles/dragon.css';

const Dragon = ({
  name, img, desc,
}) => (

  <div className=" d-flex-space g-10 my-20">
    <img src={img} className="logo" alt="dragon" />
    <div className="dragon-details">
      <h2 className="dragon-name">{name}</h2>
      <p className="dragon-desc">{desc}</p>
      <button type="button" className="dragon-reserve btn">Reserve Dragon</button>
    </div>
  </div>
);
Dragon.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Dragon;
