import { loginController } from "@controllers/login.controller";

// Vista de login con formulario de autenticación
export default function loginView() {
  setTimeout(() => loginController());

  return `
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-4">
  <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 w-full max-w-sm transition-all duration-300 hover:shadow-2xl">
    
    <!-- Encabezado -->
    <h1 class="text-2xl font-black tracking-tight text-slate-800 mb-6 text-center">
      Iniciar Sesión
    </h1>
    
    <!-- Formulario -->
    <form id="loginForm" class="flex flex-col gap-4">
      
      <!-- Campo de Email -->
      <div class="space-y-1">
        <input type="email" name="email" placeholder="Correo" required
          class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
      </div>
      
      <!-- Campo de Contraseña -->
      <div class="space-y-1">
        <input type="password" name="password" placeholder="Contraseña" required
          class="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200" />
      </div>
      
      <!-- Botón de Envío -->
      <button type="submit" 
        class="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 mt-2">
        Ingresar
      </button>
      
    </form>
  </div>
</div>

  `;
}
