/*
import React, { useState } from 'react';
import PopUp from './PopUp';


const PlusButton = () => {
  const [showModal, setShowModal] = useState(false);

const openModal=()=>{
    setShowModal(true);
    console.log("Modal opened");

};

const closeModal=()=>{
    setShowModal(false);

}

  return (
    <div className="button-div" onClick={openModal}>
      <span className="plus-button">+</span>
      {showModal && <PopUp closeModal= {closeModal}/>}
    </div>
  );
}

export default PlusButton;

*/
import React, { useState } from 'react';
import PopUp from './PopUp';

const PlusButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <button onClick={openModal}>
    <div className="button-div" >
      <span className="plus-button" >+</span>
      {showModal && <PopUp closeModal={closeModal} />}
    </div>
    </button>
  );

}

export default PlusButton;
