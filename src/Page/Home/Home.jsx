import design from "./style.module.css";
import SearchComponent from "../../Components/Search/Search";
const Home = () => {
  function refreshPage() {
    location.reload();
  }
  return (
    <div className={design.Home}>
      <h1 onClick={refreshPage}>Food Trucks</h1>
      <SearchComponent />
      {/* <MyComponent /> */}
    </div>
  );
};

export default Home;
