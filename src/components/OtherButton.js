import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Modal from './Modal';

import { AnimateSharedLayout, motion } from 'framer-motion';

const OpenModalButton = styled(motion.button)`
  width: 11rem;
  height: 2.5rem;
  font-size: 1.5rem;
  background-color: #ffffff99;
  border: none;
  outline: none;
  border-radius: .3rem;
  &:hover {
    background-color: #ffffffbb;
    cursor: pointer;
  }
  &:active {
    background-color: #ffffffff;
  }
`;

const OtherButton = ({ modalInfo = () => {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function setModal(open) {
    setIsModalOpen(open);
  }

  return (
    <AnimateSharedLayout>
      <OpenModalButton
        onClick={() => setModal(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Other
      </OpenModalButton>
      <Modal isOpen={isModalOpen} handleClose={() => setModal(false)}>
        {modalInfo(setModal)}
      </Modal>
    </AnimateSharedLayout>
  );
};

export default OtherButton;
