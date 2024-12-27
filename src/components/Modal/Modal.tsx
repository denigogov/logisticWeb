import { ReactNode, useState } from "react";
import "./_modal.scss";

interface ModalProps {
  children?: ReactNode;
}

type Scroll = "auto" | "hidden";

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [scrollLock, setScrollLock] = useState<Scroll>("auto");

  document.body.style.overflow = scrollLock;

  const handleCloseModal = () => {
    setModalOpen(false);
    setScrollLock("auto");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setScrollLock("hidden");
  };

  return (
    <div>
      <p uk-margin="true">
        <a className="uk-button uk-button-default" onClick={handleOpenModal}>
          Modal 1
        </a>
      </p>

      {modalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button
              className="uk-modal-close-default"
              type="button"
              uk-close="true"
              onClick={handleCloseModal}
            ></button>
            <div className="uk-modal-header">
              <h2 className="uk-modal-title">Modal Title</h2>
            </div>
            <div className="uk-modal-body">
              {children ? (
                children
              ) : (
                <p>
                  Default modal content. You can pass custom content as children
                  to replace this.
                </p>
              )}
            </div>
            <div className="uk-modal-footer uk-text-right">
              <button
                onClick={handleCloseModal}
                className="uk-button uk-button-default uk-modal-close"
                type="button"
              >
                Close
              </button>
              <button
                onClick={() => alert("Action performed!")}
                className="uk-button uk-button-secondary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="modal__overlay" onClick={handleCloseModal}></div>
      )}
    </div>
  );
};

export default Modal;
