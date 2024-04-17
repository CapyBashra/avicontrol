import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div id="guestLayout" className="avicontrol-presentacion">
      <header className="presentacion-cabecera">
        <h1>Avicontrol</h1>
      </header>
      <main className="presentacion-cuerpo">
        <Outlet />
      </main>
    </div>
  );
}
