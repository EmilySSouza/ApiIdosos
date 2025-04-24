import { eventos } from "../data/eventosData.js";

export const getTodosEventos = () => {
  return eventos;
};

export const getEventosPorCategoria = (categoria) => {
  return eventos.filter(e => e.categoria === categoria.toLowerCase());
};

export const getEventosPorLocal = (local) => {
  return eventos.filter(e => e.local.toLowerCase().includes(local.toLowerCase()));
};