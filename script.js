$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});

function changeQuantity(id, amount) {
    let input = document.getElementById(id);
    let value = parseInt(input.value);
    if (value + amount >= 0) {
        input.value = value + amount;
    }
}

function calcularPedido() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;

    let pratos = [
        { id: "frango", nome: "Coxa de Frango Crocante", preco: 25.00 },
        { id: "bife", nome: "Bife com Batata", preco: 30.00 },
        { id: "carne", nome: "Carne de Panela", preco: 22.00 },
        { id: "farofa", nome: "Farofa", preco: 10.00 },
        { id: "salada", nome: "Salada", preco: 8.00 },
        { id: "torresmo", nome: "Torresmo", preco: 12.00 }
    ];

    let total = 0;
    let pedido = `<p style='text-align: left;'>Caro <strong>${nome}</strong><br><br>Segue os dados do seu pedido:</p>`;

    pedido += "<ul style='text-align: left;'>";

    pratos.forEach(prato => {
        let qtd = parseInt(document.getElementById(prato.id).value);
        if (qtd > 0) {
            let subtotal = qtd * prato.preco;
            pedido += `<li>Prato: ${prato.nome} - Preço unitário: R$ ${prato.preco.toFixed(2)} - Quantidade: ${qtd} - Total: R$ ${subtotal.toFixed(2)}</li>`;
            total += subtotal;
        }
    });

    pedido += "</ul>";
    pedido += `<p style='text-align: left;'><strong>Preço final: R$ ${total.toFixed(2)}</strong></p>`;

    document.getElementById("resultado").innerHTML = pedido;
    document.getElementById("resultado").style.display = "block";
}
