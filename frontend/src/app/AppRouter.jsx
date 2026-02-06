import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import RegistroEstudiante from "../pages/public/RegistroEstudiante";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Navigate to="/inscripcion/registro" replace />} />
        <Route path="/inscripcion/registro" element={<RegistroEstudiante />} />
      </Route>
    </Routes>
  );
}
