<svelte:head>
  <title>Política de Privacidad | Dental Panamericana Chihuahua</title>
  <meta
    name="description"
    content="Consulta la política de privacidad de Dental Panamericana. Conoce cómo recopilamos, usamos y protegemos tu información personal."
  />
</svelte:head>

<!-- Hero -->
<section
  class="pt-36 pb-20 px-6 text-white text-center"
  style="background: linear-gradient(135deg, #002828, #004545, #006565)"
>
  <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#76d6d5">
    Información legal
  </p>
  <h1 class="font-display font-800 text-4xl md:text-5xl mb-4">
    Política de Privacidad
  </h1>
  <p class="font-body text-lg opacity-75 max-w-xl mx-auto">
    Nos comprometemos a proteger tu información personal con total transparencia.
  </p>
  <div class="mt-8 h-1 w-16 rounded-full mx-auto" style="background:#76d6d5"></div>
</section>

<!-- Contenido -->
<section class="py-16 px-6 max-w-3xl mx-auto">

  <!-- Última actualización -->
  <p class="text-xs mb-10 opacity-50 text-center" style="color:#3e4949">
    Última actualización: julio de 2026
  </p>

  <!-- Secciones -->
  {#each sections as s}
    <div class="mb-10">
      <div class="flex items-center gap-3 mb-3">
        <div
          class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style="background:rgba(0,101,101,0.1)"
        >
          <span class="text-base">{s.icon}</span>
        </div>
        <h2 class="font-display font-700 text-lg" style="color:#0b1c30">{s.title}</h2>
      </div>
      <div class="pl-12">
        {#if s.items}
          <ul class="space-y-2">
            {#each s.items as item}
              <li class="flex items-start gap-2 text-sm leading-relaxed" style="color:#3e4949">
                <span class="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style="background:#006565"></span>
                {item}
              </li>
            {/each}
          </ul>
        {:else}
          <p class="text-sm leading-relaxed" style="color:#3e4949">{s.text}</p>
        {/if}
      </div>
    </div>
  {/each}

  <!-- Contacto -->
  <div
    class="mt-12 rounded-3xl p-8 text-center"
    style="background:rgba(0,101,101,0.06); border: 1.5px solid rgba(0,101,101,0.15)"
  >
    <p class="font-display font-700 text-base mb-2" style="color:#006565">
      ¿Tienes dudas sobre tu privacidad?
    </p>
    <p class="text-sm mb-4 opacity-75" style="color:#3e4949">
      Contáctanos directamente y con gusto te atenderemos.
    </p>
    <a
      href="/contacto"
      class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-700 text-sm text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
      style="background: linear-gradient(135deg,#006565,#008080)"
    >
      Contáctanos
    </a>
  </div>

</section>

<script>
  const sections = [
    {
      icon: "📋",
      title: "1. Información que recopilamos",
      items: [
        "Nombre completo, correo electrónico y número de teléfono proporcionados en formularios de contacto o cita.",
        "Fecha y hora preferida de cita.",
        "Mensajes o consultas que nos envíes voluntariamente.",
        "Datos de navegación anónimos para mejorar el funcionamiento del sitio.",
      ],
    },
    {
      icon: "🎯",
      title: "2. Uso de la información",
      items: [
        "Gestionar y confirmar tus solicitudes de cita.",
        "Responder a tus consultas o mensajes.",
        "Mejorar nuestros servicios y la experiencia en el sitio web.",
        "Enviarte información relevante sobre tu atención dental, si lo autorizas.",
      ],
    },
    {
      icon: "🔒",
      title: "3. Protección de tus datos",
      text: "Implementamos medidas técnicas y organizativas adecuadas para proteger tu información personal contra accesos no autorizados, pérdida accidental o divulgación indebida.",
    },
    {
      icon: "🤝",
      title: "4. Compartir información con terceros",
      text: "Dental Panamericana no vende, alquila ni comparte tu información personal con terceros, excepto cuando sea requerido por ley o con proveedores de servicios estrictamente necesarios para operar el sitio (como el servicio de envío de formularios), quienes están obligados a proteger tus datos.",
    },
    {
      icon: "⚖️",
      title: "5. Tus derechos",
      items: [
        "Acceder a la información personal que tenemos sobre ti.",
        "Solicitar la corrección de datos inexactos.",
        "Pedir la eliminación de tu información de nuestros registros.",
        "Revocar el consentimiento para el uso de tus datos en cualquier momento.",
      ],
    },
    {
      icon: "🍪",
      title: "6. Cookies",
      text: "Este sitio puede utilizar cookies funcionales para garantizar el correcto funcionamiento de sus características. No utilizamos cookies de rastreo publicitario ni compartimos datos de navegación con redes de publicidad.",
    },
    {
      icon: "📝",
      title: "7. Cambios a esta política",
      text: "Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio relevante será notificado en esta misma página con la fecha de actualización correspondiente.",
    },
  ];
</script>
