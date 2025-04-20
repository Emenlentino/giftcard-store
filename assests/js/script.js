let cart = [];

document.getElementById('add-to-cart').addEventListener('click', () => {
  const giftType = document.getElementById('giftType').value;
  const giftValue = document.getElementById('giftValue').value;

  if (giftType && giftValue) {
    cart.push({ giftType, giftValue });
    updateCart();
    document.getElementById('checkout').classList.remove('d-none');
    alert(`🎁 Added ${giftType} - ${giftValue} to cart!`);
  } else {
    alert('⚠️ Please select both gift type and value.');
  }
});

function updateCart() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML = `
      ${item.giftType} - ${item.giftValue}
      <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
    `;
    list.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  if (cart.length === 0) {
    document.getElementById('checkout').classList.add('d-none');
  }
}

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('giftType').addEventListener('change', function () {
  const giftValue = document.getElementById('giftValue');
  const options = {
    Roblox: ['400 Robux - $5.10', '800 Robux - $8.80', '1000 Robux - $10.50'],
    'League of Legends': ['100 RP - $1.00', '575 RP - $3.70'],
    Overwatch: ['200 Coins - $2.00', '500 Coins - $4.00', '1000 Coins - $7.00'],
  };

  giftValue.innerHTML = options[this.value]?.map(
    value => `<option value="${value}">${value}</option>`
  ).join('') || '<option value="">Select Value</option>';
});
