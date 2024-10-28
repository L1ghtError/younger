import './controlButtonStyles.css';
import PropTypes from 'prop-types';
// TODO: extent porps, to simulate <a></a> behavior
function ControlButton({ btnIcon, btnDesc, className = '', onClick = () => {} }) {
  return (
    <button className={`${className} controlButton`} onClick={onClick}>
      {btnIcon && <img draggable="false" src={btnIcon} alt="" className="btnIcon" />}
      <div className="btnDesc">{btnDesc}</div>
    </button>
  );
}

ControlButton.propTypes = {
  btnIcon: PropTypes.string.isRequired,
  btnDesc: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default ControlButton;
