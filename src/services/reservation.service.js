import { http } from "@/api/http";

// Obtiene todas las reservas de la API
export const getReservations = () => http.get("/reservations");

// Obtiene una reserva por id
export const getReservationById = (id) => http.get(`/reservations/${id}`);

// Crea una nueva reserva
export const createReservation = (data) => http.post("/reservations", data);

// Actualiza campos específicos de una reserva
export const updateReservation = (id, data) => http.patch(`/reservations/${id}`, data);

// Elimina una reserva por id
export const deleteReservation = (id) => http.delete(`/reservations/${id}`);
