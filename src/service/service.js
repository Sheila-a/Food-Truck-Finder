import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://data.sfgov.org/resource/rqzj-sfat.json",
      {
        params: {
          $select:
            "applicant,facilitytype,address,fooditems,latitude,longitude,schedule",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
