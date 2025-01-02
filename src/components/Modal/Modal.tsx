import { ReactNode, useState } from "react";
import "./_modal.scss";

type ModalCloseTypes = {
  top?: boolean;
  bottom?: boolean;
  outSide?: boolean;
};

type ModalNameTypes = {
  name?: string;
  button?: boolean;
  classes?: string;
  onlyText?: {
    text?: string;
    highlight?: string;
    end?: string;
  };
};

type ModalConfirmButtonTypes = {
  name: string;
  onClick: () => void;
};

type Scroll = "auto" | "hidden";
export interface ModalProps {
  modalOpen?: boolean;
  modalBackgroundScroll?: Scroll | undefined;
  modalClose?: ModalCloseTypes;
  modalName?: ModalNameTypes;
  modalConfirmBtn?: ModalConfirmButtonTypes;
}

export interface ModalPropTypes {
  modalData: ModalProps;
  children?: ReactNode;
}

const Modal: React.FC<ModalPropTypes> = ({ modalData, children }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(
    modalData.modalOpen || false
  );
  const [scrollLock, setScrollLock] = useState<Scroll | undefined>(
    modalData?.modalBackgroundScroll
  );

  if (scrollLock) {
    document.body.style.overflow = scrollLock;
  }

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
        <a
          className={
            modalData?.modalName?.button
              ? `uk-button uk-button-default ${modalData?.modalName?.classes}`
              : `${modalData?.modalName?.classes}`
          }
          onClick={handleOpenModal}
        >
          {modalData?.modalName?.name}
        </a>
      </p>

      {modalData?.modalName?.onlyText && (
        <p className="uk-text-meta">
          {modalData?.modalName?.onlyText?.text}{" "}
          <a className="uk-text-primary" onClick={handleOpenModal}>
            {modalData?.modalName?.onlyText?.highlight}{" "}
          </a>{" "}
          {modalData?.modalName?.onlyText?.end}
        </p>
      )}

      {modalOpen && (
        <div className="modal">
          <div className="modal__content">
            {modalData?.modalClose?.top || (
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
              {modalData?.modalClose?.bottom || (
                <button
                  onClick={handleCloseModal}
                  className="uk-button uk-button-default uk-modal-close"
                  type="button"
                >
                  Close
                </button>
              )}
              {modalData?.modalConfirmBtn && (
                <button
                  onClick={modalData?.modalConfirmBtn?.onClick}
                  className="uk-button uk-button-secondary"
                >
                  {modalData?.modalConfirmBtn?.name}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {modalOpen && (
        <div
          className="modal__overlay"
          onClick={
            !modalData?.modalClose?.outSide ? handleCloseModal : undefined
          }
        ></div>
      )}
    </div>
  );
};

export default Modal;
