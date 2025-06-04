const footer = document.getElementById('footer')
footer.innerHTML = `
        <footer class="bg-[#333333] p-5">
            <div class="max-w-7xl w-full mx-auto md:flex-row flex-col flex items-center justify-between gap-5">
                <a href="/index.html">
                    <img src="/docs/assets/images/whiteLogo.svg"  class="h-10" alt="">
                </a>
                <div class="">
                    <ul class="flex md:flex-row flex-col items-center gap-5 text-white">
                        <li><a href="/privacy-policy.html">Privacidad</a></li> <span class="md:block hidden">|</span>
                        <li><a href="/terms.html">Términos</a></li> <span class="md:block hidden">|</span>
                        <li><a href="/support.html">Soporte</a></li> <span class="md:block hidden">|</span>
                        <li><a href="/user-guide.html">Guía de usuario</a></li>
                    </ul>
                    <p class="text-center mt-5 text-white">© 2025 PathXpert.com.ar o sus productos</p>
                </div>
                <div class="flex items-center text-white  gap-5">
                    <a href="">
                        <i class="fa-brands fa-instagram text-2xl"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-facebook text-2xl"></i>
                    </a>
                </div>
            </div>
        </footer>
`