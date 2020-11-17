import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notification = (message, type) => {
  let config = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  switch (type) {
    case "SUCCESS":
      toast.success(message, config);
      break;
    case "ERROR":
      toast.error(message, config);
      break;
    case "INFO":
      toast.info(message, config);
      break;
    case "WARN":
      toast.warning(message, config);
      break;
    default:
      break;
  }
};
