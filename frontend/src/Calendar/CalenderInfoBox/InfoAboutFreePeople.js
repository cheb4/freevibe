import React from "react";

function InfoAboutFreePeople({ free }) {
  if (!free) {
    return (
      <div>
        <div className="noFreePeople">There is no free people that day</div>
      </div>
    );
  }

  return (
    <div>
      {free.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
}

export default InfoAboutFreePeople;
