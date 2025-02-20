import './controlButtonStyles.css';

interface ControlButtonProps {
  btnIcon: string;
  btnDesc: string;
  className: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

// TODO: extent porps, to simulate <a></a> behavior
function ControlButton({ btnIcon, btnDesc, className = '', onClick = () => {} }:ControlButtonProps ) {
  return (
    <button className={`${className} controlButton`} onClick={onClick}>
      {btnIcon && <img draggable="false" src={btnIcon} alt="" className="btnIcon" />}
      <div className="btnDesc">{btnDesc}</div>
    </button>
  );
}

export default ControlButton;
