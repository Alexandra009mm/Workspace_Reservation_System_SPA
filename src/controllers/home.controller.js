import ReservationCard from "../components/ReservationCard.js";
import { getReservations } from "../services/reservation.service.js";
import { getSession } from "../utils.js";

// Carga y muestra las reservas según el rol del usuario
export const homeController = async () => {
  const container = document.querySelector("#reservationsContainer");
  if (!container) return;

  container.innerHTML = `<p class="text-gray-400 col-span-2">Cargando...</p>`;

  const user = getSession();
  const all = await getReservations();

  // Admin ve todas, usuario solo las propias
  const filtered =
    user.role === "admin"
      ? all
      : all.filter((r) => r.userId === user.id);

  container.innerHTML = filtered.length
    ? filtered.map((r) => ReservationCard(r)).join("") 
    : `<p class="text-gray-400 col-span-2 text-center py-6">No hay reservas</p>`;
};
