<script>
  import { onMount } from "svelte";

  // Coordenadas exactas: Ave. Francisco Villa #5700, Col. Panamericana, Chihuahua
  const LAT = 28.6637;
  const LNG = -106.091;
  const ZOOM = 16;

  // URL de iframe de Google Maps con la dirección exacta
  const mapSrc = `https://maps.google.com/maps?q=Dental+Panamericana+Avenida+Francisco+Villa+5700+Colonia+Panamericana+Chihuahua+Mexico&t=&z=${ZOOM}&ie=UTF8&iwloc=&output=embed`;

  let nombre = $state("");
  let email = $state("");
  let tel = $state("");
  let fecha = $state("");
  let hora = $state("");
  let msg = $state("");
  let cargando = $state(false);
  let enviado = $state(false);
  let error = $state(false);
  let errorMsg = $state("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nombre || !email || !tel) {
      error = true;
      errorMsg = "Por favor completa los campos obligatorios (*).";
      return;
    }
    error = false;
    cargando = true;

    try {
      // Envío directo a FormSubmit desde el navegador (funciona perfecto en Vercel estático y dinámico)
      const res = await fetch("https://formsubmit.co/ajax/matchhomebr@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Nueva Solicitud de Cita - ${nombre}`,
          _replyto: email,
          email: email,
          _template: "table",
          _captcha: "false",
          _language: "es",
          "Nombre completo": nombre,
          "Correo electrónico": email,
          "Teléfono": tel,
          "Fecha preferida de cita": fecha || "No especificada",
          "Hora preferida de cita": hora || "No especificada",
          "Mensaje / Consulta": msg || "Sin mensaje adicional"
        })
      });

      const contentType = res.headers.get("content-type") || "";
      let resData = {};
      if (contentType.includes("application/json")) {
        resData = await res.json();
      }

      if (res.ok && (resData.success === true || resData.success === "true" || resData.success === undefined)) {
        enviado = true;
        nombre = email = tel = fecha = hora = msg = "";
      } else if (resData.message && resData.message.includes("Activation")) {
        error = true;
        errorMsg = "Formulario en proceso de activación. Revisa el correo matchhomebr@gmail.com para confirmarlo.";
      } else {
        error = true;
        errorMsg = resData.message || "Hubo un problema al enviar la solicitud. Intenta de nuevo.";
      }
    } catch (err) {
      console.error(err);
      error = true;
      errorMsg = "Error de conexión. Intenta de nuevo o llámanos directamente al (614) 426-5685.";
    } finally {
      cargando = false;
    }
  }

  function handleFocus(event) {
    event.currentTarget.style.borderColor = "#006565";
  }

  function handleBlur(event) {
    event.currentTarget.style.borderColor = "rgba(0,101,101,0.2)";
  }

  const horarios = [
    { dia: "Lunes – Viernes", hora: "9:00 am – 6:00 pm" },
    { dia: "Sábado", hora: "9:00 am – 2:00 pm" },
    { dia: "Domingo", hora: "Cerrado" },
  ];
</script>

<svelte:head>
  <title>Contacto y Ubicación | Dental Panamericana Chihuahua</title>
  <meta
    name="description"
    content="Encuentra Dental Panamericana en Ave. Francisco Villa #5700, Col. Panamericana, Chihuahua. Llama o agenda tu cita en línea."
  />
</svelte:head>

<!-- Hero -->
<section
  class="pt-36 pb-20 px-6 text-white text-center"
  style="background: linear-gradient(135deg, #002828, #004545, #006565)"
>
  <p
    class="text-xs font-700 tracking-widest uppercase mb-3"
    style="color:#76d6d5"
  >
    Encuéntranos
  </p>
  <h1 class="font-display font-800 text-4xl md:text-5xl mb-4">
    Contacto y Ubicación
  </h1>
  <p class="font-body text-lg opacity-75 max-w-xl mx-auto">
    Estamos en el corazón de Chihuahua, con estacionamiento gratuito y fácil
    acceso para toda la familia.
  </p>
  <div
    class="mt-8 h-1 w-16 rounded-full mx-auto"
    style="background:#76d6d5"
  ></div>
</section>

<!-- Info cards -->
<section class="py-16 px-6 max-w-5xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
    <!-- Dirección -->
    <div
      class="card-hover bg-white rounded-3xl p-7 shadow-md text-center flex flex-col items-center gap-4"
    >
      <div
        class="w-14 h-14 rounded-2xl flex items-center justify-center"
        style="background:rgba(0,101,101,0.1)"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="#006565"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <div>
        <p class="font-display font-700 text-base mb-1" style="color:#0b1c30">
          Dirección
        </p>
        <p class="font-700 text-sm mb-2" style="color:#006565">
          Dental Panamericana
        </p>
        <p class="text-sm leading-relaxed" style="color:#3e4949">
          Ave. Francisco Villa #5700<br />
          Col. Panamericana, C.P. 31203<br />
          Chihuahua, Chih. México
        </p>
      </div>
      <a
        href="https://maps.google.com/?q=Dental+Panamericana+Avenida+Francisco+Villa+5700+Colonia+Panamericana+Chihuahua+Mexico"
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs font-700 mt-auto"
        style="color:#006565"
      >
        Cómo llegar →
      </a>
    </div>

    <!-- Teléfono + Email -->
    <div
      class="card-hover bg-white rounded-3xl p-7 shadow-md text-center flex flex-col items-center gap-4"
    >
      <div
        class="w-14 h-14 rounded-2xl flex items-center justify-center"
        style="background:rgba(0,101,101,0.1)"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="#006565"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      </div>
      <div>
        <p class="font-display font-700 text-base mb-1" style="color:#0b1c30">
          Teléfono y Correo
        </p>
        <a
          href="tel:+526144265685"
          class="block text-sm mb-1 hover:opacity-80 transition-opacity"
          style="color:#006565"
        >
          (614) 426-5685 y (614) 463-6699
        </a>
        <a
          href="mailto:cdental.panamericana@gmail.com"
          class="block text-sm"
          style="color:#3e4949"
        >
          cdental.panamericana@gmail.com
        </a>
      </div>
      <p class="text-xs mt-auto opacity-60" style="color:#3e4949">
        Respuesta en menos de 24h
      </p>
    </div>

    <!-- Horarios -->
    <div
      class="card-hover bg-white rounded-3xl p-7 shadow-md flex flex-col items-center gap-4"
    >
      <div
        class="w-14 h-14 rounded-2xl flex items-center justify-center"
        style="background:rgba(0,101,101,0.1)"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="#006565"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="w-full">
        <p
          class="font-display font-700 text-base mb-3 text-center"
          style="color:#0b1c30"
        >
          Horarios
        </p>
        {#each horarios as h}
          <div
            class="flex justify-between items-center py-1.5 border-b last:border-0"
            style="border-color:rgba(0,101,101,0.1)"
          >
            <span class="text-xs font-600" style="color:#3e4949">{h.dia}</span>
            <span
              class="text-xs"
              style="color:{h.hora === 'Cerrado' ? '#ba1a1a' : '#006565'}"
              >{h.hora}</span
            >
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Mapa + Formulario -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <!-- Mapa interactivo -->
    <div class="rounded-3xl overflow-hidden shadow-xl" style="height:450px">
      <iframe
        title="Ubicación Dental Panamericana en Chihuahua"
        src={mapSrc}
        width="100%"
        height="100%"
        style="border:0; filter: saturate(0.9) contrast(1.05)"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <!-- Formulario de cita -->
    <div class="bg-white rounded-3xl shadow-xl p-8">
      <h2 class="font-display font-800 text-2xl mb-2" style="color:#0b1c30">
        Solicitar una Cita
      </h2>
      <p class="text-sm mb-6" style="color:#3e4949">
        Llena el formulario y te confirmaremos a la brevedad posible.
      </p>

      {#if enviado}
        <div
          class="rounded-2xl p-6 text-center"
          style="background:rgba(0,101,101,0.08)"
        >
          <p class="text-3xl mb-2">✅</p>
          <p class="font-700 text-lg mb-1" style="color:#006565">¡Solicitud enviada!</p>
          <p class="text-sm opacity-80 mb-4" style="color:#3e4949">
            Hemos recibido los datos de tu cita. Te confirmaremos a la brevedad posible a tu correo o teléfono.
          </p>
          <button
            type="button"
            onclick={() => (enviado = false)}
            class="px-5 py-2 rounded-full text-xs font-700 transition-all hover:bg-[#006565] hover:text-white"
            style="border: 1.5px solid #006565; color:#006565"
          >
            Enviar otra solicitud
          </button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4" novalidate>
          {#if error}
            <p
              class="text-sm rounded-xl px-4 py-2"
              style="background:rgba(186,26,26,0.08); color:#ba1a1a"
            >
              {errorMsg}
            </p>
          {/if}

          <div>
            <label
              class="block text-xs font-700 mb-1.5 tracking-wide"
              style="color:#3e4949"
              for="nombre"
            >
              Nombre completo *
            </label>
            <input
              id="nombre"
              type="text"
              bind:value={nombre}
              placeholder="Tu nombre"
              required
              class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
              onfocus={handleFocus}
              onblur={handleBlur}
            />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-xs font-700 mb-1.5 tracking-wide"
                style="color:#3e4949"
                for="email"
              >
                Correo electrónico *
              </label>
              <input
                id="email"
                type="email"
                bind:value={email}
                placeholder="tu@correo.com"
                required
                class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
                onfocus={handleFocus}
                onblur={handleBlur}
              />
            </div>
            <div>
              <label
                class="block text-xs font-700 mb-1.5 tracking-wide"
                style="color:#3e4949"
                for="tel"
              >
                Teléfono *
              </label>
              <input
                id="tel"
                type="tel"
                bind:value={tel}
                placeholder="(614) 000-0000"
                required
                class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
                onfocus={handleFocus}
                onblur={handleBlur}
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                class="block text-xs font-700 mb-1.5 tracking-wide"
                style="color:#3e4949"
                for="fecha"
              >
                Fecha preferida de cita
              </label>
              <input
                id="fecha"
                type="date"
                bind:value={fecha}
                class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
                onfocus={handleFocus}
                onblur={handleBlur}
              />
            </div>
            <div>
              <label
                class="block text-xs font-700 mb-1.5 tracking-wide"
                style="color:#3e4949"
                for="hora"
              >
                Hora preferida de cita
              </label>
              <input
                id="hora"
                type="time"
                bind:value={hora}
                class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
                onfocus={handleFocus}
                onblur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              class="block text-xs font-700 mb-1.5 tracking-wide"
              style="color:#3e4949"
              for="msg"
            >
              ¿En qué te podemos ayudar?
            </label>
            <textarea
              id="msg"
              bind:value={msg}
              rows="3"
              placeholder="Describe brevemente lo que necesitas..."
              class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
              style="border: 1.5px solid rgba(0,101,101,0.2); background:#f8f9ff; color:#0b1c30"
              onfocus={handleFocus}
              onblur={handleBlur}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={cargando}
            class="w-full py-4 rounded-full font-display font-700 text-sm text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
            style="background: linear-gradient(135deg,#006565,#008080)"
          >
            {#if cargando}
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Enviando...</span>
            {:else}
              <span>Enviar Solicitud de Cita</span>
            {/if}
          </button>

          <p class="text-xs text-center opacity-60" style="color:#3e4949">
            * También puedes llamarnos directamente al <a
              href="tel:+526144265685"
              class="font-700"
              style="color:#006565">(614) 426-5685</a
            >
          </p>
        </form>
      {/if}
    </div>
  </div>
</section>
