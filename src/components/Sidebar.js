import { removeSession } from "../utils.js";
import { navigateTo } from "../router/router.js";

export default function Sidebar() {
  // Adjunta eventos después de que el HTML se renderice
  setTimeout(() => {
    document.querySelector("#logoutBtn")?.addEventListener("click", () => {
      removeSession();
      navigateTo("/");
    });
  });

  return `
    <aside class="w-52 bg-slate-800 text-white min-h-screen p-4 flex flex-col gap-4">
      <h2 class="text-lg font-bold">Reservas</h2>
      <nav class="flex flex-col gap-2">
        <a href="/home" data-link class="px-3 py-2 bg-slate-700 rounded hover:bg-slate-600">Inicio</a>
        <a href="/reservations" data-link class="px-3 py-2 bg-slate-700 rounded hover:bg-slate-600">Reservas</a>
      </nav>
      <button id="logoutBtn" class="mt-auto text-left px-3 py-2 text-red-400 hover:bg-red-600 hover:text-white rounded">
        Cerrar sesión
      </button>
    </aside>
  `;
}
