import Sidebar from "../components/Sidebar.js";
import { reservationController } from "../controllers/reservation.controller.js";

// Vista con el formulario para crear o editar una reserva
export default function reservationsView() {
  setTimeout(() => reservationController());

  return `
    <div class="flex">
      ${Sidebar()}
      <main class="flex-1 p-6 bg-slate-100 min-h-screen">
        <h1 id="formTitle" class="text-xl font-bold mb-4">Nueva Reserva</h1>
        <form id="reservationForm" class="bg-white p-6 rounded border max-w-lg flex flex-col gap-4">

            <div>
              <label class="block text-sm font-medium mb-1"> Area</label>

              <select name="workspace" required class="border w-full px-3 py-2 rounded bg-white">

              <option value="" disabled selected>Select a space...</option>

              <option value="sala_nap">Nap Room</option>

              <option value="zona_wellness">Wellness and Meditation Area</option>

              <option value="terraza_zen">Zen Terrace</option>

              <option value="cabina_silencio">Soundproof Cabin</option>

              <option value="sala_lactancia">Breastfeeding and Wellness Room</option>

              <option value="rincon_lectura">Reading and Relaxation Corner</option>

              </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Fecha</label>
            <input type="date" name="date" required class="border w-full px-3 py-2 rounded" />
          </div>

          <div class="flex gap-4">
            <div class="flex-1">
              <label class="block text-sm font-medium mb-1">Hora inicio</label>
              <input type="time" name="startHour" required class="border w-full px-3 py-2 rounded" />
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium mb-1">Hora fin</label>
              <input type="time" name="endHour" required class="border w-full px-3 py-2 rounded" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Motivo</label>
            <input type="text" name="reason" placeholder="Ej: Sprint Planning" required
              class="border w-full px-3 py-2 rounded" />
          </div>

          <button id="reservationSubmit" type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Crear Reserva
          </button>
        </form>
      </main>
    </div>
  `;
}
