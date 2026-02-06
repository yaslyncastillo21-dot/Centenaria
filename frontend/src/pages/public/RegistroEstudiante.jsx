import { useEffect, useState } from "react";
import api from "../../services/api";

export default function RegistroEstudiante() {
  const [msg, setMsg] = useState("Conectando con backend...");

  useEffect(() => {
    api
      .get("/status")
      .then((res) => {
        console.log("✅ Backend respondió:", res.data);
        setMsg(res.data.message);
      })
      .catch((err) => {
        console.log("❌ Error conectando con backend:", err);
        setMsg("No se pudo conectar ❌");
      });
  }, []);

  return (
    <div
      style={{
        padding: 40,
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Registro Estudiante
      </h1>

      <p style={{ fontSize: "18px", color: "gray" }}>
        {msg}
      </p>
    </div>
  );
}
