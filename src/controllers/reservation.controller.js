import {
  createReservation,
  getReservationById,
  updateReservation,
} from "../services/reservation.service.js";
import { getSession } from "../utils.js";
import { navigateTo } from "../router/router.js";

// Maneja el submit del formulario de reserva o edición
export const reservationController = async () => {
  const form = document.querySelector("#reservationForm");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const reservationId = params.get("id");
  const title = document.querySelector("#formTitle");
  const submitButton = document.querySelector("#reservationSubmit");

  let reservation = null;

  if (reservationId) {
    try {
      reservation = await getReservationById(reservationId);
      if (reservation) {
        title.textContent = "Editar Reserva";
        submitButton.textContent = "Actualizar Reserva";
        form.workspace.value = reservation.workspace;
        form.date.value = reservation.date;
        form.startHour.value = reservation.startHour;
        form.endHour.value = reservation.endHour;
        form.reason.value = reservation.reason;
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo cargar la reserva para editar.");
      navigateTo("/home");
      return;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = getSession();
    const data = {
      userId: reservationId ? reservation.userId : user.id,
      workspace: form.workspace.value.trim(),
      date: form.date.value,
      startHour: form.startHour.value,
      endHour: form.endHour.value,
      reason: form.reason.value.trim(),
      status: reservationId ? undefined : "pending",
    };

    try {
      if (reservationId) {
        await updateReservation(reservationId, data);
        alert("Reserva actualizada exitosamente");
      } else {
        await createReservation(data);
        alert("Reserva creada exitosamente");
      }
      navigateTo("/home");
    } catch (error) {
      console.error(error);
      alert("Error al guardar la reserva");
    }
  });
};
