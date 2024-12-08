$(document).ready(function () {
    $.getJSON("assets/js/wedding.json", function (data) {
        var productContainer = $("#product-container");

        data.bridal_kits.forEach(category => {
            // Add category title
            productContainer.append(`
                <div class="category-section">
                    <div class="d-flex justify-content-center my-3 mt-5 mb-5 text-uppercase  product-type">
                        <h1>${category.category}</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 ms-5 me-4">
                    </div>
                </div>
            `);

            const productRow = productContainer.find('.row').last();

            // Loop through each product in the category
            category.products.forEach(product => {
                let productCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="assets/images/${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <div class="card-title-price d-flex justify-content-between">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-price">${product.price}</p>
                                </div>
                                <p class="card-description">${product.description}</p>
                                 <a href="javascript:void(0);" onclick="addToCart('${product.id}', '${product.name}', '${product.price}', 'assets/images/${product.image}')">
                                    <button class="add-to-cart-btn">Add to Cart</button>
                                </a>

                            </div>
                        </div>
                    </div>
                `;
                productRow.append(productCard);
            });
        });
    });
});
