import { loginController } from "@controllers/login.controller";

// Vista de login con formulario de autenticación
export default function loginView() {
  setTimeout(() => loginController());

  return `
    <div class="min-h-screen flex items-center justify-center bg-slate-100">
      <div class="bg-white border rounded p-8 w-80">
        <h1 class="text-xl font-bold mb-5">Iniciar Sesión</h1>
        <form id="loginForm" class="flex flex-col gap-3">
          <input type="email" name="email" placeholder="Correo" required
            class="border px-3 py-2 rounded w-full" />
          <input type="password" name="password" placeholder="Contraseña" required
            class="border px-3 py-2 rounded w-full" />
          <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  `;
}
