import { ReactNode, useEffect, useState } from "react";
import "./_modal.scss";
import Button from "../Button/Button";
import { ButtonTypes } from "../Button/button.types";
import ModalInitial from "./ModalInitial";

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

type Scroll = "auto" | "hidden";
export interface ModalProps {
  modalOpen?: boolean;
  modalBackgroundScroll?: Scroll | undefined;
  modalClose?: ModalCloseTypes;
  modalName?: ModalNameTypes;
  modalCookiesBtn?: ButtonTypes[];
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

  // Activate the change when user open the modal window !
  useEffect(() => {
    document.body.style.overflow = scrollLock || "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollLock]);

  const handleCloseModal = () => {
    setModalOpen(false);
    setScrollLock("auto");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setScrollLock("hidden");
  };

  const handleButtonClick = (customLogic?: () => void) => {
    if (customLogic) {
      setTimeout(handleCloseModal, 200);
      customLogic();
    }
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
              {children ? children : <ModalInitial />}

              <div className=" uk-text-right">
                {modalData?.modalClose?.bottom || (
                  <button
                    onClick={handleCloseModal}
                    className="uk-button uk-button-default uk-modal-close"
                    type="button"
                  >
                    Close
                  </button>
                )}

                {modalData?.modalCookiesBtn && (
                  <div className="cookies__buttons">
                    {modalData?.modalCookiesBtn.map((btn, i) => (
                      <Button
                        buttonData={{
                          ...btn,
                          onClick: () =>
                            handleButtonClick(btn?.onClick ?? undefined),
                        }}
                        key={i}
                      />
                    ))}
                  </div>
                )}
              </div>
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
