import { ReactNode, useState } from "react";
import "./_modal.scss";

type ModalCloseTypes = {
  top?: boolean;
  bottom?: boolean;
  outSide?: boolean;
};

type Scroll = "auto" | "hidden";
interface ModalProps {
  children?: ReactNode;
  modalClose?: ModalCloseTypes;
}

const Modal: React.FC<ModalProps> = ({ children, modalClose }) => {
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
            {modalClose?.top || (
              <button
                className="uk-modal-close-default"
                type="button"
                uk-close="true"
                onClick={handleCloseModal}
              ></button>
            )}
            <div className="uk-modal-body">
              {children ? (
                children
              ) : (
                <p>
                  Default modal content. You can pass custom content as children
                  to replace this. your Modal should look like this
                  <pre>
                    <code>
                      &lt;Modal&gt; <br /> &lt;SomeComponent/&gt; <br />
                      &lt;/Modal&gt;
                    </code>
                  </pre>
                  <ul>Optional Propertys</ul>
                  <li>
                    Modal Prevent Close from
                    <ul>
                      <small>
                        by default the modal close buttons are set to FALSE -
                        can be closet from anywhere of this 3 Propertys
                      </small>
                      <li>- bottom</li>
                      <li>- top</li>
                      <li>- outside</li>
                    </ul>
                  </li>
                </p>
              )}
            </div>
            <div className="uk-modal-footer uk-text-right">
              {modalClose?.bottom || (
                <button
                  onClick={handleCloseModal}
                  className="uk-button uk-button-default uk-modal-close"
                  type="button"
                >
                  Close
                </button>
              )}
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
        <div
          className="modal__overlay"
          onClick={!modalClose?.outSide ? handleCloseModal : undefined}
        ></div>
      )}
    </div>
  );
};

export default Modal;
