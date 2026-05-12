import React, { useState } from "react";

function GuestCounter() {

  const [count, setCount] = useState(1);

  return (

    <div>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <span>{count}</span>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

    </div>

  );
}

export default GuestCounter;