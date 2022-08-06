import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleSetFilters(type) {
    setFilters( {type: `${type} `})
  }

  function handleAdoptPet(id) {
    pets.map(pet => { 
      if(pet.id === id) {
        return pet.isAdopted = true
      }
    })
  }

  function handleFindPetsClick() {
    if(filters.type === "all") {
      return fetch(`http://localhost:3001/pets`)
      .then(res => res.json())
      .then(data => setPets(data))
    }
    if(filters.type !== "all") {
      return fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(res => res.json())
      .then(data => setPets(data))
    }
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleSetFilters} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser petData={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
