const alunos = [
    {nome: 'Antonio', nota: '4'},
    {nome: 'Maria', nota: '8'},
    {nome: 'Afonso', nota: '5'},
    {nome: 'Julia', nota: '9'},
    {nome: 'Ana Clara', nota: '7'},
    {nome: 'Felipe', nota: '5'},
    {nome: 'Paulo', nota: '10'}
]

function filtrarAlunosAprovados(alunos) {
    return alunos.nota >= 6;
}

const alunosAprovados = alunos.filter(filtrarAlunosAprovados)

console.log(alunosAprovados)
