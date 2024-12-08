$(document).ready(function () {
    $.getJSON("assets/js/cards.json", function (data) {
        var container = $("#container");
        
        data.forEach(function (card) {
            let cardHtml = `
                <div onclick="modal('${card.title}', 'assets/images/${card.image}', '${card.description}')" class="card col-md-4 mb-4" style="width: 18rem;">
                    <img src="assets/images/${card.image}" class="card-img-top" alt="${card.title}" height="200px">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="price">${card.pkr}</p>
                        </div>
                        <p class="card-text text-dark text-justify">${card.description}</p>
                        <a onclick="modal href="#" class="see-more">See More</a>
                    </div>
                </div>
            `;
            container.append(cardHtml);
        });
    });
});

// skin.js or a new script file
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('checkbox');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.category-Name').classList.toggle('dark-mode');
    });
});