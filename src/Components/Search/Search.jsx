// working just for san francisco
// import React, { useState, useEffect } from "react";

// const API_KEY = "d545a7170d7f47cfb83cfa9ad64b13e7";
// const LOCATION = "San Francisco, CA"; // Example location

// const SearchComponent = () => {
//   const [foodTrucks, setFoodTrucks] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//             LOCATION
//           )}&key=${API_KEY}`
//         );
//         const data = await response.json();
//         const { lat, lng } = data.results[0].geometry;

//         const foodTruckResponse = await fetch(
//           `https://data.sfgov.org/resource/rqzj-sfat.json?$select=applicant,facilitytype,address,fooditems,latitude,longitude,schedule,locationdescription&$where=within_circle(location, ${lat}, ${lng}, 500)&$limit=10`
//         );
//         const foodTruckData = await foodTruckResponse.json();
//         setFoodTrucks(foodTruckData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Food Trucks Near {LOCATION}</h2>
//       <ul>
//         {foodTrucks.map((truck) => (
//           <li key={truck.applicant}>
//             <strong>{truck.applicant}</strong>
//             <p>Facility Type: {truck.facilitytype}</p>
//             <p>Address: {truck.address}</p>
//             <p>Food Items: {truck.fooditems}</p>
//             <p>Latitude: {truck.latitude}</p>
//             <p>Longitude: {truck.longitude}</p>
//             <p>Schedule: {truck.schedule}</p>
//             <p>Location Description: {truck.locationdescription}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;

import React, { useState, useEffect } from "react";

const API_KEY = "d545a7170d7f47cfb83cfa9ad64b13e7";

const SearchComponent = () => {
  const [location, setLocation] = useState("");
  const [foodTrucks, setFoodTrucks] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          location
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      const { lat, lng } = data.results[0].geometry;

      const foodTruckResponse = await fetch(
        `https://data.sfgov.org/resource/rqzj-sfat.json?$select=applicant,facilitytype,address,fooditems,latitude,longitude,schedule,locationdescription&$where=within_circle(location, ${lat}, ${lng}, 500)&$limit=10`
      );
      const foodTruckData = await foodTruckResponse.json();
      setFoodTrucks(foodTruckData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Food Truck Finder</h2>
      <div>
        <label htmlFor="location">Enter a location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h3>Food Trucks Near {location}</h3>
      <ul>
        {foodTrucks.map((truck) => (
          <li key={truck.applicant}>
            <strong>{truck.applicant}</strong>
            <p>Facility Type: {truck.facilitytype}</p>
            <p>Address: {truck.address}</p>
            <p>Food Items: {truck.fooditems}</p>
            <p>Latitude: {truck.latitude}</p>
            <p>Longitude: {truck.longitude}</p>
            <p>Schedule: {truck.schedule}</p>
            <p>Location Description: {truck.locationdescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
