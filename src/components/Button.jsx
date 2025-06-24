import "../App.css";
function Button({ id,leftIcon,title,containerClass,rightIcon }) {
  return (
    <button id={id} className={`group z-50 relative w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-violet-50 ${containerClass}`} >
       {leftIcon}
      <span className="relative inline-flex font-general text-xs uppercase"><div>{title}</div></span>
          {rightIcon}
    </button>
  );
}

export default Button; 