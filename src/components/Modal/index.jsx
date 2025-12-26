import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";

// kiểm tra xem Dom có thẻ .modal-root nếu chưa tạo thêm class div
const modalRoot =
  document.querySelector(".modal-root") || document.createElement("div");
modalRoot.className = "modal-root";

document.body.appendChild(modalRoot);

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen = false,
      children,
      shouldCloseOnOverlayClick = true,
      shouldCloseOnEsc = true,
      onRequestClose,
      onAfterOpen,
      onAfterClose,
      closeTimeoutMS = 0,
      overlayClassName,
      className,
      bodyOpenClassName,
      htmlOpenClassName,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(_isOpen);
    const [isHidden, setIsHidden] = useState(!_isOpen);

    // Sync avec prop _isOpen
    useEffect(() => {
      if (_isOpen) {
        setIsOpen(true);
        setIsHidden(false);
      } else {
        setIsOpen(false);
      }
    }, [_isOpen]);

    // Handle close avec useCallback
    const handleRequestClose = useCallback(() => {
      setIsOpen(false);
      setIsHidden(true);
      setTimeout(() => {
        onRequestClose?.();
      }, closeTimeoutMS);
    }, [onRequestClose, closeTimeoutMS]);

    // Ref methods
    useImperativeHandle(
      ref,
      () => ({
        open() {
          setIsOpen(true);
          setIsHidden(false);
        },
        close() {
          handleRequestClose();
        },
        toggle() {
          if (isOpen) {
            handleRequestClose();
          } else {
            setIsOpen(true);
            setIsHidden(false);
          }
        },
      }),
      [isOpen, handleRequestClose]
    );

    // Callbacks onAfterOpen/onAfterClose
    useEffect(() => {
      if (isOpen && !isHidden) {
        const timer = setTimeout(() => {
          onAfterOpen?.();
        }, closeTimeoutMS);
        return () => clearTimeout(timer);
      } else if (!isOpen && isHidden) {
        onAfterClose?.();
      }
    }, [isOpen, isHidden, onAfterOpen, onAfterClose, closeTimeoutMS]);

    // ESC key listener
    useEffect(() => {
      if (!shouldCloseOnEsc || !isOpen) return;

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          handleRequestClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, shouldCloseOnEsc, handleRequestClose]);

    // Body/HTML classes
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add(bodyOpenClassName || "modal-open");
        document.documentElement.classList.add(
          htmlOpenClassName || "modal-open"
        );
        document.body.style.overflowY = "hidden";
      } else {
        document.body.classList.remove(bodyOpenClassName || "modal-open");
        document.documentElement.classList.remove(
          htmlOpenClassName || "modal-open"
        );
        document.body.style.overflowY = "";
      }

      return () => {
        document.body.classList.remove(bodyOpenClassName || "modal-open");
        document.documentElement.classList.remove(
          htmlOpenClassName || "modal-open"
        );
        document.body.style.overflowY = "";
      };
    }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

    if (!isOpen && isHidden) return null;

    return createPortal(
      <div className={styles.modal}>
        <div
          className={clsx(
            styles.content,
            className,
            (isHidden || !isOpen) && styles.hiddenModal
          )}
        >
          <button className={styles.btnClose} onClick={handleRequestClose}>
            &times;
          </button>

          <div className={styles.body}>{children}</div>
        </div>

        <div
          className={clsx(
            styles.overlay,
            overlayClassName,
            (isHidden || !isOpen) && styles.hiddenOverlay
          )}
          onClick={() => {
            if (shouldCloseOnOverlayClick) {
              handleRequestClose();
            }
          }}
        />
      </div>,
      modalRoot
    );
  }
);

Modal.displayName = "Modal";

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
};

export default Modal;
