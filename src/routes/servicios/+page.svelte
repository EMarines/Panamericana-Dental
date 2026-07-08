<script>
  const serviciosDestacados = [
    'Endodoncia',
    'Odontología integral estética',
    'Blanqueamientos',
    'Desmanchado de dientes',
    'Extracciones',
    'Rellenos dentales estéticos',
    'Puentes fijos y removibles',
    'Carillas dentales',
  ];

  const servicios = [
    {
      titulo: 'Endodoncia',
      emoji: '🦷',
      desc: 'Tratamiento especializado para conservar dientes sanos, aliviar el dolor y evitar la pérdida del órgano dental.',
      puntos: [
        'Tratamiento de conductos',
        'Control de infección y dolor',
        'Preservación de dientes naturales',
        'Seguimiento y rehabilitación',
      ],
    },
    {
      titulo: 'Odontología integral estética',
      emoji: '✨',
      desc: 'Combinamos estética y funcionalidad para lograr una sonrisa natural, armoniosa y saludable.',
      puntos: [
        'Diseño de sonrisa',
        'Restauraciones estéticas',
        'Corrección de color y forma',
        'Rehabilitación integral',
      ],
    },
    {
      titulo: 'Blanqueamientos',
      emoji: '☀️',
      desc: 'Clarificación profesional para un tono más luminoso, uniforme y brillante en tu sonrisa.',
      puntos: [
        'Blanqueamiento profesional en consultorio',
        'Protocolos seguros y personalizados',
        'Resultados visibles y duraderos',
        'Recomendaciones de mantenimiento',
      ],
    },
    {
      titulo: 'Desmanchado de dientes',
      emoji: '🌈',
      desc: 'Eliminamos manchas por hábitos, alimentos o tabaco para recuperar el brillo natural de tus dientes.',
      puntos: [
        'Eliminación de manchas visibles',
        'Pulido y limpieza profunda',
        'Mejora del tono dental',
        'Acompañamiento postratamiento',
      ],
    },
    {
      titulo: 'Extracciones',
      emoji: '🪥',
      desc: 'Procedimientos seguros y cuidadosos para eliminar dientes dañados, impactados o que ya no cumplen su función.',
      puntos: [
        'Extracciones simples y complejas',
        'Atención cómoda y precisa',
        'Control postoperatorio',
        'Prevención de infecciones',
      ],
    },
    {
      titulo: 'Rellenos dentales estéticos',
      emoji: '🧱',
      desc: 'Restauraciones discretas y naturales para recuperar forma, función y confianza en tu sonrisa.',
      puntos: [
        'Restauraciones de composite',
        'Reparación de caries',
        'Corrección de fisuras y fracturas',
        'Aspecto natural y duradero',
      ],
    },
    {
      titulo: 'Puentes fijos y removibles',
      emoji: '🔗',
      desc: 'Soluciones de rehabilitación para recuperar espacios edéntulos y volver a masticar con comodidad.',
      puntos: [
        'Reconstrucción de espacios edéntulos',
        'Restauración de la masticación',
        'Opciones fijas y removibles',
        'Diseño personalizado',
      ],
    },
    {
      titulo: 'Carillas dentales',
      emoji: '💎',
      desc: 'Revestimientos finos que corrigen forma, color y alineación con resultados naturales y sofisticados.',
      puntos: [
        'Carillas de porcelana',
        'Corrección de forma y color',
        'Resultados naturales',
        'Durabilidad y estética superior',
      ],
    },
  ];
</script>

<svelte:head>
  <title>Servicios | Dental Panamericana Chihuahua</title>
  <meta name="description" content="Conoce todos los servicios de Dental Panamericana en Chihuahua: odontología preventiva, implantes dentales, estética y cuidado para adultos mayores." />
</svelte:head>

<!-- ── Hero de página ── -->
<section
  class="pt-36 pb-20 px-6 text-white text-center"
  style="background: linear-gradient(135deg, #002828, #004545, #006565)"
>
  <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#76d6d5">Lo que hacemos</p>
  <h1 class="font-display font-800 text-4xl md:text-5xl mb-4">Nuestros Servicios</h1>
  <p class="font-body text-lg opacity-75 max-w-xl mx-auto">
    Soluciones dentales completas para toda tu familia, con tecnología de vanguardia y atención personalizada.
  </p>
  <div class="mt-8 h-1 w-16 rounded-full mx-auto" style="background:#76d6d5"></div>
</section>

<!-- ── Servicios destacados ── -->
<section class="py-20 px-6 max-w-6xl mx-auto">
  <div class="text-center mb-10">
    <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#008080">Servicios y tratamientos</p>
    <h2 class="font-display font-800 text-3xl md:text-4xl" style="color:#0b1c30">Lo que ofrecemos en Dental Panamericana</h2>
    <p class="mt-4 font-body text-base opacity-70 max-w-2xl mx-auto">
      Cada tratamiento está pensado para devolver comodidad, estética y confianza a tu sonrisa.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each serviciosDestacados as servicio}
      <div class="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
        <p class="font-display font-700 text-sm leading-relaxed" style="color:#006565">{servicio}</p>
      </div>
    {/each}
  </div>
</section>

<!-- ── Servicios detalle ── -->
<section class="py-24 px-6 max-w-5xl mx-auto space-y-16">
  {#each servicios as s, i}
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      class:md:flex-row-reverse={i % 2 !== 0}
    >
      <!-- Imagen genérica -->
      <div class={i % 2 !== 0 ? 'md:order-2' : ''}>
        <div
          class="rounded-3xl aspect-4/3 flex flex-col items-center justify-center gap-4 shadow-lg"
          style="background: linear-gradient(135deg,#e0f7f7,#b3e8e8)"
        >
          <span class="text-6xl">{s.emoji}</span>
          <p class="font-display font-700 text-sm text-center px-6" style="color:#006565; opacity:0.6">
            {s.titulo}
          </p>
        </div>
      </div>

      <!-- Texto -->
      <div class={i % 2 !== 0 ? 'md:order-1' : ''}>
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-700 tracking-wide mb-4"
          style="background:rgba(0,101,101,0.1); color:#006565"
        >
          Servicio {i + 1} de {servicios.length}
        </div>
        <h2 class="font-display font-800 text-2xl md:text-3xl mb-4" style="color:#0b1c30">{s.titulo}</h2>
        <p class="font-body text-base leading-relaxed mb-6" style="color:#3e4949">{s.desc}</p>
        <ul class="space-y-2.5">
          {#each s.puntos as punto}
            <li class="flex items-center gap-3">
              <span class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style="background:rgba(0,101,101,0.1)">
                <svg class="w-3 h-3" fill="none" stroke="#006565" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </span>
              <span class="text-sm" style="color:#3e4949">{punto}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-teal-gradient text-white text-center">
  <h2 class="font-display font-800 text-3xl mb-4">¿Listo para comenzar?</h2>
  <p class="opacity-80 mb-8 max-w-md mx-auto">Agenda tu consulta hoy y da el primer paso hacia tu sonrisa ideal.</p>
  <a href="/contacto"
     class="inline-block px-10 py-4 rounded-full font-700 text-base shadow-xl hover:scale-105 transition-all"
     style="background:white; color:#006565">
    Agendar Cita
  </a>
</section>
