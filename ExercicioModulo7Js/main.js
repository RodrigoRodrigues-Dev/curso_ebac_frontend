let form = document.querySelector('#formSubtracao')
let maiorOuMenor = false;
let error = document.querySelector('#error');

let valueA = document.querySelector('#numberA');
let valueB = document.querySelector('#numberB');

function caculo(n1, n2) {
    return n1 - n2
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    maiorOuMenor = caculo(valueB.value, valueA.value);

    if(maiorOuMenor >= 0) {
        let resultado = document.querySelector('#sucess');
        resultado.innerHTML = maiorOuMenor;
        resultado.style.display = 'block';
        valueA.value = ' '
        valueB.value = ' '
        error.style.display = 'none';
        document.querySelector('input:nth-child(3n)').classList.remove('boxError')
    } else {
        error.style.display = 'block';
        error.innerHTML = "o número inserido é menor do que o anterior";
        document.querySelector('input:nth-child(3n)').classList.add('boxError')
    };

})

valueB.addEventListener('keyup', function(e) {})