import Sidebar from "../components/Sidebar.js";
import { getSession } from "../utils.js";
import { homeController } from "../controllers/home.controller.js";

// Vista principal con panel según el rol del usuario
export default function homeView() {
  const user = getSession();

  setTimeout(() => homeController());

  return `
    <div class="flex">
      ${Sidebar()}
      <main class="flex-1 p-6 bg-slate-100 min-h-screen">

        <div class="mb-4">
          <h1 class="text-xl font-bold">Bienvenido, ${user?.name}</h1>
          <p class="text-sm text-gray-500">Rol: ${user?.role}</p>
        </div>

        <section class="bg-white border rounded p-4 mb-6">
          ${user?.role === "admin"
            ? `<p class="text-sm">Ves <strong>todas las reservas</strong>. Puedes aprobar, rechazar o eliminar.</p>`
            : `<p class="text-sm">Ves únicamente <strong>tus reservas</strong>.</p>`
          }
        </section>

        <section class="bg-white border rounded p-4">
          <h2 class="font-semibold mb-3">Reservas</h2>
          <div id="reservationsContainer" class="grid gap-4 md:grid-cols-2">
            <p class="text-gray-400">Cargando...</p>
          </div>
        </section>

      </main>
    </div>
  `;
}
