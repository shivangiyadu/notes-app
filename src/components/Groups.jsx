 
/* 
import { useState } from "react";
import PlusButton from "./PlusButton";
import PopUp from "./PopUp";

const Groups = () => {
  const [groupNames, setGroupNames] = useState([]);
  console.log(groupNames);

  const addGroupName = (name, color) => {
    setGroupNames([...groupNames, { name, color }]);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("");
  };

  return (
    <div className="group-section">
      <div className="group-list">
        <ul>
          {groupNames.map((group, index) => (
            <li key={index}>
              <div className="group-item">
                <div
                  className="circle"
                  style={{ backgroundColor: group.color }}
                >
                  {getInitials(group.name)}
                </div>              
                <span className="group-name">{group.names}</span>
               
              </div>
            </li>
          ))}
        </ul>
        <PopUp addGroupName={addGroupName} />
      </div>
      <PlusButton />
    </div>
  );
};

export default Groups;
*/