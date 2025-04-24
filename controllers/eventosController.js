import { getTodosEventos, getEventosPorCategoria, getEventosPorLocal } from "../models/eventosModel.js";

export const listarEventos = (req, res) => {
  const resultado = getTodosEventos();
  res.status(200).json(resultado);
};

export const listarPorCategoria = (req, res) => {
  const { categoria } = req.params;
  const resultado = getEventosPorCategoria(categoria);

  if (resultado.length > 0) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({ mensagem: "Nenhum evento encontrado para essa categoria." });
  }
};

export const listarPorLocal = (req, res) => {
  const { local } = req.params;
  const resultado = getEventosPorLocal(local);

  if (resultado.length > 0) {
    res.status(200).json(resultado);
  } else {
    res.status(404).json({ mensagem: "Nenhum evento encontrado nesse local." });
  }
};
