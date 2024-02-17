/*
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";


const PopUp = ({  addGroupName }) => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [groupName, setGroupName] = useState("");

    const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addGroupName(groupName,selectedColor);
    

  };

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  return (
    <div className="popup-div">
  
      <div className="popup-modal">
        <span className="create-group">Create New Group</span>
         
        <form onSubmit={handleSubmit}>
          <label className="group-name">
            Group Name
            <input
              className="input-text"
              placeholder="Enter group name"
              value={groupName}
              onChange={handleGroupName}
            />
          </label>
          <label className="choose-color">Choose Color</label>
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-option${index + 1}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
          <button className="create-button" type="submit" onClick={closeModal} >
            create
          </button>
        </form>
  
      </div>
    </div>
  );
};

PopUp.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addGroupName: PropTypes.func.isRequired,
};

export default PopUp;

*/

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const PopUp = ({ closeModal, addGroupName }) => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [groupName, setGroupName] = useState("");


    const PlusButton = () => {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => {
      setShowModal(true);
      console.log("Modal opened");
    };
  
    const closeModal = () => {
      setShowModal(false);
    };


    const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addGroupName(groupName,selectedColor);
    closeModal();
     
  };

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  return (

    <div className="popup-div">
      <button onClick={openModal}>
      <div className="button-div" >
      <span className="plus-button" >+</span>
      {showModal && <PopUp closeModal={closeModal} />}
      </div>
    </button>
    
      <div className="popup-modal">
        <span className="create-group">Create New Group</span>
         
        <form onSubmit={handleSubmit}>
          <label className="group-name">
            Group Name
            <input
              className="input-text"
              placeholder="Enter group name"
              value={groupName}
              onChange={handleGroupName}
            />
          </label>
          <label className="choose-color">Choose Color</label>
          <div className="color-options">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-option${index + 1}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              ></div>
            ))}
          </div>
          <button className="create-button" type="submit" onClick={closeModal}>
            create
          </button>
        </form>
      
      </div>
    </div>
  );
};

PopUp.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addGroupName: PropTypes.func.isRequired,
};
}
export default PopUp;

