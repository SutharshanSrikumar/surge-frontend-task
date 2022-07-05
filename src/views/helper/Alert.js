import Swal from "sweetalert2";

export const Alert = (notificationContent,typeOfMsg) => {
    if(notificationContent){
        if(typeOfMsg === "success"){
            Toast.fire({
                icon: 'success',
                title: notificationContent,
              });
        } else {
            Toast.fire({
                icon: 'error',
                title: notificationContent,
              });
        }
    }
    return true;
    
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
