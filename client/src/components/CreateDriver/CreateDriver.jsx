import { useEffect, useState } from "react";
import formValidate from "../utils/FormValidate";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, postDriver } from "../../redux/Actions/actions.js";
const CreateDriver = () => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.allTeams);
  const [state, setState] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    date_of_birth: "",
    teams: [],
  });

  const [errors, setErrors] = useState({
    name: "Nombre obligatorio.",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    date_of_birth: "",
    teams: "",
  });

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { teams } = state;
    if (name === "teams") {
      if (teams.includes(value)) return;

      setState({
        ...state,
        [name]: [...state[name], value],
      });
      return;
    }

    setState({
      ...state,
      [name]: value,
    });

    setErrors(formValidate({ ...state, [name]: value }));
  };

  const removeTeams = (e) => {
    const { name, id } = e.target;

    setState({
      ...state,
      [name]: [...state[name].filter((x) => x !== id)],
    });
  };

  const buttonDisabled = () => {
    let buttonAux = false;

    for (const error in errors) {
      if (errors[error]) {
        buttonAux = true;
        return buttonAux;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDriver(state));
  };

  return (
    <div className="form-container">
      {console.log(state, errors)}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input onChange={handleChange} type="text" name="name" />
        <span>{errors.name}</span>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleChange} type="text" name="lastName" />
        <span>{errors.lastName}</span>
        <label htmlFor="description">Descripcion de corredor:</label>
        <input onChange={handleChange} type="" name="description" />
        <label htmlFor="image">Imagen:</label>
        <input onChange={handleChange} type="text" name="image" />
        <label htmlFor="nationality">Nacionalidad:</label>
        <input onChange={handleChange} type="text" name="nationality" />
        <span>{errors.nationality}</span>
        <label htmlFor="date_of_birth">Fecha de nacimiento:</label>
        <input onChange={handleChange} type="date" name="date_of_birth" />
        <span>{errors.date_of_birth}</span>
        <label>Teams:</label>
        <select onChange={handleChange} name="teams" id="teams">
          {allTeams.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        {state.teams.map((t) => (
          <div key={t}>
            <span id="teams">{t}</span>
            <button onClick={removeTeams} id={t} name="teams" type="button">
              X
            </button>
          </div>
        ))}
        <input disabled={buttonDisabled()} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default CreateDriver;
