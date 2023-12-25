const cartItems = [];

    function addToCart(productName, price, imageUrl) {
      cartItems.push({ productName, price, imageUrl });
      updateCart();
    }

    function removeItem(index) {
      cartItems.splice(index, 1);
      updateCart();
    }

    function clearCart() {
      cartItems.length = 0;
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart-items');
      const totalElement = document.getElementById('total');
      cartList.innerHTML = '';

      let totalAmount = 0;

      cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';

        const productImage = document.createElement('img');
        productImage.src = item.imageUrl;
        listItem.appendChild(productImage);

        const productDetails = document.createElement('div');
        const productName = document.createElement('span');
        productName.textContent = item.productName;
        const productPrice = document.createElement('span');
        productPrice.textContent = `$${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItem(index);

        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(removeButton);

        listItem.appendChild(productDetails);
        cartList.appendChild(listItem);

        totalAmount += item.price;
      });

      totalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
    }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
