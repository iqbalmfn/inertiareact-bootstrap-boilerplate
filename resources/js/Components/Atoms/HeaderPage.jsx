import React from "react";

export default function HeaderPage({ children, className, flex="end" }) {
    return (
        <div
            className={`d-flex align-items-center justify-content-${flex} ${className} gap-2`}
        >
            {children}
        </div>
    );
}
