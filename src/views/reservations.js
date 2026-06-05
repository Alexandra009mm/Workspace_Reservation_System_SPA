import Sidebar from "../components/Sidebar.js";
import { reservationController } from "../controllers/reservation.controller.js";

// Vista con el formulario para crear o editar una reserva
export default function reservationsView() {
  setTimeout(() => reservationController());

  return `<div class="flex">
  ${Sidebar()}
  <main class="flex-1 p-8 bg-slate-50 min-h-screen">
    
    <!-- Título de la sección -->
    <h1 id="formTitle" class="text-2xl font-black text-slate-800 tracking-tight mb-6">
      Nueva Reserva
    </h1>
    
    <!-- Formulario -->
    <form id="reservationForm" class="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xl flex flex-col gap-5 transition-all duration-300 hover:shadow-2xl">

      <!-- Campo: Área -->
      <div class="space-y-1.5">
        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Área</label>
        <select name="workspace" required 
          class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200">
          <option value="" disabled selected>Select a space...</option>
          <option value="sala_nap">Nap Room</option>
          <option value="zona_wellness">Wellness and Meditation Area</option>
          <option value="terraza_zen">Zen Terrace</option>
          <option value="cabina_silencio">Soundproof Cabin</option>
          <option value="sala_lactancia">Breastfeeding and Wellness Room</option>
          <option value="rincon_lectura">Reading and Relaxation Corner</option>
        </select>
      </div>

      <!-- Campo: Fecha -->
      <div class="space-y-1.5">
        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha</label>
        <input type="date" name="date" required 
          class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
      </div>

      <!-- Grupo: Horas -->
      <div class="flex gap-4">
        <!-- Hora Inicio -->
        <div class="flex-1 space-y-1.5">
          <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Hora inicio</label>
          <input type="time" name="startHour" required 
            class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
        </div>
        <!-- Hora Fin -->
        <div class="flex-1 space-y-1.5">
          <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Hora fin</label>
          <input type="time" name="endHour" required 
            class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
        </div>
      </div>

      <!-- Campo: Motivo -->
      <div class="space-y-1.5">
        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Motivo</label>
        <input type="text" name="reason" placeholder="Ej: Sprint Planning" required
          class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
      </div>

      <!-- Botón -->
      <button id="reservationSubmit" type="submit" 
        class="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-500/10 hover:bg-blue-700 active:scale-[0.99] transition-all duration-200 mt-2">
        Crear Reserva
      </button>
      
    </form>
  </main>
</div>

  `;
}
