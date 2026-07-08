<script>
  import '../app.css';
  import { page } from '$app/stores';

  let { children } = $props();
  let menuOpen = $state(false);
  let scrolled = $state(false);

  const navLinks = [
    { href: '/',          label: 'Inicio'    },
    { href: '/servicios', label: 'Servicios' },
    { href: '/doctores',  label: 'Doctores'  },
    { href: '/contacto',  label: 'Contacto'  },
  ];

  $effect(() => {
    const onScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<!-- ───── NAVBAR ───── -->
<header
  class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
  class:glass={scrolled}
  class:shadow-lg={scrolled}
  style="background: {scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(248,249,255,0.95)'}; border-bottom: 1px solid {scrolled ? 'rgba(0,101,101,0.12)' : 'rgba(255,255,255,0.35)'};"
>
  <nav class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-24">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3 group rounded-full px-3 py-2 transition-colors hover:bg-white/70">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center shadow-md" style="background: linear-gradient(135deg,#006565,#008080)">
        <svg viewBox="0 0 40 40" class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4C12 4 7 10 7 16c0 4 2 7 4 9l2 9c.5 2 2 2.5 3 2.5h.5c1 0 2-.5 2.5-2.5L20 30l1 4c.5 2 1.5 2.5 2.5 2.5H24c1 0 2.5-.5 3-2.5l2-9c2-2 4-5 4-9 0-6-5-12-13-12z"/>
        </svg>
      </div>
      <div class="leading-tight">
        <p class="font-display font-800 text-sm tracking-tight" style="color:#006565">DENTAL</p>
        <p class="font-display font-600 text-xs tracking-widest uppercase" style="color:#3e4949">PANAMERICANA</p>
      </div>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-6 lg:gap-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="font-body text-sm font-600 tracking-wide transition-colors duration-200 relative group"
          style="color: {$page.url.pathname === link.href ? '#006565' : '#3e4949'}"
        >
          {link.label}
          <span
            class="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300"
            style="background:#006565; width:{$page.url.pathname === link.href ? '100%' : '0'}"
          ></span>
        </a>
      {/each}
    </div>

    <!-- CTA button + hamburger -->
    <div class="flex items-center gap-3 sm:gap-4">
      <a
        href="/contacto"
        class="hidden md:inline-flex items-center gap-2 px-6 py-2.75 rounded-full font-display font-700 text-sm text-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105"
        style="background: linear-gradient(135deg,#006565,#008080)"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        Agendar Cita
      </a>

      <!-- Hamburger -->
      <button
        onclick={() => menuOpen = !menuOpen}
        class="md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
        style="color:#006565"
        aria-label="Menú"
      >
        {#if menuOpen}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        {:else}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden glass border-t border-white/30 px-6 py-4 flex flex-col gap-3">
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => menuOpen = false}
          class="py-2 px-3 rounded-xl font-600 text-sm transition-colors"
          style="color: {$page.url.pathname === link.href ? '#006565' : '#3e4949'}; background: {$page.url.pathname === link.href ? 'rgba(0,101,101,0.08)' : 'transparent'}"
        >
          {link.label}
        </a>
      {/each}
      <a
        href="/contacto"
        onclick={() => menuOpen = false}
        class="mt-2 text-center py-3 rounded-full font-700 text-sm text-white"
        style="background: linear-gradient(135deg,#006565,#008080)"
      >
        Agendar Cita
      </a>
    </div>
  {/if}
</header>

<!-- ───── MAIN ───── -->
<main>
  {@render children?.()}
</main>

<!-- ───── FOOTER ───── -->
<footer style="background:#0b1c30; color:#eaf1ff" class="pt-14 pb-8">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- Brand -->
    <div>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:linear-gradient(135deg,#006565,#008080)">
          <svg viewBox="0 0 40 40" class="w-5 h-5 fill-white"><path d="M20 4C12 4 7 10 7 16c0 4 2 7 4 9l2 9c.5 2 2 2.5 3 2.5h.5c1 0 2-.5 2.5-2.5L20 30l1 4c.5 2 1.5 2.5 2.5 2.5H24c1 0 2.5-.5 3-2.5l2-9c2-2 4-5 4-9 0-6-5-12-13-12z"/></svg>
        </div>
        <div>
          <p class="font-display font-800 text-sm" style="color:#76d6d5">DENTAL PANAMERICANA</p>
        </div>
      </div>
      <p class="text-sm leading-relaxed opacity-70 max-w-xs">
        La gente, la tecnología y la ubicación que hacen que cada visita al dentista sea fácil.
      </p>
    </div>

    <!-- Links -->
    <div>
      <p class="font-display font-700 text-sm mb-4 uppercase tracking-widest" style="color:#76d6d5">Navegación</p>
      <ul class="space-y-2 text-sm opacity-75">
        {#each navLinks as link}
          <li><a href={link.href} class="hover:opacity-100 transition-opacity">{link.label}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <p class="font-display font-700 text-sm mb-4 uppercase tracking-widest" style="color:#76d6d5">Contacto</p>
      <address class="not-italic text-sm opacity-75 space-y-2">
        <p>Ave. Francisco Villa #5700</p>
        <p>Col. Panamericana, C.P. 31203</p>
        <p>Chihuahua, Chih. México</p>
        <p class="pt-1"><a href="tel:+526141234567" class="hover:opacity-100">(614) 123-4567</a></p>
        <p><a href="mailto:info@armviewdentistry.mx" class="hover:opacity-100">info@armviewdentistry.mx</a></p>
      </address>
    </div>
  </div>

  <div class="mt-10 border-t border-white/10 pt-6 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-50">
    <p>© {new Date().getFullYear()} Dental Panamericana. Todos los derechos reservados.</p>
    <p>Chihuahua, Chih. México</p>
  </div>
</footer>
