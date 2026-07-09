<script>
  import { onMount } from 'svelte';
  import heroImage from '$lib/assets/chair.jpg';
  import edificioImage from '$lib/assets/edificio.png';

  const servicios = [
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>`,
      titulo: 'Endodoncia',
      desc: 'Tratamiento de conductos para conservar dientes sanos, funcionales y sin dolor.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>`,
      titulo: 'Odontología integral estética',
      desc: 'Diseño de sonrisa y restauraciones estéticas que devuelven naturalidad y confianza.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m9 6a6 6 0 100-12 6 6 0 000 12z"/>`,
      titulo: 'Blanqueamientos',
      desc: 'Clarificación profesional para un tono más luminoso y uniforme en tu sonrisa.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
      titulo: 'Desmanchado de dientes',
      desc: 'Eliminamos manchas y pigmentaciones para recuperar el brillo natural de tus dientes.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>`,
      titulo: 'Extracciones',
      desc: 'Procedimientos seguros y cuidadosos para eliminar dientes dañados o impactados.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>`,
      titulo: 'Rellenos dentales estéticos',
      desc: 'Restauraciones discretas y naturales para recuperar forma y función.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3.75v3m7.5-3v3m-10.5 0h12m-12 0a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V6a2.25 2.25 0 00-2.25-2.25"/>`,
      titulo: 'Puentes fijos y removibles',
      desc: 'Soluciones de rehabilitación para recuperar la sonrisa y la masticación.',
    },
    {
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m0-18c-2.5 2.5-4 4.5-4 7a4 4 0 008 0c0-2.5-1.5-4.5-4-7zm0 18c2.5-2.5 4-4.5 4-7a4 4 0 00-8 0c0 2.5 1.5 4.5 4 7z"/>`,
      titulo: 'Carillas dentales',
      desc: 'Revestimientos finos que corrigen forma, color y alineación con resultados naturales.',
    },
  ];

  const testimonios = [
    {
      texto: 'Personal muy amable. Los técnicos son excelentes con los niños. Hacen la experiencia especial. El recepcionista fue muy agradable y el dentista es gentil y tranquilo.',
      autor: 'Cassandra H.',
      estrellas: 5,
    },
    {
      texto: 'Increíble atención desde el primer momento. El consultorio es moderno y limpio, y el Dr. Raz es muy profesional. Regreso siempre que puedo.',
      autor: 'Roberto M.',
      estrellas: 5,
    },
    {
      texto: 'Me hicieron sentir muy cómoda durante toda la visita. Excelente tecnología y un equipo muy dedicado. Lo recomiendo sin dudar.',
      autor: 'Laura V.',
      estrellas: 5,
    },
  ];

  const beneficios = [
    'Atención integral para toda la familia',
    'Ubicación central y conveniente en Chihuahua',
    'Estacionamiento gratuito dedicado',
    'Consultorio cómodo que pone al paciente a gusto',
    'Tecnología dental digital para tratamientos precisos',
    'Compasión, respeto y comprensión en cada visita',
  ];

  let mounted = $state(false);
  onMount(() => setTimeout(() => (mounted = true), 100));
</script>

<svelte:head>
  <title>Dental Panamericana | Clínica Dental Premium en Chihuahua</title>
  <meta name="description" content="La mejor experiencia dental en Chihuahua. Odontología preventiva, implantes, estética y salud para adultos mayores. Agenda tu cita hoy." />
</svelte:head>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section
  class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
  style="background-image: linear-gradient(135deg, rgba(0, 40, 40, 0.5) 0%, rgba(0, 69, 69, 0.5) 50%, rgba(0, 101, 101, 0.5) 100%), url({heroImage}); background-size: cover; background-position: center;"
>
  <!-- Decorative circles -->
  <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/2 -translate-y-1/4"
       style="background: radial-gradient(circle, #76d6d5, transparent)"></div>
  <div class="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 -translate-x-1/3 translate-y-1/4"
       style="background: radial-gradient(circle, #008080, transparent)"></div>

  <div class="relative z-10 max-w-5xl mx-auto px-6 text-center text-white" class:animate-fade-up={mounted}>
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-600 tracking-widest uppercase mb-8"
         style="background:rgba(118,214,213,0.15); color:#76d6d5; border:1px solid rgba(118,214,213,0.3)">
      <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background:#76d6d5"></span>
      Clínica Dental Premium · Chihuahua
    </div>

    <h1 class="font-display font-900 leading-tight mb-6"
        style="font-size: clamp(2rem, 5vw, 3.5rem)">
      La gente, la tecnología y<br class="hidden md:block"/>
      la ubicación que hacen que<br class="hidden md:block"/>
      cada visita al dentista sea fácil
    </h1>

    <p class="font-body text-lg opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
      Todo lo que tu familia necesita para una experiencia dental increíble está reunido en Dental Panamericana.
      Personal amable, tecnología de vanguardia y una ubicación conveniente.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contacto"
         class="px-8 py-4 rounded-full font-display font-700 text-base text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
         style="background: linear-gradient(135deg,#008080,#00b3b3)">
        Solicitar Consulta
      </a>
      <a href="/servicios"
         class="px-8 py-4 rounded-full font-display font-700 text-base transition-all duration-300 hover:scale-105"
         style="background:rgba(255,255,255,0.1); color:white; border:1px solid rgba(255,255,255,0.3)">
        Ver Servicios
      </a>
    </div>

    <!-- Stats -->
    <div class="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
      {#each [['15+', 'Años de experiencia'], ['2000+', 'Pacientes satisfechos'], ['4', 'Especialidades']] as [num, label]}
        <div class="text-center">
          <p class="font-display font-800 text-2xl" style="color:#76d6d5">{num}</p>
          <p class="text-xs opacity-60 mt-1">{label}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Wave divider -->
  <div class="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="w-full" style="fill:#f8f9ff">
      <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"/>
    </svg>
  </div>
</section>

<!-- ══════════════════════════════════════
     SERVICIOS
══════════════════════════════════════ -->
<section class="py-24 px-6 max-w-6xl mx-auto">
  <div class="text-center mb-14">
    <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#008080">Lo que ofrecemos</p>
    <h2 class="font-display font-800 text-3xl md:text-4xl" style="color:#0b1c30">Nuestros Servicios</h2>
    <p class="mt-4 font-body text-base opacity-70 max-w-xl mx-auto">Soluciones dentales completas adaptadas a cada etapa de tu vida y la de tu familia.</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each servicios as s, i}
      <div
        class="card-hover bg-white rounded-3xl p-7 shadow-md flex flex-col items-center text-center gap-5"
        style="animation-delay:{i * 0.1}s"
      >
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center"
             style="background:linear-gradient(135deg,rgba(0,101,101,0.1),rgba(0,128,128,0.2))">
          <svg class="w-7 h-7" fill="none" stroke="#006565" stroke-width="1.5" viewBox="0 0 24 24">
            {@html s.icon}
          </svg>
        </div>
        <div>
          <h3 class="font-display font-700 text-base mb-2" style="color:#0b1c30">{s.titulo}</h3>
          <p class="text-sm leading-relaxed" style="color:#3e4949">{s.desc}</p>
        </div>
        <a href="/servicios" class="mt-auto text-xs font-700 tracking-wide" style="color:#006565">
          Saber más →
        </a>
      </div>
    {/each}
  </div>
</section>

<!-- ══════════════════════════════════════
     CLÍNICA IMAGEN + BENEFICIOS
══════════════════════════════════════ -->
<section class="section-alt py-24 px-6">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
    <!-- Imagen genérica de clínica moderna -->
    <div class="relative">
      <div class="rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-cover bg-center"
           style="background-image: linear-gradient(135deg, rgba(224, 247, 247, 0.25), rgba(179, 232, 232, 0.2)), url({edificioImage});">
      </div>
    </div>

    <!-- Texto + beneficios -->
    <div>
      <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#008080">Por qué elegirnos</p>
      <h2 class="font-display font-800 text-3xl mb-5" style="color:#0b1c30">Una experiencia cálida y de clase mundial</h2>
      <p class="font-body text-base leading-relaxed mb-8" style="color:#3e4949">
        Como las cinco calles que convergen en un punto, todo lo que tu familia necesita para una experiencia dental increíble está unido en Dental Panamericana. Personas cálidas, tecnología avanzada y una ubicación conveniente.
      </p>
      <ul class="space-y-3">
        {#each beneficios as b}
          <li class="flex items-start gap-3">
            <span class="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                  style="background:rgba(0,101,101,0.12)">
              <svg class="w-3 h-3" fill="none" stroke="#006565" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>
            </span>
            <span class="text-sm leading-relaxed" style="color:#3e4949">{b}</span>
          </li>
        {/each}
      </ul>
      <a href="/doctores" class="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-700 text-sm text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
         style="background:linear-gradient(135deg,#006565,#008080)">
        Conocer a Nuestro Equipo
      </a>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     CTA NUEVOS PACIENTES
══════════════════════════════════════ -->
<section class="py-24 px-6 bg-teal-gradient text-white">
  <div class="max-w-4xl mx-auto text-center">
    <div class="text-4xl mb-4">🦷</div>
    <h2 class="font-display font-800 text-3xl md:text-4xl mb-4">
      ¡Siempre nos encanta recibir nuevos pacientes!
    </h2>
    <p class="font-body text-lg opacity-80 mb-8 max-w-xl mx-auto">
      Estamos dedicados a ayudar a cada paciente, nuevo y existente, a alcanzar la mejor salud bucal posible.
    </p>
    <a href="/contacto"
       class="inline-block px-10 py-4 rounded-full font-display font-700 text-base shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
       style="background:white; color:#006565">
      Agendar una Cita
    </a>
  </div>
</section>

<!-- ══════════════════════════════════════
     TESTIMONIOS
══════════════════════════════════════ -->
<section class="py-24 px-6 max-w-6xl mx-auto">
  <div class="text-center mb-14">
    <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#008080">Lo que dicen nuestros pacientes</p>
    <h2 class="font-display font-800 text-3xl md:text-4xl" style="color:#0b1c30">Testimonios</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each testimonios as t, i}
      <div class="card-hover bg-white rounded-3xl p-7 shadow-md flex flex-col gap-4" style="animation-delay:{i*0.15}s">
        <!-- Stars -->
        <div class="flex gap-1">
          {#each Array(t.estrellas) as _}
            <svg class="w-5 h-5" fill="#f59e0b" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          {/each}
        </div>
        <p class="text-sm leading-relaxed italic" style="color:#3e4949">"{t.texto}"</p>
        <p class="font-700 text-sm mt-auto" style="color:#006565">— {t.autor}</p>
      </div>
    {/each}
  </div>
</section>
