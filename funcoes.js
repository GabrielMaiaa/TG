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
        cardText.innerHTML = "<table class='table'>" +
        "  <thead>"+
        "    <tr>"+
        "      <th scope='col'>Data</th>"+
        "      <th scope='col'>Prêmio</th>"+
        "      <th scope='col'>Times</th>"+
        "      <th scope='col'>Localização</th>"+
        "    </tr>"+
        "  </thead>"+
        "  <tbody>"+
        "   <tr>"+
        "     <td>5 de Julho - 10 de Julho 2016</td>"+
        "    <td>$1.000,000</td>"+
        "     <td>16</td>"+
        "    <td>Cologne, Germany</td>"+
        " </tr>"+
        " </tbody>"+
        "</table>" +
        "<br><br>"+
        " <h4 class='text-center'> Campeões </h4><br>"+
        "<div class='row row-cols-1 row-cols-md-3 g-3'>"+
        "  <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/campeao-2016.jfif' style='width: 250px; ' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title'>SK - Gaming</h5>"+
        "        <p class='card-text' style='color: black;'><strong>1 st</strong></p>"+
        "        <p class='card-text' style='color: black;'>$500,000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "    <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/liquid-2016.jfif' style='width: 250px; height: 170px;' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title'>Liquid</h5>"+
        "        <p class='card-text' style='color: black;'><strong>2 nd</strong></p>"+
        "        <p class='card-text' style='color: black;'>$150.000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "    <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/fnatic-2016.jfif' style='width: 250px; height: 170px;' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title'>Fnatic</h5>"+
        "        <p class='card-text' style='color: black;'><strong>3th</strong></p>"+
        "        <p class='card-text' style='color: black;'>$70.000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "</div>";
        break;
      case 1:
        cardTitle.textContent = "Results";
        cardText.innerHTML = "TESTE" ;
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
