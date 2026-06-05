import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import notFoundView from "@/views/notFound";
import reservationsView from "@/views/reservations";
import { isAuthenticated } from "@/utils";

const routes = {
  "/": loginView,
  "/home": homeView,
  "/reservations": reservationsView,
};

// Navega a una ruta actualizando el historial
export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");
  const path = window.location.pathname;

  // Rutas que requieren autenticación
  const privateRoutes = ["/home", "/reservations"];

  if (privateRoutes.includes(path) && !isAuthenticated()) {
    navigateTo("/");
    return;
  }

  // Redirige al home si ya está autenticado e intenta ir al login
  if (path === "/" && isAuthenticated()) {
    navigateTo("/home");
    return;
  }

  const view = routes[path] || notFoundView;
  app.innerHTML = view();

  // Maneja los links SPA con data-link
  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(link.getAttribute("href"));
    });
  });
};

window.addEventListener("popstate", router);
