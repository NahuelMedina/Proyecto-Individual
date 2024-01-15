import { Link, useNavigate } from "react-router-dom";
import "../../Styles/styles.css";

const Landing = () => {
  return (
    <div className="landing_container">
      <div className="div_button">
        <Link to={"/home"}>Entrar a Home</Link>
      </div>
    </div>
  );
};

export default Landing;
