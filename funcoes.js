function changePage(pageNum) {
    // Remove a classe "active" de todos os botões de página
    const pageButtons = document.querySelectorAll(".pagination .page-item");
    pageButtons.forEach((button) => button.classList.remove("active"));
  
    // Adiciona a classe "active" ao botão de página selecionado
    const selectedPageButton = document.querySelector(
      `.pagination .page-item:nth-child(${pageNum + 1})`
    );
    selectedPageButton.classList.add("active");
  
    // Atualiza o conteúdo do card com base na página selecionada
    const cardTitle = document.querySelector(".card-title");
    const cardText = document.querySelector(".card-text");
    switch (pageNum) {
      case 0:
        cardTitle.textContent = "Overview";
        cardText.textContent = "TESTE";
        break;
      case 1:
        cardTitle.textContent = "Results";
        cardText.textContent = "TESTE";
        break;
      case 2:
        cardTitle.textContent = "Stats";
        cardText.textContent = "Stats content goes here.";
        break;
      default:
        break;
    }
  }

  
  const pageButtons = document.querySelectorAll(".pagination .page-item");
    pageButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
    changePage(index);
  });
});
