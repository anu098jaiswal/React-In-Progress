import React from "react";
import { initialTravelPlan } from "./Places";
import { useState } from "react";

function PlaceTree({ place }) {
  const childPlace = place.childPlaces; //america africa etc
  //next time== Botswana. Egypt;Kenya;



  
return (
  <div>
    <li>
      {" "}
      {place.title}
      <ol>
        {" "}
        {childIds.map(childid) => (
         
            <PlaceTree key={id}  />
         
        ))}
      </ol>
    </li>
  </div>
);

}

export default function NestedPlaces() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = initialTravelPlan.childPlaces;//earth moon mars
  
return (
  <div>
    {planets.map((place) => (
      <PlaceTree key={place.id} place={place} />
    ))}
  </div>
);
  

}
