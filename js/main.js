addEventListener('DOMContentLoaded', () => {
    const inputRango = document.getElementById('input-range');
    const nroLongitud = document.getElementById('nro-longitud');
    const msgIndicacion = document.getElementById('msg-indicator');
    const msgIcon = document.getElementById('icon-msg');
    const mostrarPassword = document.getElementById('mostrar-password');
    const btnCopiar = document.getElementById('btn-copiar');
    const main = document.querySelector('main');
    const btnRegenerar = document.querySelector('.btn-regenerar');

    let password = generarPassword(10).join("");

    mostrarPassword.innerText = password;

    inputRango.addEventListener('input', e => {
        const valueInput = e.target.value;

        nroLongitud.innerText = valueInput;

        password = generarPassword(valueInput).join("");

        mostrarPassword.innerText = password;

        if (valueInput <= 6) {
            msgIndicacion.innerText = "Contraseña debil";
            msgIcon.classList.replace("bi-shield-check", "bi-shield-x");
            main.style.backgroundColor = "#d1364e";
        } else if (valueInput > 6 && valueInput < 10) {
            msgIndicacion.innerText = "Contraseña bastante segura";
            msgIcon.classList.replace("bi-shield-x", "bi-shield-check");
            main.style.backgroundColor = "#be4e3a"
        } else if (valueInput >= 10) {
            msgIndicacion.innerText = "Contraseña segura";
            msgIcon.classList.replace("bi-shield-x", "bi-shield-check");
            main.style.backgroundColor = "#1C815A";
        }

        btnRegenerar.addEventListener('click', () => {
            password = generarPassword(valueInput).join("");
            mostrarPassword.innerText = password;
        })
    })

    btnCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(mostrarPassword.innerText)
            .then(function () {
                btnCopiar.classList.replace("bi-clipboard", "bi-clipboard-check");
                btnCopiar.style.fontSize = "1.1rem";
                setTimeout(() => {
                    btnCopiar.classList.replace("bi-clipboard-check", "bi-clipboard");
                    btnCopiar.style.fontSize = "1rem";
                }, 600);
            }).catch(function () {
                btnCopiar.classList.replace("bi-clipboard", "bi-clipboard-x");
                setTimeout(() => {
                    btnCopiar.classList.replace("bi-clipboard-x", "bi-clipboard");
                }, 600);
            });
    })

    function generarPassword(longitud) {
        const password = [];

        for (let i = 0; i < longitud; i++) {
            password[i] = String.fromCharCode(Math.floor(35 + Math.random() * (123 - 35 + 1)));
        }

        return password;
    }
})

