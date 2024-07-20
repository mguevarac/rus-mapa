import React, { useState } from "react";
import "./App.css";
import AGEBInfo from "./AGEBInfo";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

function AddressBox(props) {
  const { setSelectPosition, selectedAgeb } = props; // Add selectedAgeb prop
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setIsSelected(false);
    setSelectedPlace(null);
    setLoading(true);

    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setListPlace(JSON.parse(result));
        setLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setLoading(false);
      });
  };

  const handleSelect = (item) => {
    setSelectPosition(item);
    setIsSelected(true);
    setSelectedPlace(item);
    setListPlace([]);
  };

  return (
    <div className="box-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Ingresa tu dirección en la CDMX..."
          className="search-bar"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button className="search-button" type="submit" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      {loading && <div>Cargando...</div>}
      {!isSelected && !loading && (
        <div>
          <ul>
            {listPlace.map((item) => (
              <div
                key={item?.place_id}
                className="list-item"
                onClick={() => handleSelect(item)}
              >
                <i className="fa fa-map-marker"></i>
                <span className="item-text">{item?.display_name}</span>
                <div className="divider"></div>
              </div>
            ))}
          </ul>
        </div>
      )}
      {isSelected && selectedPlace && (
        <AGEBInfo neighborhood={selectedPlace} ageb={selectedAgeb} />
      )}
    </div>
  );
}

export default AddressBox;
