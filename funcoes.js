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
        "</div>"+
        "<div class='row flex-lg-row align-items-center g-5 py-5'>"+
        "   <div class='col-10 col-sm-8 col-lg-6'>"+
        " <h1 class='text-center'> MVP </h1>"+
        "     <img src='img/campeonatos/cold.avif' width='400' height='300' style='border-radius: 15px; margin-left:50px'>"+
        "   </div>"+
        " <div class='col-lg-6'>"+
        "     <h3 class='display-7 fw-bold text-body-emphasis lh-1 mb-3'>Marcelo 'coldzera' David (Brasileiro)</h1>"+
        " </div>"+
        "</div>"+
        "<div class='container text-center'>"+
          "<div class='row'>"+
            "<div class='col'>"+
             "<table class='table table-bordered'>"+
            "<thead>"+
              "<tr>"+
                "<th scope='col'>Group A</th>"+
                "<th scope='col'>M</th>"+
                "<th scope='col'>W</th>"+
                "<th scope='col'>T</th>"+
                "<th scope='col'>L</th>"+
                "<th scope='col'>RD</th>"+
                "<th scope='col'>P</th>"+
              "</tr>"+
            "</thead>"+
            "<tbody>"+
              "<tr>"+
                "<th scope='row'>Gambit</th>"+
                "<td>2</td>"+
                "<td>2</td>"+
                "<td>0</td>"+
                "<td>0</td>"+
                "<td>13</td>"+
                "<td>6</td>"+
              "</tr>"+
              "<tr>"+
                "<th scope='row'>Astralis</th>"+
                "<td>3</td>"+
                "<td>2</td>"+
                "<td>0</td>"+
                "<td>1</td>"+
                "<td>-1</td>"+
                "<td>6</td>"+
              "</tr>"+
              "<tr>"+
                "<th scope='row'>Dignitas</th>"+
                "<td>3</td>"+
                "<td>1</td>"+
                "<td>0</td>"+
                "<td>2</td>"+
                "<td>6</td>"+
                "<td>3</td>"+
              "</tr>"+
              "<tr>"+
                "<th scope='row'>CLG</th>"+
                "<td>2</td>"+
                "<td>0</td>"+
                "<td>0</td>"+
                "<td>2</td>"+
                "<td>-18</td>"+
                "<td>0</td>"+
              "</tr>"+
            "</tbody>"+
          "</table>"+
       "</div>"+
       "<div class='col'>"+
       "<table class='table table-bordered'>"+
         "<thead>"+
           "<tr>"+
             "<th scope='col'>Group B</th>"+
             "<th scope='col'>M</th>"+
             "<th scope='col'>W</th>"+
             "<th scope='col'>T</th>"+
             "<th scope='col'>L</th>"+
             "<th scope='col'>RD</th>"+
             "<th scope='col'>P</th>"+
           "</tr>"+
         "</thead>"+
         "<tbody>"+
           "<tr>"+
             "<th scope='row'>Natus Vincere</th>"+
             "<td>2</td>"+
             "<td>2</td>"+
             "<td>0</td>"+
             "<td>0</td>"+
             "<td>13</td>"+
             "<td>6</td>"+
           "</tr>"+
           "<tr>"+
             "<th scope='row'>FlipSid3</th>"+
             "<td>3</td>"+
             "<td>2</td>"+
             "<td>0</td>"+
             "<td>1</td>"+
             "<td>11</td>"+
             "<td>6</td>"+
           "</tr>"+
           "<tr>"+
             "<th scope='row'>Ninjas In Pyjamas</th>"+
             "<td>3</td>"+
             "<td>1</td>"+
             "<td>0</td>"+
             "<td>2</td>"+
             "<td>-9</td>"+
             "<td>3</td>"+
           "</tr>"+
           "<tr>"+
             "<th scope='row'>OpTic</th>"+
             "<td>2</td>"+
             "<td>0</td>"+
             "<td>0</td>"+
             "<td>2</td>"+
             "<td>-15</td>"+
             "<td>0</td>"+
           "</tr>"+
         "</tbody>"+
       "</table>"+
     "</div>"+
   "</div>"+

   "<div class='container text-center'>"+
     "<div class='row'>"+
       "<div class='col'>"+
         "<table class='table table-bordered'>"+
           "<thead>"+
             "<tr>"+
               "<th scope='col'>Group C</th>"+
               "<th scope='col'>M</th>"+
               "<th scope='col'>W</th>"+
               "<th scope='col'>T</th>"+
               "<th scope='col'>L</th>"+
               "<th scope='col'>RD</th>"+
               "<th scope='col'>P</th>"+
             "</tr>"+
           "</thead>"+
           "<tbody>"+
             "<tr>"+
               "<th scope='row'>Virtus.pro</th>"+
               "<td>2</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>10</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>Liquid</th>"+
               "<td>3</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>1</td>"+
               "<td>20</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>Mouz</th>"+
               "<td>3</td>"+
               "<td>1</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-17</td>"+
               "<td>3</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>Envy</th>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-13</td>"+
               "<td>0</td>"+
             "</tr>"+
           "</tbody>"+
         "</table>"+
       "</div>"+
       "<div class='col'>"+
         "<table class='table table-bordered'>"+
           "<thead>"+
             "<tr>"+
               "<th scope='col'>Group D</th>"+
               "<th scope='col'>M</th>"+
               "<th scope='col'>W</th>"+
               "<th scope='col'>T</th>"+
               "<th scope='col'>L</th>"+
               "<th scope='col'>RD</th>"+
               "<th scope='col'>P</th>"+
             "</tr>"+
           "</thead>"+
           "<tbody>"+
             "<tr>"+
               "<th scope='row'>SK</th>"+
               "<td>2</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>15</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>Fnatic</th>"+
               "<td>3</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>1</td>"+
               "<td>17</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>FaZe</th>"+
               "<td>3</td>"+
               "<td>1</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-24</td>"+
               "<td>3</td>"+
             "</tr>"+
             "<tr>"+
               "<th scope='row'>G2</th>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-8</td>"+
               "<td>0</td>"+
             "</tr>"+
           "</tbody>"+
         "</table>"+
       "</div>"+
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
