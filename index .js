const produtos = [
    { nome: "iPhone 14", categoria: "Celular", preco: 4999 },
    { nome: "Galaxy S23", categoria: "Celular", preco: 3599 },
    { nome: "MacBook Pro", categoria: "Notebook", preco: 8999 },
    { nome: "Fone Bluetooth", categoria: "Acessório", preco: 299 },
    { nome: "Teclado Mecânico", categoria: "Acessório", preco: 399 },
    { nome: "Dell Inspiron", categoria: "Notebook", preco: 3999 }
];

const busca = document.getElementById("buscaProduto");
const selectCategoria = document.getElementById("filtroCategoriaProduto");
const rangePreco = document.getElementById("filtroPreco");
const valorPreco = document.getElementById("valorPreco");
const lista = document.getElementById("listaProdutos");

function renderizarLista(listaProduto) {
    lista.innerHTML = "";
    if (listaProduto.length === 0) {
        lista.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    listaProduto.forEach(produto => {
        const div = document.createElement('div')
        div.classList.add('produto')
        div.innerHTML = `
        <p>${produto.nome}</p>
        <p>${produto.categoria}</p>
        <p>${produto.preco}</p>`;

        lista.appendChild(div)
    });
}

function aplicarFiltro() {
    const termo = busca.value.toLowerCase()
    const categoriaSelecionada = selectCategoria.value;
    const precoMaximo = parseFloat(rangePreco.value);
    valorPreco.textContent = precoMaximo;


    const filtrados = produtos.filter(produto => {
        const nomeCombina = produto.nome.toLowerCase().includes(termo);
        const categoriaCombina = categoriaSelecionada === "" || produto.categoria === categoriaSelecionada;
        const precoCombina = produto.preco <= precoMaximo;

        return nomeCombina && categoriaCombina && precoCombina;

    });
    renderizarLista(filtrados);
}
busca.addEventListener("input", aplicarFiltro);
selectCategoria.addEventListener("change", aplicarFiltro);
rangePreco.addEventListener("input", aplicarFiltro);
renderizarLista(produtos);


