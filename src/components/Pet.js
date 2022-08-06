import React, {useState} from "react";

function Pet( {petInfo, onAdoptPet} ) {

  const [isAdopted, setIsAdopted] = useState(false)
  const {id, name, type, age, weight} = petInfo

  function toggleIsAdopted() {
    setIsAdopted(isAdopted => !isAdopted)
    onAdoptPet(id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {petInfo.gender === "male" ? '♂' : '♀'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
        <button className="ui disabled button">Already adopted</button>
        :
        <button className="ui primary button" onClick={toggleIsAdopted}>Adopt pet</button>
        }
        {/* <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button" onClick={toggleIsAdopted}>Adopt pet</button> */}
      </div>
    </div>
  );
}

export default Pet;
