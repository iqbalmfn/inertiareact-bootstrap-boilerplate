import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Toast({trigger=false}) {
    const [show, setShow] = useState(trigger)

    useEffect(() => {
        toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }, [show])
    
  return (
    <ToastContainer />
  )
}
