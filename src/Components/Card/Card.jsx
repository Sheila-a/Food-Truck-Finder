import { useEffect, useState } from "react";
import fetchData from "../../service/service";
import design from "./style.module.css";

const MyComponent = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setFoodTrucks(data);
      } catch (error) {
        // Handle error if needed
      }
    };

    getData();
  }, []);

  return (
    <div className={design.cardContainer}>
      <div className={design.cardWrapper}>
        {foodTrucks.map((truck, index) => (
          <div key={index} className={design.card}>
            <h3>{truck.applicant}</h3>
            <p>Facility Type: {truck.facilitytype}</p>
            <p>Address: {truck.address}</p>
            <p>Food Items: {truck.fooditems}</p>
            <p>Latitude: {truck.latitude}</p>
            <p>Longitude: {truck.longitude}</p>
            <a href={truck.schedule} target="_blank" rel="noopener noreferrer">
              Schedule
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
