import { useState } from "react";
import type { MouseEvent } from "react";

function ListGroup() {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
  // let selectedIndex = 0;

  // variable, updater function
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Event handler
  // Need to add type annotation for the event parameter, because it can not be inferred
  const handleClict = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {/* { cities.length === 0 ? <p>No cities found</p> : null} */}
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            /* do NOT use handleClict(), passs the reference, not the result of the function call */
            // onClick={handleClict}
            // onClick={() => {selectedIndex = index; console.log(selectedIndex);}}
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

// Why need to export a component?
// Each file in modern JS/TS is a module.
// By default: Variables, functions, components in a file are private.Other files cannot see them
export default ListGroup;
