import { eventos } from "../data/eventosData.js";

export const listarEventos = (req, res) => {
  res.status(200).json(eventos);
};

export const listarPorCategoria = (req, res) => {
  const { categoria } = req.params;
  const filtrados = eventos.filter(e => e.categoria === categoria.toLowerCase());

  if (filtrados.length > 0) {
    res.status(200).json(filtrados);
  } else {
    res.status(404).json({ mensagem: "Nenhum evento encontrado para essa categoria." });
  }
};

export const listarPorLocal = (req, res) => {
  const { local } = req.params;
  const filtrados = eventos.filter(e => e.local.toLowerCase().includes(local.toLowerCase()));

  if (filtrados.length > 0) {
    res.status(200).json(filtrados);
  } else {
    res.status(404).json({ mensagem: "Nenhum evento encontrado nesse local." });
  }
};
