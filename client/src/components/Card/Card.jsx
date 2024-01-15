import { Link } from "react-router-dom";

const Card = ({ name, teams, image, lastName }) => {
  return (
    <div className="card-container">
      <div>
        <Link to="../Details/Details.jsx">
          <img className="driver-image" src={image} alt="driver-image" />
        </Link>
      </div>
      <div>
        <h2>{name + " " + lastName}</h2>
      </div>
      <div>
        {teams ? (
          <div>
            <label>Teams:</label>
            <span>{teams}</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Card;
