import React from 'react';

function Button ({
    children,
    type = "button",
    bgColor = "bg-red-500",  
    textColor = "text-white", 
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-full font-bold duration-200 hover:opacity-90 ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;