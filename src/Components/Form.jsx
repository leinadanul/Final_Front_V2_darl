import { useState, useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import styles from "./module/Form.module.css";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const { tema } = useContext(ContextGlobal)
  const darkMode = tema === "dark" || false
  const [validation, setValidation] = useState(false)

  const validateName = () => {
    const nameUser = values.name.split(" ")
    if (nameUser[0].length < 1 || nameUser[0].length < 1) return alert("por favor ingrese un nombre")
    return true
  }

  const validateEmail = () => {
    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Email debe contener una '@' ")
    return true
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    const newValues = {
      ...values,
      [name]:value,
    }
    setValues(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameValidation = validateName()
    const emailValidation = validateEmail()
    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <div className={`text-center card container ${styles.card} ${darkMode ? styles.cardDark : ''}`}>
      <div className={`card-body ${styles.CardBody}`}></div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        className={`form-control ${styles.inputSpacing}`}
        onChange={handleChange}
        placeholder="Name" />
        <input 
        type="text" 
        name="email" 
        className={`form-control ${styles.inputSpacing}`}
        onChange={handleChange}
        placeholder="Email" />
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
      {validation ? <h3 className="h3">Gracias {values.name}, 
      pronto nos contactaremos con usted</h3> : ""}
    </div>
  );
};

export default Form;


//Hasta aca sin singun problema ojo Fromulario