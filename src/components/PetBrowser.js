import React from "react";

import Pet from "./Pet";

function PetBrowser( {petData} ) {

  function handleAdoptPet(id) {
    console.log(id)
  }

  return (
    <div className="ui cards">
      { petData.map(pet => { return<Pet key={pet.id} petInfo={pet} onAdoptPet={handleAdoptPet}/>}) }
    </div>
  )
}


export default PetBrowser;
