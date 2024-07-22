const ocultables = document.getElementsByClassName("ocultables");
const menu = document.querySelector(".hamburguesa");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close");
const nocturno = document.querySelector(".nocturno");
const body = document.body;

        function comprobarTamañoPantalla() {
          
            if (window.innerWidth <= 900) {
                for (let i = 0; i < ocultables.length; i++) {
                    ocultables[i].classList.add('hidden'); 
                }
            } else {
                for (let i = 0; i < ocultables.length; i++) {
                    ocultables[i].classList.remove('hidden'); 
                }
            }
        }

        window.addEventListener('resize', comprobarTamañoPantalla);
       
        window.addEventListener('load', comprobarTamañoPantalla);

        menu.addEventListener("click", activarMenu)
        close.addEventListener("click", desactivarMenu)
        nocturno.addEventListener("click", activarNocturno)
       
        
        function activarMenu() {
            for (let i = 0; i < ocultables.length; i++) {
                ocultables[i].classList.remove('hidden'); 

            }

            nav.classList.add("desplegar")
            close.style.display = "block"


        }

        function desactivarMenu() {
            for (let i = 0; i < ocultables.length; i++) {
                ocultables[i].classList.add('hidden'); 

            }

            nav.classList.remove("desplegar")
            close.style.display = "none"


        }

        function activarNocturno(){
            body.classList.toggle('cuerpo-nocturno');
        }