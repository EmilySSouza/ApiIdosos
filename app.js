import express from "express";
import eventosRoutes from "./routes/eventosRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", eventosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
