const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="bg-[#333333] p-5">
  <div class="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
    
    <!-- Logo Block -->
    <a href="/index.html">
      <img src="/docs/assets/images/whiteLogo.svg" class="h-10" alt="Logo">
    </a>

    <!-- Social Media Icons -->
    <div class="flex items-center text-white gap-5">
      <a class="transition-all duration-500 hover:text-zinc-400" href="">
        <i class="fa-brands fa-instagram text-2xl"></i>
      </a>
      <a class="transition-all duration-500 hover:text-zinc-400" href="">
        <i class="fa-brands fa-facebook text-2xl"></i>
      </a>
    </div>

    <!-- Links Block -->
    <div class="text-white text-center">
      <ul class="flex flex-col md:flex-row items-center gap-5">
        <li><a class="transition-all duration-500 hover:text-zinc-400" href="/privacy-policy.html">Privacidad</a></li>
        <span class="hidden md:block">|</span>
        <li><a class="transition-all duration-500 hover:text-zinc-400" href="/terms.html">Términos</a></li>
        <span class="hidden md:block">|</span>
        <li><a class="transition-all duration-500 hover:text-zinc-400" href="/support.html">Soporte</a></li>
        <span class="hidden md:block">|</span>
        <li><a class="transition-all duration-500 hover:text-zinc-400" href="/user-guide.html">Guía de usuario</a></li>
      </ul>
      <p class="mt-5">© 2025 PathXpert.com.ar o sus productos</p>
    </div>
    
  </div>
</footer>

`