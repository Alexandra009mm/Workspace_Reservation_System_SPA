import { getSession, isAdmin } from "../utils.js";
import { deleteReservation, updateReservation } from "../services/reservation.service.js";
import { homeController } from "../controllers/home.controller.js";
import { navigateTo } from "../router/router.js";

// Colores de estado para visual rápido
const statusColor = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export default function ReservationCard(reservation) {
  const { id, workspace, date, startHour, endHour, reason, status, userId } = reservation;
  const color = statusColor[status] || "bg-gray-100 text-gray-800";
  const currentUser = getSession();
  const canEdit = isAdmin() || currentUser?.id === userId;

  // Añade botones de admin/desarrollo después del render
  setTimeout(() => {
    if (isAdmin()) {
      document.querySelector(`#approve-${id}`)?.addEventListener("click", async () => {
        await updateReservation(id, { status: "approved" });
        homeController();
      });
      document.querySelector(`#reject-${id}`)?.addEventListener("click", async () => {
        await updateReservation(id, { status: "rejected" });
        homeController();
      });
      document.querySelector(`#delete-${id}`)?.addEventListener("click", async () => {
        await deleteReservation(id);
        homeController();
      });
    }

    if (canEdit) {
      document.querySelector(`#edit-${id}`)?.addEventListener("click", () => {
        navigateTo(`/reservations?id=${id}`);
      });
    }
  });

  return `
    <article class="border rounded p-4">
      <h3 class="font-bold">${workspace}</h3>
      <p class="text-sm text-gray-600">${date} · ${startHour} - ${endHour}</p>
      <p class="text-sm">Motivo: ${reason}</p>
      <span class="inline-block text-xs px-2 py-1 rounded ${color}">${status}</span>
      ${isAdmin() || canEdit ? `
        <div class="flex gap-2 mt-3">
          ${isAdmin() ? `
            <button id="approve-${id}" class="text-xs px-2 py-1 bg-green-500 text-white rounded">Aprobar</button>
            <button id="reject-${id}" class="text-xs px-2 py-1 bg-red-400 text-white rounded">Rechazar</button>
            <button id="delete-${id}" class="text-xs px-2 py-1 bg-gray-400 text-white rounded">Eliminar</button>
          ` : ""}
          <button id="edit-${id}" class="text-xs px-2 py-1 bg-slate-500 text-white rounded">Editar</button>
        </div>
      ` : ""}
    </article>
  `;
}

