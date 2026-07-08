<script>
  const doctores = [
    {
      nombre: 'Dra. Lucina Elena Yrigoyen Soto',
      titulo: 'Cirujana Dentista · Titular',
      emoji: '🦷',
      bio: 'La Dra. Lucina Elena Yrigoyen Soto es una profesional comprometida con la salud bucal integral, con un enfoque atento y humano en cada tratamiento. Su prioridad es brindar una atención cercana, segura y de calidad para que cada paciente se sienta acompañado en todo momento.',
      especialidades: ['Endodoncia', 'Odontología integral estética', 'Blanqueamientos', 'Desmanchado de dientes'],
    },
    {
      nombre: 'Dra. Lizety Karime Irigoyen Majalca',
      titulo: 'Cirujana Dentista · Especialista en Atención Dental',
      emoji: '😊',
      bio: 'La Dra. Lizety Karime Irigoyen Majalca ofrece una atención personalizada, cálida y profesional, enfocada en resolver las necesidades de cada paciente con precisión y empatía. Su compromiso está en brindar experiencias dentales cómodas, confiables y orientadas al bienestar.',
      especialidades: ['Extracciones', 'Rellenos dentales estéticos', 'Puentes fijos y removibles', 'Carillas dentales'],
    },
  ];
</script>

<svelte:head>
  <title>Nuestro Equipo | Dental Panamericana Chihuahua</title>
  <meta name="description" content="Conoce al equipo de dentistas de Dental Panamericana en Chihuahua: Dra. Lucina Elena Yrigoyen Soto y Dra. Lizety Karime Irigoyen Majalca." />
</svelte:head>

<!-- Hero -->
<section
  class="pt-36 pb-20 px-6 text-white text-center"
  style="background: linear-gradient(135deg, #002828, #004545, #006565)"
>
  <p class="text-xs font-700 tracking-widest uppercase mb-3" style="color:#76d6d5">Nuestro Equipo</p>
  <h1 class="font-display font-800 text-4xl md:text-5xl mb-4">
    Los dentistas dedicados<br class="hidden md:block"/> a tu salud bucal
  </h1>
  <p class="font-body text-lg opacity-75 max-w-xl mx-auto">
    Nuestros dentistas son hábiles, capacitados y experimentados en brindar atención atenta. 
    Pero más que eso, se toman el tiempo de comprender las necesidades únicas de cada paciente.
  </p>
  <div class="mt-8 h-1 w-16 rounded-full mx-auto" style="background:#76d6d5"></div>
</section>

<!-- Doctores -->
<section class="py-24 px-6 max-w-5xl mx-auto space-y-12">
  {#each doctores as doc, i}
    <div class="card-hover bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-5">
      <!-- Foto placeholder -->
      <div
        class="md:col-span-2 flex flex-col items-center justify-center gap-4 p-10 min-h-64"
        style="background: linear-gradient(135deg, #e0f7f7, #b3e8e8)"
      >
        <span class="text-7xl">{doc.emoji}</span>
        <div class="text-center">
          <p class="font-display font-800 text-lg" style="color:#006565">{doc.nombre}</p>
          <p class="text-xs mt-1 opacity-60" style="color:#006565">(foto próximamente)</p>
        </div>
      </div>

      <!-- Info -->
      <div class="md:col-span-3 p-8 flex flex-col justify-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-700 mb-3"
             style="background:rgba(0,101,101,0.1); color:#006565; width:fit-content">
          {doc.titulo}
        </div>
        <h2 class="font-display font-800 text-2xl mb-4" style="color:#0b1c30">{doc.nombre}</h2>
        <p class="font-body text-sm leading-relaxed mb-6" style="color:#3e4949">{doc.bio}</p>
        <div>
          <p class="font-700 text-xs uppercase tracking-widest mb-3" style="color:#008080">Especialidades</p>
          <div class="flex flex-wrap gap-2">
            {#each doc.especialidades as esp}
              <span class="px-3 py-1 rounded-full text-xs font-600"
                    style="background:rgba(0,101,101,0.08); color:#006565">
                {esp}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/each}
</section>

<!-- CTA -->
<section class="py-20 px-6 section-alt text-center">
  <h2 class="font-display font-800 text-3xl mb-4" style="color:#0b1c30">¿Listo para conocernos?</h2>
  <p class="text-base mb-8 max-w-md mx-auto" style="color:#3e4949">
    Agenda tu cita y conoce en persona al equipo que cuidará de tu salud bucal.
  </p>
  <a href="/contacto"
     class="inline-block px-10 py-4 rounded-full font-700 text-base text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
     style="background: linear-gradient(135deg,#006565,#008080)">
    Agendar Cita
  </a>
</section>
