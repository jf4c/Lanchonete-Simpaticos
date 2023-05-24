const somaTotal = () => {
  const valores = document.querySelectorAll(".pedidos__preco");
  const qtds = document.querySelectorAll(".pedidos__qtd");
  const ValorTotal = document.querySelector(".total__valor");
  let total = 0;

  valores.forEach((valor, index) => {
    total += qtds[index].value * parseFloat(valor.innerHTML.slice(3));
    ValorTotal.innerHTML = `R$${total},00`;
  });
};

const passaValor = function () {
  let total = parseFloat(
    document.querySelector(".total__valor").innerHTML.slice(2)
  );

  window.location = "pagamento.html?minhaVariavel=" + total;
};
