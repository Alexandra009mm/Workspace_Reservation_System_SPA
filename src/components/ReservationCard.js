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
<div class="w-full px-4 mb-6">
  <article class="rounded-xl p-6 bg-white shadow-md transition-all hover:shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
    
    <!-- Bloque Izquierdo: Información principal -->
    <div class="flex-1 min-w-0">
      <!-- Título y Estado en línea -->
      <div class="flex items-center gap-3 mb-2 flex-wrap">
        <h3 class="text-lg font-bold text-black truncate">
          ${workspace}
        </h3>
        <span class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${color} shrink-0">
          ${status}
        </span>
      </div>

      <!-- Detalles en formato horizontal limpio -->
      <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
        <p class="flex items-center gap-1">
          <span class="font-medium text-gray-400">Fecha:</span>
          <span class="text-gray-800">${date} </span>
        </p>
        <p class="flex items-center gap-1">
          <span class="font-medium text-gray-400">Horario:</span>
          <span class="text-gray-800">${startHour} - ${endHour}</span>
        </p>
        <span class="hidden md:inline text-gray-300">|</span>
        <p class="flex items-center gap-1">
          <span class="font-medium text-gray-400">Motivo:</span>
          <span class="text-gray-800">${reason}</span>
        </p>
      </div>
    </div>

    <!-- Bloque Derecho: Acciones (Alineadas a la derecha en pantallas grandes) -->
    ${isAdmin() || canEdit ? `
      <div class="flex flex-wrap items-center gap-2 sm:justify-end shrink-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-100">
        ${isAdmin() ? `
          <button id="approve-${id}" class="text-xs font-semibold px-3 py-1.5 bg-green-500 text-white rounded-lg transition-colors hover:bg-green-600 shadow-sm">
            Aprobar
          </button>
          <button id="reject-${id}" class="text-xs font-semibold px-3 py-1.5 bg-red-400 text-white rounded-lg transition-colors hover:bg-red-500 shadow-sm">
            Rechazar
          </button>
          <button id="delete-${id}" class="text-xs font-semibold px-3 py-1.5 bg-gray-400 text-white rounded-lg transition-colors hover:bg-gray-500 shadow-sm">
            Eliminar
          </button>
        ` : ""}
        <button id="edit-${id}" class="text-xs font-semibold px-3 py-1.5 bg-slate-500 text-white rounded-lg transition-colors hover:bg-slate-600 shadow-sm">
          Editar
        </button>
      </div>
    ` : ""}

  </article>
</div>

  `;
}

