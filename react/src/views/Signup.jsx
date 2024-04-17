import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Signup() {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className="contenedor-formulario-cuenta">
      <h2 className="contenedor-formulario-cuenta__titulo">Registrarse</h2>
      {errors &&
        <div className="alert">
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      }
      <form className="formulario-cuenta" onSubmit={onSubmit}>
        <input ref={nameRef} className="formulario-cuenta__campo" type="text" placeholder="Nombre" />
        <input ref={emailRef} className="formulario-cuenta__campo" type="email" placeholder="Correo electrónico" />
        <input ref={passwordRef} className="formulario-cuenta__campo" type="password" placeholder="Contraseña" />
        <input ref={passwordConfirmationRef} className="formulario-cuenta__campo" type="password" placeholder="Confirmar contraseña" />
        <button className="boton boton-formulario">Registrarse</button>
      </form>
      <span className="contenedor-formulario-cuenta__redireccion-texto">¿Ya tiene una cuenta?
        <Link className="contenedor-formulario-cuenta__redireccion-vinculo" to="/login">Iniciar sesión</Link>
      </span>
    </div>
  )
}
