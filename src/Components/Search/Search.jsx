import { useState, useEffect } from "react";
import design from "./style.module.css";

const API_KEY = "d545a7170d7f47cfb83cfa9ad64b13e7";
const LOCATION = "San Francisco, CA"; // Example location

const SearchComponent = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            LOCATION
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

    fetchData();
  }, []);

  return (
    <div>
      <h2>Food Trucks Near {LOCATION}</h2>
      <div className={design.cardWrapper}>
        {foodTrucks.map((truck) => (
          <div key={truck.applicant} className={design.card}>
            <h3>{truck.applicant}</h3>
            <p>
              {" "}
              <span>Facility Type:</span> {truck.facilitytype}
            </p>
            <p>
              <span>Address:</span> {truck.address}
            </p>
            <p>
              <span>Food Items:</span> {truck.fooditems}
            </p>
            <p>
              <span>Latitude:</span> {truck.latitude}
            </p>
            <p>
              <span>Longitude:</span> {truck.longitude}
            </p>
            <p>Location Description: {truck.locationdescription}</p>
            <a href={truck.schedule} target="_blank" rel="noopener noreferrer">
              Schedule
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
