import React, { useState } from "react";

const PlayerCard = ({ item }) => {
  const { img, name, statistics } = item;
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  //   console.log(toggle);
  return (
    <div className="player_card" onClick={handleToggle}>
      {toggle ? (
        <div className="image_div">
          <img className="image" src={img} alt="" />
        </div>
      ) : (
        <div className="list_div">
          <ul>
            {statistics.map((item, index) => (
              <p className="list" key={index}>
                🏀{item}
              </p>
            ))}
          </ul>
        </div>
      )}
      <div className="name">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PlayerCard;

// (item == "") ? ( <div className="bos"><p>bos</p></div> ) :
