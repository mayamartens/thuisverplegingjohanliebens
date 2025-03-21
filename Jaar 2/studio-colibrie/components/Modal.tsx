import React from "react";

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
  onProceed: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, message, onClose, onProceed }) => {
  return (
    <div className="">
      <div className="">
        <h3 className="font-bold text-lg ">{title}</h3>
        <div className="flex items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 text-success"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 110-18 9 9 0 010 18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 7v6"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 16h0"
            />
          </svg>
          <p className="py-4 ml-4">{message}</p>
        </div>
       
        <div className="modal-action">
          <button className="bg-black py-2 px-4 rounded-full text-white  mr-4" onClick={onClose}>
            Parameters aanpassen
          </button>
          <button className="bg-black py-2 px-4 rounded-full text-white  mr-4" onClick={onProceed}>
            Toch doorgaan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;