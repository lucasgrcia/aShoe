import React from "react";

export default function Btn({type, className, id, onClick, children}){
    return(
        <button type={type ? type : 'button'} 
        className={className ? `btn ${className}` : 'btn btn-primary'} 
        id={id}
        onClick={onClick}
        >{children}</button>
    )
}