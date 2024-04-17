import { Link } from "react-router-dom";
import axiosClient from "../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }

  return (
    <div className="contenedor-formulario-cuenta">
      <h2 className="contenedor-formulario-cuenta__titulo">Iniciar sesión</h2>

      {message &&
        <div className="alert">
          <p>{message}</p>
        </div>
      }

      <form className="formulario-cuenta" onSubmit={onSubmit}>
        <input ref={emailRef} className="formulario-cuenta__campo" type="email" placeholder="Correo electrónico" />
        <input ref={passwordRef} className="formulario-cuenta__campo" type="password" placeholder="Contraseña" />
        <button className="boton boton-formulario">Iniciar sesión</button>
      </form>
      <span className="contenedor-formulario-cuenta__redireccion-texto">¿No tiene una cuenta?
        <Link className="contenedor-formulario-cuenta__redireccion-vinculo" to="/signup">Registrarse</Link>
      </span>
    </div>
  );
}
