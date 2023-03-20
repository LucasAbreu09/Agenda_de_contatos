const form = document.getElementById('form_contato')
const contato = [];

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
})

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome_contato')
    const inputNumeroContato = document.getElementById('numero_contato')
    
    if(contato.includes(inputNomeContato.value)){
        alert(`o cantato já foi adicionada como: ${inputNomeContato.value}`)
    }else{
        contato.push(inputNomeContato.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += `<td><ion-icon name="videocam-outline"></ion-icon></td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNomeContato.value =''
    inputNumeroContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}