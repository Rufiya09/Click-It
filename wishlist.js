
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.wishlist-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const card = this.closest('.card');
            const productName = card.querySelector('.product-text h5').innerText;
            const productImage = card.querySelector('.product-image').src;
            const productPrice = card.querySelector('.product-price').innerText;

            const wishlistItem = {
                name: productName,
                image: productImage,
                price: productPrice
            };

            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

            if (!wishlist.some(item => item.name === productName)) {
                wishlist.push(wishlistItem);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                alert('Item added to wishlist');
            }

            // Change the heart icon to a filled heart and red color
            this.classList.remove('fa-regular');
            this.classList.add('fa-solid');
            this.style.color = 'red';
        });
    });
});

function back() {
    window.location.href = 'index.html';
}

