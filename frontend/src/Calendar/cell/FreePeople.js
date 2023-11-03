import React from "react";

function FreePeople({ data }) {
  if (data.free) {
    return <div className="cellNumberOFfree">{data.free.length}</div>;
  }
  return <></>;
}

export default FreePeople;
