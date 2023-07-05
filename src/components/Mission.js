import PropTypes from 'prop-types';
import classNames from 'classnames';

const Mission = ({ missionName, missionDescription, highlights }) => {
  const rows = classNames('border pl-2', {
    'bg-gray-100':highlights;
  });
  return (
    <>
      <tr className={rows}>
        <td className='border pl-5 pt-5 align-top'>{ missionName }</td>
        <td className='border p-5 text-justify'>{ missionDescription }</td>
        <td className='border pl-5'>Not a Member</td>
        <td className='border pl-5' aria-hidden='true' />
      </tr>
    </>
  );
};

export default Mission;

Mission.PropTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  highlights: PropTypes.bool.isRequired,
};
