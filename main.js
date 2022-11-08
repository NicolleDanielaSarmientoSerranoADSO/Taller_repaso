addEventListener("DOMContentLoaded", (e) => {
    let N = document.querySelector("#N")
    let resultado = ""
    let form = document.querySelector("#form")
    let suma = 0
    let sobr = document.querySelector("#resultados")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let datosp = Object.fromEntries(new FormData(e.target));
        for (let i = 1; i < datosp.n; s++) {
            if (datosp.n % i == 0) {
                suma += i

            }
        }
        if (datosp.N == suma) {
            resultado = "Es perfecto :)"
            suma = 0
        }
        else {
            resultado = "No es perfecto :("
            suma = 0
        }

        sobr.innerHTML = ""
        sobr.insertAdjacentHTML("beforeend", `<h2> ${datosp.N + ' ' + resultado} </h2>`);
    })

})