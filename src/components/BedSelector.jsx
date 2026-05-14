import React, { useState } from "react";

function BedSelector({ beds }) {

  const [selectedBed, setSelectedBed] = useState(null);

  return (

    <div>

      <h2>Select Your Bed</h2>

      <div className="bed-grid">

        {
          beds.map((bed) => (

            <button
              key={bed.id}
              disabled={!bed.available}
              className={
                bed.available
                  ? "bed available"
                  : "bed booked"
              }
              onClick={() => setSelectedBed(bed.number)}
            >

              {bed.number}

            </button>

          ))
        }

      </div>

      {
        selectedBed && (
          <h3>
            Selected:
            {selectedBed}
          </h3>
        )
      }

    </div>

  );
}

export default BedSelector;