import clsx from 'clsx';

export default function ButtonOutline({ children, type="button", size, icon, variant="primary", className, ...props }) {
    return (
        <button
            type={type}
            className={clsx(size && `btn-${size}`, icon && 'btn-icon', `btn btn-outline btn-outline-${variant} text-hover-${variant}`, className)}
            {...props}
        >
            {children}
        </button>
    );
}
