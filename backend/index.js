require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

/* ✅ CORS bien configurado para React */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend Vite
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

/* ✅ Permitir JSON */
app.use(express.json());

/* ✅ Ruta raíz */
app.get("/", (req, res) => {
  res.send("Backend Centenaria funcionando ✅");
});

/* ✅ Ruta de prueba API */
app.get("/api/status", (req, res) => {
  res.json({
    ok: true,
    message: "API Centenaria funcionando ✅",
  });
});

/* ✅ Puerto */
const PORT = process.env.PORT || 4000;

/* ✅ Iniciar servidor */
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en: http://localhost:${PORT}`);
});
