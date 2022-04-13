import React, { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import './DialogBox.css';

function DialogBox({ closeDialog, isOpen, children }) {
  const refDialog = useRef(null);

  useEffect(() => {
    if (isOpen) {
      refDialog.current.showModal();
    } else {
      refDialog.current.close();
    }
  }, [isOpen])

  const close = (e) => {
    if (e.keyCode === 27 || e.target === refDialog.current) {
      closeDialog();
    }
  }

  return createPortal(<dialog ref={refDialog} aria-modal="true" onClick={close} onKeyDown={close}>
    <div role="document">
      {children}
    </div>
  </dialog>, document.getElementById('dialog-root'));
}

export default DialogBox;
