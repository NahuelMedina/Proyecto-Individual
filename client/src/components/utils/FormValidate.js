const formValidate = (input) => {
  const errors = {};
  const regexNameAndLast = new RegExp("^(?!.* (?: |$))[A-Z][a-z ]+$");
  const { name, lastName, nationality, date_of_birth, teams } = input;

  //NAME
  if (!name.length) errors.name = "El nombre es obligatorio";
  else {
    if (!regexNameAndLast.test(name))
      errors.name = "Ingrese primer letra en mayuscula y sin espacios";
    if (name.length > 20) errors.name = "Nombre demasiado largo";
  }

  //LASTNAME
  if (!lastName.length) errors.lastName = "El apellido es obligatorio";
  else {
    if (!regexNameAndLast.test(lastName))
      errors.lastName = "Ingrese primer letras en mayuscula y sin espacios";
    if (lastName.length > 20) errors.lastName = "Apellido demasiado largo";
  }

  //NATIONALITY
  if (!nationality.length) errors.nationality = "Se debe saber su nacionalidad";

  //DATEOFBIRTH
  if (!date_of_birth.length)
    errors.date_of_birth = "La fecha de nacimiento es obligatoria";

  //TEAMS
  if (!teams.length) errors.teams = "Debe tener almenos 1 equipo";

  return errors;
};

export default formValidate;
