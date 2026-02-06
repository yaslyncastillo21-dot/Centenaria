import { Outlet, NavLink } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <NavLink to="/inscripcion/registro">Inscripción</NavLink>
      </header>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
