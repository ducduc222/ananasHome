// Lấy dữ liệu từ data.json
fetch('data/data.json')
  .then(response => response.json())

  .then(data => {
    showListProduct(data);
  })

  .catch(error => {
    console.log('Lỗi:', error);
  });


  function showListProduct(list) {
    const listProduct = document.getElementById('list-item');
  
    list.forEach(product => {
      const listItem = document.createElement('li');
  
      const itemContent = `
        <div>
          <img src="${product.link}" alt="">
          <a href="${product.linkBuyNow}">
            <h2>${product.productName}</h2>
          </a>
          <h3>${product.productColor}</h3>
          <h2>${product.productPrice}</h2>
        </div>
      `;
  
      listItem.innerHTML = itemContent;
      listProduct.appendChild(listItem);
    });
  }
  
