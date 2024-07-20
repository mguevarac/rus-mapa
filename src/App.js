import React, { useState } from "react";
import "./App.css";
import Maps from "./Maps";
import AddressBox from "./AddressBox";

function App() {
  const [selectPosition, setSelectPosition] = useState(null);
  const [selectedAgeb, setSelectedAgeb] = useState(null); // Add state for selectedAgeb

  return (
    <>
      <header>
        <span>
          Reclaiming Urban Spaces <p>| CDMX</p>
        </span>
      </header>

      <div className="App">
        <div className="app-map">
          <Maps
            selectPosition={selectPosition}
            setSelectedAgeb={setSelectedAgeb}
          />{" "}
          {/* Pass setSelectedAgeb */}
        </div>
        <div className="app-address-box">
          <AddressBox
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
            selectedAgeb={selectedAgeb} // Pass selectedAgeb
          />
        </div>
      </div>

      <footer>
        <p>
          Project created for the <br /> Data Science Bootcamp @{" "}
          <a
            href="https://www.lewagon.com/es/mexico"
            target="_blank"
            rel="noopener noreferrer"
          >
            Le Wagon
          </a>
        </p>
        <p>
          by{" "}
          <a href="/batch.html" target="_blank">
            batch-1611-mexico
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
