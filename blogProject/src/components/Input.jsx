import React ,{ useId } from "react";

function Input({
    label,
    type = "text",
    className = '',
    ...props
},ref) {
    const id = useId();
    return ( 
        <div className="w-fill">
            {label && <label htmlFor={id}>{label}</label>}
            <input
            className={`block w-full ${className}`} 
            type={type} 
            id={id}
            ref={ref}
            {...props}/>
        </div>
     );
}

export default React.forwardRef(Input);