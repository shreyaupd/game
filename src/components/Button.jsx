import "../App.css";
function Button({ id,leftIcon,title,containerClass }) {
  return (
    <button id={id} className={`group z-50 relative w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ${containerClass}`} >
       {leftIcon}
      <span className="relative inline-flex font-general text-xs uppercase"><div>{title}</div></span>
    </button>
  );
}

export default Button; 