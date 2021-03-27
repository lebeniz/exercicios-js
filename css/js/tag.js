const colors ={
    p: '#388e3c', 
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    fomr: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag]? this[tag]: this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {//sleciona todas as class tag, executa um função para cada elemento atravez do forech
const tagName = elemento.tagName.toLowerCase()// pega cada nome da tag e coloca em minusculo atravez da função  toLowerCase

    elemento.style.borderColor = colors.get(tagName)//aplica um cor na borda do elemento

    if(!elemento.classList.contains('nolabel')){// se a lista de class que é o box, não conter o a class nolabel
        const label = document.createElement('label')//cria a class label
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName//insere dentro do label o nome da tag
        elemento.insertBefore(label, elemento.childNodes[0])//insere dentro de elemento a class label antes do primeiro elemento.
    }
})