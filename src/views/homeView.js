import Sidebar from "../components/Sidebar.js";
import { getSession } from "../utils.js";
import { homeController } from "../controllers/home.controller.js";

// Vista principal con panel según el rol del usuario
export default function homeView() {
  const user = getSession();

  setTimeout(() => homeController());

return `
  <div class="flex min-h-screen bg-slate-50">
    ${Sidebar()}
    <main class="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">


      <div class="mb-6 flex flex-col gap-1">
        <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">
          Bienvenido, ${user?.name}
        </h1>
        <p class="text-sm font-medium text-slate-500 flex items-center gap-2">
          <span>Rol de usuario:</span>
          <span class="px-2 py-0.5 bg-slate-200 text-slate-700 text-xs font-semibold rounded-md uppercase tracking-wider">
            ${user?.role}
          </span>
        </p>
      </div>

      <section class="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mb-6 transition-all hover:shadow-md">
        <div class="flex items-center gap-3 text-sm text-slate-600">
          ${user?.role === "admin"
            ? `<p>Estás visualizando todas las reservas del sistema. Tienes permisos para aprobar, rechazar o eliminar solicitudes.</p>`
            : `<p>Estás visualizando únicamente tus reservas personales.</p>`
          }
        </div>
      </section>


      <section class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-bold text-slate-800">Listado de Reservas</h2>
          <span id="reservationCount" class="text-xs text-slate-400 font-medium"></span>
        </div>
        
        <!-- Cambiado a flex-col porque tus tarjetas ahora son horizontales -->
        <div id="reservationsContainer" class="flex flex-col gap-4">
          <div class="flex items-center gap-2 text-slate-400 py-8 justify-center">
            <svg class="animate-spin h-5 w-5 text-indigo-500" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm font-medium">Cargando reservas...</span>
          </div>
        </div>
      </section>

    </main>
  </div>

  `;
}
