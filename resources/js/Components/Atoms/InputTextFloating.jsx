import React from "react";

export default function InputTextFloating({type="text", label, size, ...props}) {
    return (
        <div className="form-floating mb-7">
            <input
                type={type}
                className={`form-control ${size}`}
                // id="floatingInput"
                placeholder="name@example.com"
                {...props}
            />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    );
}
