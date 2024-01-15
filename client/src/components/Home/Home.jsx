import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import {
  filters,
  filterByTeam,
  getDrivers,
  page,
} from "../../redux/Actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const filters = () => {
    const team = document.getElementById("team").value;
    dispatch(filterByTeam(team));
  };

  const pagination = (e) => {
    const { name } = e.target;
    dispatch(page(name));
  };

  const orderFilter = (e) => {
    const { name } = e.target;
    dispatch(filters(name));
  };

  return (
    <div className="home_container">
      <div>
        <button onClick={pagination} name="prev">
          {"<"}
        </button>
      </div>
      <div>
        <input type="text" id="team" />
        <button onClick={filters}>Filtrar por teams</button>
        <label htmlFor="">Filtrar por orden:</label>
        <button onClick={orderFilter} name="AZ">
          Ascendente
        </button>
        <button onClick={orderFilter} name="ZA">
          Descendente
        </button>
      </div>

      <Cards info={allDrivers} />
      <div>
        <button onClick={pagination} name="next">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Home;
