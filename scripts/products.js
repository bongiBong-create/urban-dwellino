export const renderProducts = (products) => {
  const productsGrid = document.getElementById("products__grid");

  products.forEach((product) => {
    const productHtml = `
      <li class="result__products-item">
        <div class="result__products-body">
          <div class="result__products-img" style="background: url('${
            product.image
          }') center/cover no-repeat;">
            ${
              product.sales
                ? `<button class="result__products-sales button button-sales">
                    Акция
                  </button>`
                : ""
            }
            <a href="/" class="result__products-detailed link--accent">
              Подробнее
            </a>
          </div>
          <h3 class="result__products-title">
            ${product.title}
          </h3>
          <div class="result__products-info">
          <p class="${
            product.oldPrice
              ? `result__products-price price--accent`
              : `result__products-price`
          }">
            ${product.price} ₽
          </p>
          ${
            product.oldPrice
              ? `<p class="result__products-oldprice">${product.oldPrice} ₽</p>`
              : ""
          }
          </div>
        </div>
      </li>
    `;

    productsGrid.insertAdjacentHTML("beforeend", productHtml);
  });
};
