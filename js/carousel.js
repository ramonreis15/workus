document.addEventListener("DOMContentLoaded", function () {

    const botoes = ["btn-01", "btn-02", "btn-03"].map(id => document.getElementById(id));
    const itens = ["item-03", "item-02", "item-01"].map(id => document.getElementById(id));

    function alternarItem(index) {
        itens.forEach((item, i) => {
            if (i === index) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    }

    function alternarBotao(index) {
        botoes.forEach((botao, i) => {
            if (i === index) {
                botao.classList.add("active");
            } else {
                botao.classList.remove("active");
            }
        });
    }

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function () {
            alternarItem(index);
            alternarBotao(index);
        });
    });

});