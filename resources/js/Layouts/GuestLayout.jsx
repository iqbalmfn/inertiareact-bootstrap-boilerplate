
import '@/assets/css/login.css'
import { ToastContainer } from 'react-toastify';

export default function Guest({ children }) {
    return (
        <>
            <div className="d-flex flex-column flex-root login">
                {children}
            </div>
            <ToastContainer />
        </>
    );
}
