document.addEventListener('DOMContentLoaded', function() {
  const cartBtn = document.getElementById('cartBtn');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.querySelector('.navbar');

  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      openCart();
    });
  }

  if (cartClose) {
    cartClose.addEventListener('click', function() {
      closeCart();
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', function() {
      closeCart();
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const variantId = this.dataset.variantId;
      addToCart(variantId);
    });
  });

  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', function() {
      const line = this.dataset.line;
      removeFromCart(line);
    });
  });

  function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function addToCart(variantId) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: variantId,
        quantity: 1
      })
    })
    .then(response => response.json())
    .then(data => {
      updateCartCount();
      refreshCart();
      openCart();
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    });
  }

  function removeFromCart(line) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line: line,
        quantity: 0
      })
    })
    .then(response => response.json())
    .then(data => {
      updateCartCount();
      refreshCart();
    })
    .catch(error => {
      console.error('Error removing from cart:', error);
    });
  }

  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
      });
  }

  function refreshCart() {
    fetch(window.location.href)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newCartItems = doc.querySelector('#cartItems');
        const newCartTotal = doc.querySelector('#cartTotal');
        const currentCartItems = document.querySelector('#cartItems');
        const currentCartTotal = document.querySelector('#cartTotal');

        if (newCartItems && currentCartItems) {
          currentCartItems.innerHTML = newCartItems.innerHTML;
        }

        if (newCartTotal && currentCartTotal) {
          currentCartTotal.textContent = newCartTotal.textContent;
        }

        document.querySelectorAll('.cart-item-remove').forEach(button => {
          button.addEventListener('click', function() {
            const line = this.dataset.line;
            removeFromCart(line);
          });
        });
      });
  }
});

if (typeof Shopify === 'undefined') {
  var Shopify = {};
}

Shopify.formatMoney = function(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || 'R {{ amount }}';

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? (decimal + parts[1]) : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};
