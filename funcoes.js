function changePage(pageNum) {
    // Remove a classe "active" de todos os botões de página
    //const pageButtons = document.querySelectorAll(".pagination .page-item");
    //pageButtons.forEach((button) => button.classList.remove("active"));
  
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
        cardTitle.innerHTML = "<h2 class='text-center' style='color:white'> OVERVIEW </h2> <BR>";
        cardText.innerHTML = "<table class='table'>" +
        "  <thead style='color:white'>"+
        "    <tr style='color:white'>"+
        "      <th scope='col'>Data</th>"+
        "      <th scope='col'>Prêmio</th>"+
        "      <th scope='col'>Times</th>"+
        "      <th scope='col'>Localização</th>"+
        "    </tr>"+
        "  </thead>"+
        "  <tbody>"+
        "   <tr style='color:white'>"+
        "     <td>5 de Julho - 10 de Julho 2016</td>"+
        "    <td>$1.000,000</td>"+
        "     <td>16</td>"+
        "    <td>Cologne, Germany</td>"+
        " </tr>"+
        " </tbody>"+
        "</table>" +
        "<br><br>"+
        " <h2 class='text-center'style='font-weight: bold'> CAMPEÕES </h2><br>"+
        "<div class='row row-cols-1 row-cols-md-3 g-3'>"+
        "  <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/campeao-2016.jfif' style='width: 250px; ' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title' style='color:black;'>SK - Gaming</h5>"+
        "        <p class='card-text' style='color: black;'><strong>Primeiro Lugar</strong></p>"+
        "        <p class='card-text' style='color: black;'>$500,000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "    <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/liquid-2016.jfif' style='width: 250px; height: 170px;' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title' style='color:black;'>Liquid</h5>"+
        "        <p class='card-text' style='color: black;'><strong>Segundo Lugar</strong></p>"+
        "        <p class='card-text' style='color: black;'>$150.000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "    <div class='col'>"+
        "    <div class='card text-center' style='width: 252px; left: 50px; '>"+
        "      <img src='img/campeonatos/fnatic-2016.jfif' style='width: 250px; height: 170px;' class='card-img-top' >"+
        "      <div class='card-body'>"+
        "        <h5 class='card-title' style='color:black;'>Fnatic</h5>"+
        "        <p class='card-text' style='color: black;'><strong>Terceiro Lugar</strong></p>"+
        "        <p class='card-text' style='color: black;'>$70.000</p>"+
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "</div>"+
        "<div class='row flex-lg-row align-items-center g-5 py-5'>"+
        "   <div class='col-10 col-sm-8 col-lg-6'>"+
        " <h1 class='text-center'  style='margin-left: 35px ;'> MVP </h1>"+
        "     <img src='img/campeonatos/cold.avif' width='400' height='300' style='border-radius: 15px; margin-left:50px'>"+
        "   </div>"+
        " <div class='col-lg-6' >"+
        "   <h3 class='display-7 fw-bold lh-1 mb-3' style='color:white;'> <img src='img/bandeira/brasil.png' alt='Bandeira' width='25' height='25'> Marcelo 'coldzera' David</h1>"+
        " </div>"+
        "</div>"+
        "<h3 class='text-center' style='font-weight: bold'> GRUPOS</h3><BR>"+
        "<div class='container text-center'>"+
          "<div class='row'>"+
            "<div class='col'>"+
             "<table class='table table-bordered'>"+
            "<thead style='color:white'>"+
              "<tr style='color:white'>"+
                "<th scope='col' >Group A</th>"+
                "<th scope='col'>M</th>"+
                "<th scope='col'>W</th>"+
                "<th scope='col'>T</th>"+
                "<th scope='col'>L</th>"+
                "<th scope='col'>RD</th>"+
                "<th scope='col'>P</th>"+
              "</tr>"+
            "</thead>"+
            "<tbody>"+
              "<tr style='color:white'>"+
                "<th scope='row'>Gambit</th>"+
                "<td>2</td>"+
                "<td>2</td>"+
                "<td>0</td>"+
                "<td>0</td>"+
                "<td>13</td>"+
                "<td>6</td>"+
              "</tr>"+
              "<tr style='color:white'>"+
                "<th scope='row'>Astralis</th>"+
                "<td>3</td>"+
                "<td>2</td>"+
                "<td>0</td>"+
                "<td>1</td>"+
                "<td>-1</td>"+
                "<td>6</td>"+
              "</tr>"+
              "<tr style='color:white'>"+
                "<th scope='row'>Dignitas</th>"+
                "<td>3</td>"+
                "<td>1</td>"+
                "<td>0</td>"+
                "<td>2</td>"+
                "<td>6</td>"+
                "<td>3</td>"+
              "</tr>"+
              "<tr style='color:white'>"+
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
         "<thead style='color:white'>"+
           "<tr style='color:white'>"+
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
           "<tr style='color:white'>"+
             "<th scope='row'>Natus Vincere</th>"+
             "<td>2</td>"+
             "<td>2</td>"+
             "<td>0</td>"+
             "<td>0</td>"+
             "<td>13</td>"+
             "<td>6</td>"+
           "</tr>"+
           "<tr style='color:white'>"+
             "<th scope='row'>FlipSid3</th>"+
             "<td>3</td>"+
             "<td>2</td>"+
             "<td>0</td>"+
             "<td>1</td>"+
             "<td>11</td>"+
             "<td>6</td>"+
           "</tr>"+
           "<tr style='color:white'>"+
             "<th scope='row'>Ninjas In Pyjamas</th>"+
             "<td>3</td>"+
             "<td>1</td>"+
             "<td>0</td>"+
             "<td>2</td>"+
             "<td>-9</td>"+
             "<td>3</td>"+
           "</tr>"+
           "<tr style='color:white'>"+
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
           "<thead style='color:white'>"+
             "<tr style='color:white'>"+
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
             "<tr style='color:white'>"+
               "<th scope='row'>Virtus.pro</th>"+
               "<td>2</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>10</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
               "<th scope='row'>Liquid</th>"+
               "<td>3</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>1</td>"+
               "<td>20</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
               "<th scope='row'>Mouz</th>"+
               "<td>3</td>"+
               "<td>1</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-17</td>"+
               "<td>3</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
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
           "<thead style='color:white'>"+
             "<tr style='color:white'>"+
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
             "<tr style='color:white'>"+
               "<th scope='row'>SK</th>"+
               "<td>2</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>0</td>"+
               "<td>15</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
               "<th scope='row'>Fnatic</th>"+
               "<td>3</td>"+
               "<td>2</td>"+
               "<td>0</td>"+
               "<td>1</td>"+
               "<td>17</td>"+
               "<td>6</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
               "<th scope='row'>FaZe</th>"+
               "<td>3</td>"+
               "<td>1</td>"+
               "<td>0</td>"+
               "<td>2</td>"+
               "<td>-24</td>"+
               "<td>3</td>"+
             "</tr>"+
             "<tr style='color:white'>"+
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
        cardTitle.innerHTML = "<h2 class='text-center' style='color:white'> Resultados </h2>";
        cardText.innerHTML = "<div class='container text-center'>"+
        "<div class='row'>"+
        "<div class=\"col-md-6\">"+
        "<table class=\"table\">"+
          "<h3 style=\"text-align: center;\"> Jogos (05/07/2016)</h3>"+
          "<thead style='color:white'>"+
            "<tr style='color:white'>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody style='color:white'>"+
            "<tr>"+
              "<td>Fnatic</td>"+
              "<td> 14 x 16</td>"+
              "<td>FaZe</td>"+
            "</tr>"+
            "<tr>"+
              "<td>SK</td>"+
              "<td> 16 x 11</td>"+
              "<td>G2</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Virtus.pro</td>"+
              "<td> 16 x 10</td>"+
              "<td>MOUZ</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Liquid</td>"+
              "<td> 16 x 7</td>"+
              "<td>Envy</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Ninjas in Pyjamas</td>"+
              "<td> 16 x 4</td>"+
              "<td>OpTic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Natus Vincere</td>"+
              "<td> 16 x7</td>"+
              "<td>FlipSid3</td>"+
            "</tr>"+
            "<tr>"+
              "<td>CLG</td>"+
              "<td> 13 x 16</td>"+
              "<td>Gambit</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Astralis</td>"+
              "<td> 16 x 12</td>"+
              "<td>Dignitas</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "<br><br>"+
      "<div class=\"col-md-6\">"+
        "<table class=\"table\" style='color:white'>"+
          "<h3 style=\"text-align: center;\"> Jogos (06/07/2016)</h3>"+
          "<thead>"+
            "<tr>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>G2</td>"+
              "<td>13 x 16</td>"+
              "<td>Fnatic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>SK</td>"+
              "<td>16 x 6</td>"+
              "<td>FaZe</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Envy</td>"+
              "<td> 12 x 16</td>"+
              "<td>MOUZ</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Liquid</td>"+
              "<td>12 x 16</td>"+
              "<td>Virtus.pro</td>"+
            "</tr>"+
            "<tr>"+
              "<td>FlipSid3</td>"+
              "<td>16 x 13</td>"+
              "<td>OpTic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Natus Vincere</td>"+
              "<td> 16 x 12</td>"+
              "<td>Ninjas in Pyjamas</td>"+
            "</tr>"+
            "<tr>"+
              "<td>CLG</td>"+
              "<td> 1 x 16</td>"+
              "<td>Dignitas</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Astralis</td>"+
              "<td> 6 x 16 </td>"+
              "<td>Gambit</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "</div>"+
      "<br><br>"+
      "<div class='container text-center'>"+
      "<div class='row'>"+
      "<div class=\"col-md-6\">"+
        "<table class=\"table\" style='color:white'>"+
          "<h3 style=\"text-align: center;\"> Jogos (07/07/2016) - Melhor de 3</h3>"+
          "<thead>"+
            "<tr>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>FaZe</td>"+
              "<td>0 x 2</td>"+
              "<td>Fnatic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Liquid</td>"+
              "<td>2 x 0</td>"+
              "<td>MOUZ</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Ninjas in Pyjamas</td>"+
              "<td>1 x 2</td>"+
              "<td>FlipSid3</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Astralis</td>"+
              "<td>2 x 1</td>"+
              "<td>Dignitas</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "<br><br>"+
      "<div class=\"col-md-6\">"+
        "<table class=\"table\" style='color:white'>"+
          "<h3 style=\"text-align: center;\"> Jogos (08/07/2016) - Melhor de 3</h3>"+
          "<thead>"+
            "<tr>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>Gambit</td>"+
              "<td>0 x 2</td>"+
              "<td>Fnatic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Natus Vincere</td>"+
              "<td>1 x 2</td>"+
              "<td>Liquid</td>"+
            "</tr>"+
            "<tr>"+
              "<td>SK</td>"+
              "<td>2 x 0</td>"+
              "<td>FlipSid3</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Virtus.pro</td>"+
              "<td>2 x 0</td>"+
              "<td>Astralis</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "</div>"+
      "<br><br>"+
      "<div class='container text-center'>"+
      "<div class='row justify-content-md-center'>"+
      "<div class=\"col-md-6\">"+
        "<table class=\"table\" style='color:white'>"+
          "<h3 style=\"text-align: center;\"> Jogos (09/07/2016) - Melhor de 3</h3>"+
          "<thead>"+
            "<tr>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>Liquid</td>"+
              "<td>2 x 0</td>"+
              "<td>Fnatic</td>"+
            "</tr>"+
            "<tr>"+
              "<td>Virtus.pro</td>"+
              "<td>1 x 2</td>"+
              "<td>SK</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "</div>"+
      "<br><br>"+
      "<div class='container text-center'>"+
      "<div class='row justify-content-md-center'>"+
      "<div class=\"col-md-6\">"+
        "<table class=\"table\" style='color:white'>"+
          "<h3 style=\"text-align: center;\"> Jogos (10/07/2016) - Final</h3>"+
          "<thead>"+
            "<tr>"+
              "<th scope=\"col\">Time</th>"+
              "<th scope=\"col\">Placar</th>"+
              "<th scope=\"col\">Time</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>SK</td>"+
              "<td>2 x 0</td>"+
              "<td>Liquid</td>"+
            "</tr>"+
          "</tbody>"+
        "</table>"+
      "</div>"+
      "</div>";
        break;
      case 2:
        cardTitle.innerHTML = "<h2 class='text-center' style='color:white'> Status </h2>";
        cardText.innerHTML = "<div class=\"container text-center\">" +
        "<div class=\"row\">" +
          "<div class=\"col-md-6\">" +
            "<table class=\"table\" style='color:white'>" +
              "<h3 style=\"text-align: center;\">TOP Players</h3>" +
              "<thead>" +
                "<tr>" +
                  "<th scope=\"col\"> </th>" +
                  "<th scope=\"col\">Nome</th>" +
                  "<th scope=\"col\">Rating 2.0</th>" +
                  "<th scope=\"col\">Mapas</th>" +
                "</tr>" +
              "</thead>" +
              "<tbody>" +
                "<tr>" +
                  "<td><img src='img/bandeira/brasil.png' alt='Bandeira' width='25' height='25'></td>"+
                  "<td>Coldzera</td>" +
                  "<td>1.37</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/dinamarca.png' alt='Bandeira' width='20' height='20'></td>"+
                  "<td>Device</td>" +
                  "<td>1.28</td>" +
                  "<td>7</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/brasil.png' alt='Bandeira' width='25' height='25'></td>"+ 
                  "<td>TACO</td>" +
                  "<td>1.25</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/suecia.png' alt='Bandeira' width='20' height='20'></td>"+
                  "<td>KRIMZ</td>" +
                  "<td>1.27</td>" +
                  "<td>8</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/brasil.png' alt='Bandeira' width='25' height='25'></td>"+
                  "<td>FalleN</td>" +
                  "<td>1.19</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/espanha.png' alt='Bandeira' width='20' height='20'></td>"+
                  "<td>mixwell</td>" +
                  "<td>1.19</td>" +
                  "<td>2</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/brasil.png' alt='Bandeira' width='25' height='25'></td>"+
                  "<td>fnx</td>" +
                  "<td>1.19</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td><img src='img/bandeira/ucrania.png' alt='Bandeira' width='20' height='20'></td>"+
                  "<td>s1mple</td>" +
                  "<td>1.18</td>" +
                  "<td>11</td>" +
                "</tr>" +
              "</tbody>" +
            "</table>" +
          "</div>" +
          "<div class=\"col-md-6\">" +
            "<table class=\"table\" style='color:white'>" +
              "<h3 style=\"text-align: center;\">TOP Teams</h3>" +
              "<thead>" +
                "<tr>" +
                  "<th scope=\"col\">Time</th>" +
                  "<th scope=\"col\">Rating 2.0</th>" +
                  "<th scope=\"col\">Mapas</th>" +
                "</tr>" +
              "</thead>" +
              "<tbody>" +
                "<tr>" +
                  "<td>SK</td>" +
                  "<td>1.23</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Fnatic</td>" +
                  "<td>1.14</td>" +
                  "<td>9</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Natus Vincere</td>" +
                  "<td>1.10</td>" +
                  "<td>5</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Astralis</td>" +
                  "<td>1.07</td>" +
                  "<td>7</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Liquid</td>" +
                  "<td>1.07</td>" +
                  "<td>11</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>FlipSid3</td>" +
                  "<td>1.03</td>" +
                  "<td>7</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Dignitas</td>" +
                  "<td>1.03</td>" +
                  "<td>5</td>" +
                "</tr>" +
                "<tr>" +
                  "<td>Virtus.Pro</td>" +
                  "<td>1.02</td>" +
                  "<td>7</td>" +
                "</tr>" +
              "</tbody>" +
            "</table>" +
          "</div>" +
        "</div>";
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
