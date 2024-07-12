const products = [
    {
        id: 'product-1',
        images: ['https://content2.rozetka.com.ua/goods/images/big/419088411.jpg', 'https://content1.rozetka.com.ua/goods/images/big/419088953.jpg'],
        name: 'Монітор 27" MSI MAG 274QRF-QD E2 -- Quantum Dot Rapid IPS / 2K QHD / 180Hz / 1ms GtG / DisplayHDR 400 / KVM / Console Mode Optimization 2K 120Hz / Type-C 65W PD / G-Sync',
        price: '11 899₴'
    },
    {
        id: 'product-2',
        images: ['https://content1.rozetka.com.ua/goods/images/big/336277884.jpg', 'https://content2.rozetka.com.ua/goods/images/big/336277885.jpg'],
        name: 'Монітор 27" Samsung Curved LS27C366 (LS27C366EAIXCI)',
        price: '4 499₴'
    },
    {
        id: 'product-3',
        images: ['https://content1.rozetka.com.ua/goods/images/big/341538424.jpg', 'https://content1.rozetka.com.ua/goods/images/big/341538501.jpg'],
        name: 'Монітор 23.8” Asus VY249HGE (90LM06A5-B02370) IPS FHD 144Гц / 8-Bit / Adaptive Sync / Freesync Premium',
        price: '5 499₴'
    },
    {
        id: 'product-4',
        images: ['https://content.rozetka.com.ua/goods/images/big/426259969.jpg', 'https://content2.rozetka.com.ua/goods/images/big/426259994.jpg'],
        name: 'Монітор 27" Asus ROG Strix XG27ACS (90LM09Q0-B01170) 2K QHD / Fast IPS 180Hz / 1 ms / DCI-P3 97% / DisplayHDR 400 / USB Type-C / G-SYNC Compatible / AMD FreeSync /',
        price: '12 599₴'
    }
    // Додайте більше товарів тут
];

const container = document.getElementById('product-container');
const modal = document.getElementById('product-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close');
const prevImageButton = document.getElementById('prev-image');
const nextImageButton = document.getElementById('next-image');

let currentProductIndex = -1;
let currentImageIndex = 0;

products.forEach((product, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = product.id;

    const img = document.createElement('img');
    img.src = product.images[0]; // Відображення першого фото
    img.alt = product.name;

    const title = document.createElement('h2');
    title.textContent = product.name.substring(0, 20).trim() + "...";

    const price = document.createElement('p');
    price.textContent = `Ціна: ${product.price}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    card.addEventListener('click', () => {
        currentProductIndex = index;
        currentImageIndex = 0;
        showProductModal();
    });

    container.appendChild(card);
});

function toggleFullscreen() {
    if (modalImage.classList.contains('modal-fullscreen')) {
        modalImage.classList.remove('modal-fullscreen');
        document.body.style.overflow = ''; // Restore scrolling
    } else {
        modalImage.classList.add('modal-fullscreen');

    }
}

function showProductModal() {
    const product = products[currentProductIndex];
    modalImage.src = product.images[currentImageIndex];
    modalTitle.textContent = product.name;
    modalPrice.textContent = `Ціна: ${product.price}`;
    modal.style.display = 'flex';
}

function hideProductModal() {
    modal.style.display = 'none';
    modalImage.classList.remove('modal-fullscreen'); // Ensure full-screen mode is removed when hiding modal
    document.body.style.overflow = ''; // Restore scrolling
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        modalImage.src = products[currentProductIndex].images[currentImageIndex];
    }
}

function showNextImage() {
    if (currentImageIndex < products[currentProductIndex].images.length - 1) {
        currentImageIndex++;
        modalImage.src = products[currentProductIndex].images[currentImageIndex];
    }
}

closeModal.addEventListener('click', hideProductModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideProductModal();
    }
});
prevImageButton.addEventListener('click', showPrevImage);
nextImageButton.addEventListener('click', showNextImage);
modalImage.addEventListener('click', toggleFullscreen);