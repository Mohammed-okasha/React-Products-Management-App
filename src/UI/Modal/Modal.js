import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalBox from "./ModalBox";

const overlays = document.getElementById("overlays");
//====================================================
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.closeModal} />, overlays)}
      {ReactDOM.createPortal(<ModalBox children={props.children} />, overlays)}
    </>
  );
};

export default Modal;
