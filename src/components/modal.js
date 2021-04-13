import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const el = useRef(null);

  if (!el.current) {
    el.current = document.createElement('div');
  }

  useEffect(() => {
    const modal = document.querySelector('#modal');
    modal.appendChild(el.current);

    return () => modal.removeChild(el.current);
  }, []);

  return createPortal(<div>{children}</div>, el);
};

export default Modal;
