import { navigateTo } from "@/router/router";

// Vista 404 para rutas no encontradas
export default function notFoundView() {
  setTimeout(() => {
    document.querySelector("#goHome")?.addEventListener("click", () => navigateTo("/home"));
  });

  return `
    <div class="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      <h1 class="text-7xl font-bold text-slate-700">404</h1>
      <p class="text-slate-500 mt-2">Página no encontrada</p>
      <button id="goHome" class="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
        Volver al inicio
      </button>
    </div>
  `;
}
