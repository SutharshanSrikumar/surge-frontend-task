import  React ,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Alert } from "../../helper/Alert";

export default function LoginLayout() {
    const [alertNotification, setAlertNotification] = useState(false);
    const [notificationContent, setNotificationContent] = useState("");
    const [typeOfMsg, setTypeOfMsg] = useState("");
    const alertNotify = useSelector((state) => state.alertNotification);
  
    useEffect(() => {
      const { type, payload } = alertNotify;

      if (type && payload) {
        setAlertNotification(true);
        setTypeOfMsg(type);
        setNotificationContent(payload);
      }
    }, [alertNotify]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            {alertNotification &&
            notificationContent &&
            Alert(notificationContent, typeOfMsg)}
            <Outlet />
        </>
    );
};

