import React, { useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import "./Modal.scss";

/**
 * Template for building modal
 * windows. Closes the modal
 * on click outside of the modal
 * or on cross icon click.
 *
 * @return {*} {JSX.Element | null}
 */
const Modal = ({ visible, setVisible, children }) => {
  const modalRef = useRef(null);

  /**
   * Closes modal window if
   * detects a click outside.
   *
   * @param {MouseEvent} event
   */
  const handleTrackClickOutside = (event) => {
    const shouldCloseModal =
      modalRef.current && !modalRef.current.contains(event.target);

    if (shouldCloseModal) setVisible(false);
  };

  /**
   * Adds 'mousedown' event listener
   * in order to track clicks outside of
   * the modal window.
   */
  useEffect(() => {
    document.addEventListener("mousedown", handleTrackClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleTrackClickOutside);
    };
  }, [modalRef]);

  if (visible) {
    return (
      <div className="modal">
        <div ref={modalRef} className="modal__content">
          <div className="modal__content_inner">
            <IoMdClose
              className="modal__content_close-icon"
              onClick={() => setVisible(false)}
            />

            {children}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
