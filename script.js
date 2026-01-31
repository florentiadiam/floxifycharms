// Sample product data - you'll replace with your actual products and images
let savedScrollY = 0;

// ===== LOAD BOX NOW WIDGET SCRIPT EARLY =====
(function loadBoxNowScript() {
  if (document.querySelector('script[data-boxnow-widget="1"]')) {
    console.log('📦 Box Now script already loaded');
    return;
  }
  
  const script = document.createElement('script');
  script.src = 'https://widget-cdn.boxnow.gr/map-widget/client/v1.js';
  script.async = true;
  script.dataset.boxnowWidget = "1";
  
  script.onload = function() {
    console.log('✅ Box Now widget script loaded successfully');
    console.log('📦 window.bnMapWidget:', typeof window.bnMapWidget);
  };
  
  script.onerror = function() {
    console.error('❌ Failed to load Box Now widget script from:', script.src);
  };
  
  // Add to head immediately
  if (document.head) {
    document.head.appendChild(script);
  } else {
    // If head doesn't exist yet, wait for DOM
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(script);
    });
  }
  
  console.log('📦 Loading Box Now widget script...');
})();
// ===== END BOX NOW SCRIPT LOADING =====

const products = [
    
    // Necklaces
    {
        id: 1,
        name: 'The Ankh Necklace',
        category: 'necklaces',
        price: 18,
        stock: 3, // ← ADD STOCK HERE! Change numbers as needed
        description: 'Inspired by egyptian mythology combined with rosemary-like aesthetic. The chain and the charm are made by stainless steel and they are anti-allergic.',
        images: ['Images/Necklaces/AnkhNecklace/photo1.jpg', 'Images/Necklaces/AnkhNecklace/photo2.jpg']
    },
    {
        id: 2,
        name: 'Shadow Crucis Necklace',
        category: 'necklaces',
        price: 15,
        stock: 5, // ← ADD STOCK HERE!
        description: 'Α black cross born from the shadows,a symbol of silent strength, faith and dark elegance. The chain is hand-wired and is made by Stainless Steel, the charm is made from Zinic Alloy. Write me in the description if you want a custom length (The modification can be shorter but not longer, I mean I can make it like a choker)',
        images: ['Images/Necklaces/ShadowCrucis/photo1.jpg', 'Images/Necklaces/ShadowCrucis/photo2.jpg', 'Images/Necklaces/ShadowCrucis/photo3.jpg', 'Images/Necklaces/ShadowCrucis/photo4.jpg']
    },
    {
        id: 3,
        name: 'Black Starry Heart Choker',
        category: 'chokers',
        price: 15,
        stock: 2, // ← ADD STOCK HERE!
        description: 'Black Starry Heart, where darkness learns to shine. This necklace features a hand-wired chain crafted from stainless steel, with bead-connecting rings made of zinc alloy. The charm is also made from zinc alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Chokers/BlackStarryHeart/photo1.jpg', 'Images/Chokers/BlackStarryHeart/photo2.jpg']
    },
    
    // Chokers
        {
        id: 4,
        name: 'The Skull Choker',
        category: 'chokers',
        price: 15,
        stock: 4, // ← ADD STOCK HERE!
        description: 'The Skull Choker, devotion carved in bone.The chain is hand-wired and made fromm Stainless Steel, the skull charms and the spikes are made from Zinic Alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly.',
        images: ['Images/Chokers/SkullChoker/photo1.jpg', 'Images/Chokers/SkullChoker/photo3.jpg', 'Images/Chokers/SkullChoker/photo2.jpg']
    },
       {
        id: 5,
        name: 'The Ouija Board Necklace',
        category: 'necklaces',
        price: 25,
        stock: 1, // ← ADD STOCK HERE!
        description: 'The Ouija Board Necklace, whisper your question...let the spirits answer. The ouija board charm is made from Stainless Steel, the wires are made from Zinic Alloy.',
        images: ['Images/Necklaces/OuijaBoard/photo1.jpg', 'Images/Necklaces/OuijaBoard/photo2.jpg', 'Images/Necklaces/OuijaBoard/photo3.jpg']
    },
    

    {
        id: 6,
        name: 'Midnight Devotion Choker',
        category: 'chokers',
        price: 25,
        stock: 3, // ← ADD STOCK HERE!
        description: 'Midnight Devotion, a love sworn after dark. The chain is hand-wired and made from Stainless Steel, the charm in the middle is made from Zinic Alloy.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Chokers/MidnightDevotion/photo1.jpg', 'Images/Chokers/MidnightDevotion/photo2.jpg', 'Images/Chokers/MidnightDevotion/photo3.jpg','Images/Chokers/MidnightDevotion/photo4.jpg']
    },
        {
        id: 7,
        name: 'Pierced Heart Choker',
        category: 'chokers',
        price: 15,
        stock: 3, // ← OUT OF STOCK EXAMPLE!
        description: 'Pierced Heart, a love that bleeds, but never breaks The chain is made with a technique called chainmail and its made from Stainless Steel, the charm in the middle is made from Zinic Alloy.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Chokers/PiercedHeart/photo1.jpg', 'Images/Chokers/PiercedHeart/photo2.jpg', 'Images/Chokers/PiercedHeart/photo3.jpg']
    },
            {
        id: 22,
        name: 'Nocturne Wings Earrings',
        category: 'earrings',
        price: 7,
        stock: 6, // ← OUT OF STOCK EXAMPLE!
        description: 'Nocturne Wings, born to rule the night. The hooks are made by Stainless Steel and the charms are made by Zinic Alloy.',
        images: ['Images/Earrings/NocturneWings.jpg']
    },
            {
        id: 23,
        name: 'White Roses Earrings',
        category: 'earrings',
        price: 6,
        stock: 7, // ← OUT OF STOCK EXAMPLE!
        description: 'White Roses, a knight’s vow in bloom. The hooks are made by Stainless Steel and the charms are made by Zinic Alloy.',
        images: ['Images/Earrings/WhiteRoses.jpg']
    },
            {
        id: 24,
        name: 'Little Moth Earrings',
        category: 'earrings',
        price: 6,
        stock: 7, // ← OUT OF STOCK EXAMPLE!
        description: 'Little Moth, quiet beauty of the night. The hooks are made by Stainless Steel and the charms are made by Zinic Alloy.',
        images: ['Images/Earrings/LittleMoth.jpg']
    },

     {
        id: 8,
        name: 'Plague Doctor Earrings',
        category: 'earrings',
        price: 7,
        stock: 10, // ← ADD STOCK HERE!
        description: 'These earrings are inspired from the Plague Era, the hooks are made by Stainless Steel and the charms are made by Zinic Alloy.',
        images: ['Images/Earrings/PlagueDoctorEarrings.jpg']
    },
        {
        id: 9,
        name: 'Obsidian Drop Earrings',
        category: 'earrings',
        price: 7,
        stock: 8, // ← ADD STOCK HERE!
        description: 'Obsidian Drop, elegance carved in shadow. Everything is made from Stainless Steel.',
        images: ['Images/Earrings/ObsidianDrop.jpg']
    },
            {
        id: 10,
        name: 'Chapel of Hearts Earrings',
        category: 'earrings',
        price: 6,
        stock: 12, // ← ADD STOCK HERE!
        description: 'Chapel of Hearts, a sacred kind of love. The hook is made by Stainless Steel and the heart charm from Zinic Alloy.',
        images: ['Images/Earrings/ChapelOfHearts.jpg']
    },

       {
        id: 11,
        name: 'Edgy Heart Earrings',
        category: 'earrings',
        price: 6,
        stock: 15, // ← ADD STOCK HERE!
        description: 'The hook is made by Stainless Steel and the charm is made from Zinic Alloy.',
        images: ['Images/Earrings/EdgyHeartEarrings.jpg']
    },

             {
        id: 12,
        name: 'Black Roses Earrings',
        category: 'earrings',
        price: 7,
        stock: 6, // ← ADD STOCK HERE!
        description: 'Black Roses, bloom in the shadows. The hook is made from Stainless Steel and the spike is made from Zinic Alloy.',
        images: ['Images/Earrings/BlackRoses.png']
    },
                 {
        id: 13,
        name: 'The Chained Star Choker',
        category: 'chokers',
        price: 15,
        stock: 7, // ← ADD STOCK HERE!
        description: 'Chained Star, light was never meant to be free. The chain is hand-wired and made from Stainless Steel, the charm in the middle is made from Zinic Alloy.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly.',
        images: ['Images/Chokers/ChainedStar/photo1.jpg','Images/Chokers/ChainedStar/photo2.jpg']
    },
    {
           id: 21,
        name: 'The Katana Necklace',
        category: 'necklaces',
        price: 15,
        stock: 7, // ← ADD STOCK HERE!
        description: 'The Katana Necklace, 静かなる刃. The chain is hand-wired and made from Stainless Steel, the charm in the middle is made from Zinic Alloy.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly.',
        images: ['Images/Necklaces/Katana/photo1.jpg','Images/Necklaces/Katana/photo2.jpg']
    },
                 {
        id: 14,
        name: 'Bloodbound Cross Earrings',
        category: 'earrings',
        price: 7,
        stock: 9, // ← ADD STOCK HERE!
        description: 'Bloodbound Cross, a faith that bleeds. The hook is made from Stainless Steel and the cross is made from Zinic Alloy.',
        images: ['Images/Earrings/BloodBoundCross.jpg']
    },

                     {
        id: 15,
        name: 'Scarlet Rite Earrings',
        category: 'earrings',
        price: 7,
        stock: 11, // ← ADD STOCK HERE!
        description: 'Scarlet Rite, a ritual sealed in red. The hook is made from Stainless Steel and the cross is made from Zinic Alloy.',
        images: ['Images/Earrings/ScarletRite.jpg']
    },
    // Earrings

    {
        id: 16,
        name: 'The Vampire Heart Necklace/Choker',
        category: 'necklaces',
        price: 13,
        stock: 10,
        description: 'Vampire Heart, a heartbeat after midnight. The chain is hand-wired and made from Stainless Steel, the charm in the middle is made from Zinic Alloy.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. It can be either a choker or a necklace ',
        images: ['Images/Necklaces/VampireHeart/photo1.png']
    },
     {
        id: 17,
        name: 'Red Starry Heart Choker',
        category: 'chokers',
        price: 13,
        stock: 11,
        description: 'Red Starry Heart, a desire written in red. This necklace features a hand-wired chain crafted from stainless steel, with bead-connecting rings made of zinc alloy. The charm is also made from zinc alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Chokers/RedStarryHeart/photo1.jpg','Images/Chokers/RedStarryHeart/photo2.jpg']
    },

        {
        id: 25,
        name: 'Crimson Devotion Earrings',
        category: 'earrings',
        price: 7,
        stock: 10,
        description: 'Crimson Devotion...Love that bleeds, faith that endures.The roses I have are WHITE, not silver like the picture !!This necklace features a hand-wired chain crafted from stainless steel, with bead-connecting rings made of zinc alloy. The charm is also made from zinc alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Earrings/CrimsonDevotion.jpg']
    },
         {
        id: 18,
        name: 'The Moth Necklace',
        category: 'necklaces',
        price: 13,
        stock: 10,
        description: 'The Moth, drawn to the light, destined for the dark. This necklace features a hand-wired chain crafted from stainless steel, with bead-connecting rings made of zinc alloy. The charm is also made from zinc alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Necklaces/Moth/photo1.jpg','Images/Necklaces/Moth/photo2.jpg']
    },
             {
        id: 19,
        name: 'The Moth Earrings',
        category: 'earrings',
        price: 7,
        stock: 10,
        description: 'The Moth, drawn to the light, destined for the dark. This necklace features a hand-wired chain crafted from stainless steel, with bead-connecting rings made of zinc alloy. The charm is also made from zinc alloy. If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly. ',
        images: ['Images/Earrings/Moth.jpg']
    },
        {
        id: 20,
        name: 'Bat Earrings',
        category: 'earrings',
        price: 8,
        stock: 11,
        description: 'Write me in the description if you want the Black or Red pair !! Only 1 pair included. The hook is made by Stainless Steel and the charm is made by Zinic Alloy.',
        images: ['Images/Earrings/BatEarrings.jpg']
    },
            {
        id: 26,
        name: 'Starry Love Earrings',
        category: 'earrings',
        price: 6,
        stock: 10,
        description: 'The hook is made by Stainless Steel and the charm is made by Zinic Alloy.',
        images: ['Images/Earrings/StarryLove.jpg']
    },
                {
        id: 27,
        name: 'The Swan',
        category: 'chokers',
        price: 20,
        stock: 1,
        description: 'Inspired by the swan, made to shine on you. Everything is made by stainless steel!.If you wish, you may include your preferred necklace length in the description so it can be made to fit you perfectly.',
        images: ['Images/Chokers/Swan/photo1.jpg','Images/Chokers/Swan/photo2.jpg','Images/Chokers/Swan/photo3.jpg','Images/Chokers/Swan/photo4.jpg','Images/Chokers/Swan/photo5.jpg','Images/Chokers/Swan/photo6.jpg']
    },
                    {
        id: 28,
        name: 'Lotus Earrings',
        category: 'earrings',
        price: 6,
        stock: 7,
        description: 'Bloom with grace. The hook is made with Stainless Steel, the charm is made by Zinic Alloy.',
        images: ['Images/Earrings/LotusEarrings.jpg']
    },
                        {
        id: 29,
        name: 'Lotus Necklace',
        category: 'necklaces',
        price: 15,
        stock: 6,
        description: 'Bloom with grace. The chain is hand-wired and made with Stainless Steel, the charm is made by Zinic Alloy.',
        images: ['Images/necklaces/Lotus/photo1.jpg']
    },
    
];

// Payment info - YOU NEED TO REPLACE THESE WITH YOUR ACTUAL LINKS
const paymentInfo = {
    paypal: 'https://www.paypal.me/Floxify', // Replace with your actual PayPal.me link
    revolut: 'https://revolut.me/florentiadiam', // Replace with your actual Revolut.me link
    iban: 'Alpha Bank- GR4701401170117002310028721' // Replace with your actual IBAN
};

// Render products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Add out-of-stock class if needed
    if (product.stock === 0) {
        card.classList.add('out-of-stock');
    }
    
    card.onclick = () => openProductModal(product);
    
    const mainImage = product.images && product.images[0] ? product.images[0] : '';
    
    // Stock badge HTML - ONLY show if OUT OF STOCK
    let stockBadge = '';
    if (product.stock === 0) {
        stockBadge = '<div class="stock-badge out-of-stock-badge">Out of Stock</div>';
    }
    // Don't show "available" or "low stock" badges on cards
    
    card.innerHTML = `
        <div class="product-image">
            ${mainImage 
                ? `<img src="${mainImage}" alt="${product.name}">`
                : '<div class="placeholder-icon">✦</div>'
            }
            ${stockBadge}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
       <div class="product-price">${product.price}€</div>

${product.stock > 0 
    ? `<button class="buy-button" onclick="event.stopPropagation(); addToCartFromModal(${product.id})">
         Add to Cart 🛒
       </button>`
    : `<button class="buy-button disabled" disabled>
         Out of Stock 🖤
       </button>`
}

<button class="buy-button">View Details</button>
        </div>
    `;
    
    return card;
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    // Clear previous modal content first
    modalBody.innerHTML = '';
    
    // Reset Box Now widget config
    if (window._bn_map_widget_config) {
        delete window._bn_map_widget_config;
    }
    
    // Lock body scroll AND make modal scrollable
    // SAVE scroll position
    savedScrollY = window.scrollY;

    // Lock scroll without jump
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
    
    // Calculate total with Box Now shipping (δωρεάν για Box Now)
   const shipping = BOXNOW_SHIPPING;  // 3€
    const total = product.price + shipping;
    // Filter out empty images
    const validImages = product.images.filter(img => img && img.trim() !== '');
    const hasImages = validImages.length > 0;
    
    // Create carousel HTML
    let carouselHTML = '';
    if (hasImages) {
        carouselHTML = `
            <div class="image-carousel">
                <div class="carousel-main" id="carouselMain">
                    ${validImages.map((img, index) => `
                        <img src="${img}" 
                             alt="${product.name} - Image ${index + 1}" 
                             class="carousel-image ${index === 0 ? 'active' : ''}"
                             onclick="openFullscreen('${img}', '${product.name}')"
                             data-index="${index}">
                    `).join('')}
                </div>
                ${validImages.length > 1 ? `
                    <button class="carousel-btn prev" onclick="changeCarouselImage(-1, event)">‹</button>
                    <button class="carousel-btn next" onclick="changeCarouselImage(1, event)">›</button>
                    <div class="carousel-indicators">
                        ${validImages.map((_, index) => `
                            <span class="indicator ${index === 0 ? 'active' : ''}" 
                                  onclick="goToCarouselImage(${index}, event)"></span>
                        `).join('')}
                    </div>
                ` : ''}
                <button class="fullscreen-btn" onclick="openFullscreen('${validImages[0]}', '${product.name}')">
                    ⛶ Fullscreen
                </button>
            </div>
        `;
    } else {
        carouselHTML = `
            <div class="image-carousel">
                <div class="carousel-main">
                    <div class="placeholder-icon">✦</div>
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image-section">
                ${carouselHTML}
            </div>
            <div class="modal-details">
                <div class="product-category">${product.category}</div>
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                
                <!-- Stock Display -->
                ${product.stock === 0 
                    ? '<div class="stock-info out-of-stock">❌ Out of Stock</div>'
                    : product.stock <= 2
                    ? `<div class="stock-info low-stock">⚠️ Only ${product.stock} left in stock!</div>`
                    : `<div class="stock-info in-stock">✅ ${product.stock} available</div>`
                }
                
                <div class="product-price">${product.price}€</div>
               <p style="color: var(--accent-purple-light); margin-bottom: 1rem; font-weight: 600;">
                📦 Μεταφορικά Box Now: +${shipping}€
                </p>
                
${product.stock > 0 
    ? `<button class="submit-order-btn" onclick="addToCartFromModal(${product.id})">
         Προσθήκη στο καλάθι 🛒
       </button>`
    : `<button class="submit-order-btn disabled" disabled style="opacity: 0.5; cursor: not-allowed;">
         Out of Stock 🖤
       </button>`
}

<p style="color: var(--text-secondary); margin-top: 0.8rem; font-size: 0.95rem;">
  Η πληρωμή ολοκληρώνεται από το καλάθι. 
</p>
            </div>
        </div>
    `;
  
  // Initialize current carousel index BEFORE opening modal
  window.currentCarouselIndex = 0;
  
  // NOW open the modal
  modal.classList.add('is-open');
  modal.style.display = 'block';
  
  // Box Now script is already loaded at page start - no need to load again
  // Button uses onclick="openBoxNowPicker(event)" in HTML
}

// Carousel navigation
let currentCarouselIndex = 0;

function changeCarouselImage(direction, event) {
    event.stopPropagation();
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    
    if (images.length === 0) return;
    
    images[currentCarouselIndex].classList.remove('active');
    indicators[currentCarouselIndex].classList.remove('active');
    
    currentCarouselIndex = (currentCarouselIndex + direction + images.length) % images.length;
    
    images[currentCarouselIndex].classList.add('active');
    indicators[currentCarouselIndex].classList.add('active');
}

function goToCarouselImage(index, event) {
    event.stopPropagation();
    const images = document.querySelectorAll('.carousel-image');
    const indicators = document.querySelectorAll('.indicator');
    
    if (images.length === 0) return;
    
    images[currentCarouselIndex].classList.remove('active');
    indicators[currentCarouselIndex].classList.remove('active');
    
    currentCarouselIndex = index;
    
    images[currentCarouselIndex].classList.add('active');
    indicators[currentCarouselIndex].classList.add('active');
}

// Fullscreen image viewer with carousel
function openFullscreen(imageUrl, productName) {
    // Get all images from the current product
    const allImages = Array.from(document.querySelectorAll('.carousel-image')).map(img => ({
        src: img.src,
        alt: img.alt
    }));
    
    // Find the index of the clicked image
    const currentIndex = allImages.findIndex(img => img.src === imageUrl);
    window.fullscreenCurrentIndex = currentIndex >= 0 ? currentIndex : 0;
    
    const fullscreenViewer = document.createElement('div');
    fullscreenViewer.className = 'fullscreen-viewer';
    fullscreenViewer.id = 'fullscreenViewer';
    
    // Create carousel HTML for fullscreen
    const carouselHTML = allImages.map((img, index) => `
        <img src="${img.src}" 
             alt="${img.alt}" 
             class="fullscreen-image ${index === window.fullscreenCurrentIndex ? 'active' : ''}"
             data-index="${index}">
    `).join('');
    
    fullscreenViewer.innerHTML = `
        <div class="fullscreen-content">
            <button class="fullscreen-close" onclick="closeFullscreen()">✕</button>
            <div class="fullscreen-carousel">
                ${carouselHTML}
            </div>
            ${allImages.length > 1 ? `
                <button class="fullscreen-nav-btn prev" onclick="changeFullscreenImage(-1)">‹</button>
                <button class="fullscreen-nav-btn next" onclick="changeFullscreenImage(1)">›</button>
                <div class="fullscreen-indicators">
                    ${allImages.map((_, index) => `
                        <span class="fullscreen-indicator ${index === window.fullscreenCurrentIndex ? 'active' : ''}" 
                              onclick="goToFullscreenImage(${index})"></span>
                    `).join('')}
                </div>
                <div class="fullscreen-counter">${window.fullscreenCurrentIndex + 1} / ${allImages.length}</div>
            ` : ''}
            <p class="fullscreen-caption">${productName}</p>
        </div>
    `;
    
    document.body.appendChild(fullscreenViewer);
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    // Close on background click
    fullscreenViewer.addEventListener('click', (e) => {
        if (e.target === fullscreenViewer || e.target.classList.contains('fullscreen-carousel')) {
            closeFullscreen();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleFullscreenKeyboard);
}

function changeFullscreenImage(direction) {
    const images = document.querySelectorAll('.fullscreen-image');
    const indicators = document.querySelectorAll('.fullscreen-indicator');
    const counter = document.querySelector('.fullscreen-counter');
    
    if (images.length === 0) return;
    
    images[window.fullscreenCurrentIndex].classList.remove('active');
    if (indicators.length > 0) {
        indicators[window.fullscreenCurrentIndex].classList.remove('active');
    }
    
    window.fullscreenCurrentIndex = (window.fullscreenCurrentIndex + direction + images.length) % images.length;
    
    images[window.fullscreenCurrentIndex].classList.add('active');
    if (indicators.length > 0) {
        indicators[window.fullscreenCurrentIndex].classList.add('active');
    }
    if (counter) {
        counter.textContent = `${window.fullscreenCurrentIndex + 1} / ${images.length}`;
    }
}

function goToFullscreenImage(index) {
    const images = document.querySelectorAll('.fullscreen-image');
    const indicators = document.querySelectorAll('.fullscreen-indicator');
    const counter = document.querySelector('.fullscreen-counter');
    
    if (images.length === 0) return;
    
    images[window.fullscreenCurrentIndex].classList.remove('active');
    indicators[window.fullscreenCurrentIndex].classList.remove('active');
    
    window.fullscreenCurrentIndex = index;
    
    images[window.fullscreenCurrentIndex].classList.add('active');
    indicators[window.fullscreenCurrentIndex].classList.add('active');
    if (counter) {
        counter.textContent = `${window.fullscreenCurrentIndex + 1} / ${images.length}`;
    }
}

function closeFullscreen() {
    const viewer = document.querySelector('.fullscreen-viewer');
    if (viewer) {
        viewer.remove();
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleFullscreenKeyboard);
    }
}

function handleFullscreenKeyboard(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    } else if (e.key === 'ArrowLeft') {
        changeFullscreenImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeFullscreenImage(1);
    }
}

// Initialize fullscreen index
window.fullscreenCurrentIndex = 0;

// Handle order form submission
function handleOrderSubmit(event, productId, productName, total) {
    event.preventDefault();
    
    // Get form data
    const orderData = {
        product: productName,
        productId: productId,
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        boxNow: document.getElementById('boxNowStation').value,
        notes: document.getElementById('orderNotes').value,
        total: total,
        timestamp: new Date().toLocaleString('el-GR')
    };
    
    // Store order data temporarily
    window.currentOrder = orderData;
    
    // Send email to yourself with order details (using EmailJS or similar)
    sendOrderEmail(orderData);
    
    // Hide form, show payment options
    document.querySelector('.order-form-section').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'block';
    
    // Show success message
    showOrderConfirmation(orderData);
    
    return false;
}

// Send order email (you'll need to set up EmailJS or similar service)
function sendOrderEmail(orderData) {
    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = 'service_7a4ur3s';
    const EMAILJS_OWNER_TEMPLATE = 'template_8zlfh1s';
    const EMAILJS_CUSTOMER_TEMPLATE = 'template_lxrchci';
    const EMAILJS_PUBLIC_KEY = 'Ukxnw0aPy-DTgUeOL';
    const OWNER_EMAIL = 'florentiad@gmail.com';
    
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        
        // 1. SEND EMAIL TO YOU (Owner) - Παραγγελία notification
        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_OWNER_TEMPLATE,
            {
                to_email: OWNER_EMAIL,  // ← Σε ΕΣΕΝΑ
                product: orderData.product,
                total: orderData.total,
                name: orderData.name,
                email: orderData.email,
                phone: orderData.phone,
                boxNow: orderData.boxNow,
                notes: orderData.notes || 'Κανένα',
                timestamp: orderData.timestamp
            },
            EMAILJS_PUBLIC_KEY
        ).then(
            function(response) {
                console.log('✅ Owner notification sent!', response);
            },
            function(error) {
                console.log('❌ Owner email failed:', error);
            }
        );
        
        // 2. SEND EMAIL TO CUSTOMER - Confirmation
        emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_CUSTOMER_TEMPLATE,
            {
                to_email: orderData.email,  // ← Στον ΠΕΛΑΤΗ
                product: orderData.product,
                total: orderData.total,
                name: orderData.name,
                email: orderData.email,
                phone: orderData.phone,
                boxNow: orderData.boxNow,
                notes: orderData.notes || 'Κανένα',
                timestamp: orderData.timestamp
            },
            EMAILJS_PUBLIC_KEY
        ).then(
            function(response) {
                console.log('✅ Customer confirmation sent!', response);
            },
            function(error) {
                console.log('❌ Customer email failed:', error);
                // Don't alert customer - they still got the order through
            }
        );
        
    } else {
        console.log('⚠️ EmailJS not loaded - order saved to localStorage');
    }
    
    // Store in localStorage as backup
    const orders = JSON.parse(localStorage.getItem('floxifyOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('floxifyOrders', JSON.stringify(orders));
    
    console.log('📦 Order saved:', orderData);
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    const confirmation = document.createElement('div');
    confirmation.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-purple);
        color: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
        z-index: 3000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;
    
    confirmation.innerHTML = `
        <h4 style="margin-bottom: 0.5rem; font-family: 'Cinzel', serif;">✅ Το προϊόν προστέθηκε στο καλάθι!</h4>
        <p style="font-size: 0.9rem; opacity: 0.9;">
            Επέλεξε τρόπο πληρωμής για να ολοκληρώσεις την παραγγελία!
        </p>
    `;
    
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        confirmation.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => confirmation.remove(), 500);
    }, 4000);
}

// Show bank details
function showBankDetails() {
    const bankDetails = document.getElementById('bankDetails');
    bankDetails.style.display = 'block';
    bankDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    
    function closeModal() {
        modal.classList.remove('is-open');
        
        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        
        // Restore scroll position
        window.scrollTo(0, savedScrollY);
        
        // Hide modal
        modal.style.display = 'none';
        
        // Clear modal content to prevent issues
        setTimeout(() => {
            const modalBody = document.getElementById('modalBody');
            if (modalBody) modalBody.innerHTML = '';
        }, 300); // Wait for animation
    }
    
    closeBtn.onclick = closeModal;
    
    window.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
});

// Category filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter products
            const category = btn.dataset.category;
            renderProducts(category);
        });
    });
    
    // Initial render
    renderProducts();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return; // Safety check
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values using name attributes
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const timestamp = new Date().toLocaleString('el-GR');
        
        console.log('Contact form data:', { name, email, message }); // Debug
        
        // Use the same service - NO NEW TEMPLATE NEEDED!
        const EMAILJS_SERVICE_ID = 'service_7a4ur3s';
        const EMAILJS_OWNER_TEMPLATE = 'template_8zlfh1s'; // Reuse owner template
        const EMAILJS_PUBLIC_KEY = 'Ukxnw0aPy-DTgUeOL';
        
        // Send email via EmailJS
        if (typeof emailjs !== 'undefined') {
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Αποστολή...';
            submitBtn.disabled = true;
            
            emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_OWNER_TEMPLATE,
                {
                    // Use order template fields
                    product: `📬 Contact Form - ${name}`,
                    name: name,
                    email: email,
                    phone: '-',
                    boxNow: '-',
                    notes: message,
                    total: '-',
                    timestamp: timestamp
                },
                EMAILJS_PUBLIC_KEY
            ).then(
                function(response) {
                    console.log('✅ Contact form sent!', response);
                    alert('Ευχαριστώ για το μήνυμά σου! Θα επικοινωνήσω σύντομα! 🖤');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                },
                function(error) {
                    console.log('❌ Contact form failed:', error);
                    alert('Ωχ! Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε μου email απευθείας στο florentiad@gmail.com');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            );
        } else {
            console.log('⚠️ EmailJS not loaded');
            alert('Ευχαριστώ για το μήνυμά σου! Θα επικοινωνήσω σύντομα! 🖤');
            contactForm.reset();
        }
    });
});

// Scroll animations (optional enhancement)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// =========================
// Cart (localStorage) + Box Now shipping
// =========================
const BOXNOW_SHIPPING = 3;

function getCart() {
  return JSON.parse(localStorage.getItem('floxifyCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('floxifyCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) el.textContent = count;
}

function addToCart(product, qty = 1) {
  // Check stock availability
  if (product.stock === 0) {
    alert('Sorry! This item is out of stock 🖤');
    return false;
  }
  
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  
  // Check if adding would exceed stock
  const currentQtyInCart = existing ? existing.qty : 0;
  if (currentQtyInCart + qty > product.stock) {
    alert(`Only ${product.stock} available! You already have ${currentQtyInCart} in your cart.`);
    return false;
  }

  if (existing) existing.qty += qty;
  else cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: (product.images && product.images[0]) ? product.images[0] : '',
    qty: qty
  });

  saveCart(cart);
  return true;
}

function changeCartQty(productId, delta) {
  let cart = getCart();
  const product = products.find(p => p.id === productId);
  
  // Check stock when increasing quantity
  if (delta > 0 && product) {
    const cartItem = cart.find(i => i.id === productId);
    if (cartItem && cartItem.qty + delta > product.stock) {
      alert(`Only ${product.stock} available in stock!`);
      return;
    }
  }
  
  cart = cart.map(i => i.id === productId ? { ...i, qty: i.qty + delta } : i)
             .filter(i => i.qty > 0);
  saveCart(cart);
  renderCart();
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  renderCart();
}

function calcCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = cart.length > 0 ? BOXNOW_SHIPPING : 0;
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
}

function openCart() {
  renderCart();
  const modal = document.getElementById('cartModal');
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  modal.style.display = 'block';
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

function renderCart() {
  const cart = getCart();
  const itemsEl = document.getElementById('cartItems');
  const subEl = document.getElementById('cartSubtotal');
  const shipEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p style="color: var(--text-secondary);">Το καλάθι είναι άδειο 🖤</p>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        ${item.image ? `<img class="cart-thumb" src="${item.image}" alt="${item.name}">`
                     : `<div class="cart-thumb" style="display:flex;align-items:center;justify-content:center;">✦</div>`}
        <div>
          <h4>${item.name}</h4>
          <div class="meta">${item.price}€ / τεμ</div>
        </div>
        <div style="text-align:right;">
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
          </div>
          <div class="meta" style="margin-top:0.35rem;">
            ${(item.price * item.qty).toFixed(2).replace('.00','')}€
          </div>
        </div>
      </div>
    `).join('');
  }

  const { subtotal, shipping, total } = calcCartTotals();
  if (subEl) subEl.textContent = `${subtotal}€`;
  if (shipEl) shipEl.textContent = cart.length > 0 ? `${shipping}€` : `0€`;
  if (totalEl) totalEl.textContent = `${total}€`;
}

// Hook up cart button + close
// Hook up cart button + close
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const cartBtn = document.getElementById('cartBtn');
  const closeCartBtn = document.getElementById('closeCart');
  const cartModal = document.getElementById('cartModal');
  const checkoutBtn = document.getElementById('checkoutBtn'); // <-- ΤΟ ΕΙΧΕΣ ΧΑΣΕΙ

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) closeCart();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartModal && cartModal.style.display === 'block') closeCart();
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      openCartCheckout();
    });
  }
});

// =========================
// Cart -> Checkout using SAME form
// =========================

function addToCartFromModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Check stock before adding
  if (product.stock === 0) {
    alert('Sorry! This item is out of stock 🖤');
    return;
  }

  const success = addToCart(product, 1);
  
  if (success) {
    showOrderConfirmation({
      boxNow: 'Το προϊόν προστέθηκε στο καλάθι 🛒'
    });
  }
}

function openCartCheckout() {
  const cart = getCart();
  if (cart.length === 0) {
    alert('Το καλάθι είναι άδειο 🖤');
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = BOXNOW_SHIPPING;
  const total = subtotal + shipping;

  closeCart();

  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');

  // lock scroll (χωρίς fixed για να μην σε πετάει πάνω)
  document.body.style.overflow = 'hidden';

  const cartDescription = cart
    .map(i => `${i.name} x${i.qty} (${i.price}€)`)
    .join('<br>');

  modalBody.innerHTML = `
    <div class="modal-details">
      <h2 style="font-family:'Cinzel',serif;">Παραγγελία Καλαθιού</h2>

      <div style="
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        margin: 1rem 0;
        color: var(--text-secondary);
      ">
        ${cartDescription}
      </div>

      <p><strong>Υποσύνολο:</strong> ${subtotal}€</p>
      <p><strong>Μεταφορικά (Box Now):</strong> +${shipping}€</p>
      <p style="font-size:1.3rem; margin:1rem 0;">
        <strong>Σύνολο:</strong> ${total}€
      </p>

      <!-- Order Form (Cart) -->
      <div class="order-form-section" id="cartFormSection">
        <h3 style="font-family:'Cinzel',serif; font-size:1.5rem; margin-bottom:1rem; color: var(--accent-purple-light);">
          Στοιχεία Παραγγελίας
        </h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">
          ⚠️ Αποστέλλω <strong>μόνο με Box Now</strong> (+${shipping}€)
        </p>

        <form id="cartOrderForm">
          <div class="form-group">
            <label>Ονοματεπώνυμο *</label>
            <input type="text" id="customerName" required placeholder="π.χ. Μαρία Παπαδοπούλου">
          </div>

          <div class="form-group">
            <label>Email *</label>
            <input type="email" id="customerEmail" required placeholder="email@example.com">
          </div>

          <div class="form-group">
            <label>Κινητό *</label>
            <input type="tel" id="customerPhone" required placeholder="69xxxxxxxx" pattern="[0-9]{10}">
          </div>

 <div class="form-group">
  <label>Box Now Locker *</label>

  <!-- εμφανές πεδίο (readable) -->
<input
  type="text"
  id="boxNowStation"
  required
  placeholder="π.χ. BOX NOW Σύνταγμα, Μητροπόλεως 1, 10557"
  autocomplete="off"
  style="position:relative; z-index:9999; pointer-events:auto !important; cursor:text !important;"
>

  <!-- κρυφό, για “επαλήθευση” -->
  <input type="hidden" id="boxNowLockerId" />

<button
  type="button"
  class="submit-order-btn"
  id="openBoxNowWidgetBtn"
  onclick="openBoxNowPicker(event)"
  style="margin-top:0.8rem; position:relative; z-index:9999; pointer-events:auto;"
>
  🗺️ Βρες το κοντινότερο Box Now
</button>

  <small style="color: var(--text-secondary); font-size: 0.85rem; display:block; margin-top:0.6rem;">
    * Γράψε το Box Now locker χειροκίνητα ή πάτα το κουμπί για βοήθεια.
  </small>

  <!-- εδώ θα μπει ο χάρτης (iframe mode) -->
<div id="boxnowmap" style="margin-top:1rem; display:none; height: 450px; width: 100%;"></div></div>

          <div class="form-group">
            <label>Σχόλια παραγγελίας (προαιρετικό)</label>
            <textarea id="orderNotes" rows="3" placeholder="Οποιαδήποτε ειδική παρατήρηση..."></textarea>
          </div>

          <button type="submit" class="submit-order-btn">
            Συνέχεια στην Πληρωμή 💳
          </button>
        </form>
      </div>

      <!-- Payment section (Cart) -->
      <div id="paymentSection" style="display:none;">
        <div class="payment-options">
          <h3>Επίλεξε τρόπο πληρωμής:</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.95rem;">
            <strong>Σύνολο:</strong> ${total}€ (με μεταφορικά Box Now +${shipping}€)
          </p>

          <div class="payment-buttons">
            <a href="${paymentInfo.paypal}/${total}" target="_blank" class="payment-btn">
              💳 Πληρωμή με PayPal (${total}€)
            </a>

            <a href="${paymentInfo.revolut}/${total}" target="_blank" class="payment-btn">
              💜 Πληρωμή με Revolut (${total}€)
            </a>

            <button type="button" class="payment-btn" id="bankBtn">
              🏦 Τραπεζική κατάθεση / IRIS
            </button>
          </div>

          <!-- IRIS / Bank details -->
          <div id="bankDetails" style="display:none; margin-top: 1.2rem; padding: 1.2rem; background: var(--primary-dark); border-radius: 8px; border: 1px solid var(--accent-purple);">
            <h4 style="color: var(--accent-purple-light); margin-bottom: 1rem;">Στοιχεία Πληρωμής (IRIS/Κατάθεση):</h4>

            <p style="font-size: 1.05rem; margin-bottom: 0.5rem;"><strong>IBAN/IRIS:</strong> ${paymentInfo.iban}</p>
            <p style="font-size: 1.05rem; margin-bottom: 0.5rem;"><strong>Ποσό:</strong> ${total}€</p>

            <hr style="border:0; border-top:1px solid var(--border-color); margin: 1rem 0;">

            <label style="display:block; margin-bottom:0.4rem;">Κωδικός συναλλαγής (προαιρετικό)</label>
            <input id="irisRef" type="text" placeholder="π.χ. RF123..." style="
              width:100%;
              padding:0.9rem;
              background: var(--primary-dark);
              border: 2px solid var(--border-color);
              color: var(--text-primary);
              font-family: 'Cormorant Garamond', serif;
              font-size: 1rem;
              border-radius: 8px;
            ">

            <button type="button" class="submit-order-btn" id="confirmIrisBtn" style="margin-top:1rem;">
              ✅ Ολοκλήρωσα την πληρωμή μου (IRIS)
            </button>

            <p style="color: var(--text-secondary); font-size:0.9rem; margin-top:0.6rem;">
              * Με το κουμπί αυτό θα σταλεί email επιβεβαίωσης σε εμένα για να ελέγξω την πληρωμή.
            </p>
          </div>

          <p style="color: var(--accent-purple-light); margin-top: 1.5rem; font-size: 0.95rem; text-align: center; background: rgba(139, 92, 246, 0.1); padding: 1rem; border-radius: 8px;">
            ✅ Μετά την πληρωμή θα στείλω το δέμα στο Box Now που επέλεξες!<br>
            Θα λάβεις SMS με τον κωδικό παραλαβής. 🖤
          </p>
        </div>
      </div>
    </div>
    
  `;
  

  // OPEN modal σωστά
  modal.classList.add('is-open');
  modal.style.display = 'block';
  
  // Ensure Box Now input is editable
  setTimeout(() => {
    const boxNowInput = document.getElementById('boxNowStation');
    if (boxNowInput) {
      boxNowInput.removeAttribute('readonly');
      boxNowInput.removeAttribute('disabled');
      boxNowInput.style.pointerEvents = 'auto';
      boxNowInput.style.cursor = 'text';
      console.log('✅ Box Now input is now editable');
    }
  }, 100);

  // 1) Submit form -> δείξε payments
  const cartOrderForm = document.getElementById('cartOrderForm');
  const formSection = document.getElementById('cartFormSection');
  const paymentSection = document.getElementById('paymentSection');

if (cartOrderForm) {
  cartOrderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // ✅ Check if Box Now locker is filled (either from widget OR manual input)
    const stationInput = document.getElementById('boxNowStation')?.value?.trim();
    
    if (!stationInput) {
      alert('📍 Παρακαλώ συμπλήρωσε το Box Now locker!\n\nΠάτα το κουμπί "Βρες το κοντινότερο Box Now" για βοήθεια.');
      document.getElementById('boxNowStation')?.focus();
      return;
    }
    
    // Validate format (should contain at least some text)
    if (stationInput.length < 10) {
      alert('⚠️ Το Box Now locker φαίνεται ελλιπές.\n\nΠαράδειγμα σωστής μορφής:\nBOX NOW Σύνταγμα, Μητροπόλεως 1, 10557');
      document.getElementById('boxNowStation')?.focus();
      return;
    }

    // αν όλα ΟΚ → πάμε πληρωμή
    if (formSection) formSection.style.display = 'none';
    if (paymentSection) paymentSection.style.display = 'block';
  });
}
function loadBoxNowWidgetScriptOnce() {
  return new Promise((resolve, reject) => {
    // αν υπάρχει ήδη, οκ
    if (document.getElementById('boxnowWidgetScript')) return resolve();

    const s = document.createElement('script');
    s.id = 'boxnowWidgetScript';
    s.src = 'https://widget-cdn.boxnow.bg/map-widget/client/v5.js';
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('BoxNow widget failed to load'));
    document.head.appendChild(s);
  });
}

  // 2) Bank button -> δείξε bank details
  const bankBtn = document.getElementById('bankBtn');
  const bankDetails = document.getElementById('bankDetails');
  if (bankBtn && bankDetails) {
    bankBtn.addEventListener('click', () => {
      bankDetails.style.display = 'block';
      bankDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // 3) IRIS confirm -> στέλνει email + αδειάζει καλάθι ΜΟΝΟ εδώ
  const confirmBtn = document.getElementById('confirmIrisBtn');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const irisRef = (document.getElementById('irisRef')?.value || '').trim();

      // Πάρε στοιχεία πελάτη από τη φόρμα
      const name = document.getElementById('customerName')?.value || '';
      const email = document.getElementById('customerEmail')?.value || '';
      const phone = document.getElementById('customerPhone')?.value || '';
      const boxNow = document.getElementById('boxNowStation')?.value || '';
      const notes = document.getElementById('orderNotes')?.value || '';
      const timestamp = new Date().toLocaleString('el-GR');

      if (!name || !email || !phone || !boxNow) {
        alert('Συμπλήρωσε πρώτα τα στοιχεία παραγγελίας 🖤');
        return;
      }

      if (typeof emailjs === 'undefined') {
        alert('⚠️ Το EmailJS δεν φορτώθηκε. Δοκίμασε ξανά.');
        return;
      }

      confirmBtn.disabled = true;
      const oldText = confirmBtn.textContent;
      confirmBtn.textContent = 'Αποστολή...';

      const EMAILJS_SERVICE_ID = 'service_7a4ur3s';
      const EMAILJS_OWNER_TEMPLATE = 'template_8zlfh1s';
      const EMAILJS_PUBLIC_KEY = 'Ukxnw0aPy-DTgUeOL';
      const OWNER_EMAIL = 'florentiad@gmail.com';

      const itemsText = cart.map(i => `${i.name} x${i.qty} (${i.price}€)`).join(' | ');

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TEMPLATE,
        {
          to_email: OWNER_EMAIL,
          product: `🧾 IRIS/CART: ${itemsText}`,
          total: `${total}€`,
          name: name,
          email: email,
          phone: phone,
          boxNow: boxNow,
          notes: `Payment: IRIS/Κατάθεση\nIRIS Ref: ${irisRef || '-'}\nNotes: ${notes || '-'}`,
          timestamp: timestamp
        },
        EMAILJS_PUBLIC_KEY
      ).then(() => {
        // ✅ ΑΔΕΙΑΖΕΙ το καλάθι ΜΟΝΟ όταν πατηθεί αυτό (manual confirmation)
        saveCart([]);
        updateCartCount();

        alert('✅ Επιβεβαίωση εστάλη! Θα ελέγξω την πληρωμή και θα προχωρήσω την αποστολή 🖤');

        // κλείσιμο modal
        modal.classList.remove('is-open');
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }).catch(() => {
        alert('❌ Δεν στάλθηκε το email. Δοκίμασε ξανά.');
        confirmBtn.disabled = false;
        confirmBtn.textContent = oldText;
      });
    });
  }
  window.openBoxNowPicker = function (e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  console.log('🗺️ Opening Box Now picker...');

  const mapEl = document.getElementById('boxnowmap');
  if (!mapEl) {
    console.error('❌ boxnowmap element not found!');
    alert('Δεν βρέθηκε το Box Now map element. Παρακαλώ ανανεώστε τη σελίδα.');
    return;
  }

  // Show map container
  mapEl.style.display = 'block';
  mapEl.style.position = 'relative';
  mapEl.style.zIndex = '9999';
  mapEl.style.pointerEvents = 'auto';
  mapEl.style.minHeight = '500px';
  
  console.log('✅ Map container visible');

  // Configure Box Now widget
  window._bn_map_widget_config = {
    parentElement: "#boxnowmap",
    type: "iframe",
    gps: "yes",
    autoclose: "no",
    autoselect: "yes",
    afterSelect: function(selected) {
      console.log('🎯 Locker selected:', selected);
      
      const lockerId = selected.boxnowLockerId;
      const address = selected.boxnowLockerAddressLine1;
      const postal = selected.boxnowLockerPostalCode;
      const name = selected.name || selected.boxnowLockerName || "BOX NOW Locker";

      const stationInput = document.getElementById('boxNowStation');
      const lockerIdInput = document.getElementById('boxNowLockerId');

      if (stationInput) {
        stationInput.value = `${name} — ${address} (${postal})`;
        console.log('✅ Address filled:', stationInput.value);
      }
      if (lockerIdInput) {
        lockerIdInput.value = lockerId;
        console.log('✅ Locker ID saved:', lockerId);
      }

      // Hide map after selection
      setTimeout(() => {
        mapEl.style.display = 'none';
        console.log('✅ Map hidden after selection');
      }, 800);
    }
  };
  
  console.log('✅ Widget config set');

  // Try multiple initialization methods
  let initialized = false;
  
  // Method 1: Standard bnMapWidget.init()
  if (window.bnMapWidget && typeof window.bnMapWidget.init === 'function') {
    console.log('🚀 Method 1: Using bnMapWidget.init()');
    try {
      window.bnMapWidget.init();
      initialized = true;
      console.log('✅ Widget initialized!');
    } catch (err) {
      console.error('❌ Method 1 failed:', err);
    }
  }
  
  // Method 2: Try window.BnMapWidget (capital B)
  if (!initialized && window.BnMapWidget && typeof window.BnMapWidget.init === 'function') {
    console.log('🚀 Method 2: Using BnMapWidget.init()');
    try {
      window.BnMapWidget.init();
      initialized = true;
      console.log('✅ Widget initialized (Method 2)!');
    } catch (err) {
      console.error('❌ Method 2 failed:', err);
    }
  }
  
  // Method 3: Show helpful manual input guide (Box Now API requires partnership)
  if (!initialized) {
    console.log('ℹ️ Box Now widget requires API partnership - showing manual input guide');
    
    mapEl.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(109, 40, 217, 0.1)); border-radius: 15px; border: 2px solid var(--accent-purple);">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem; font-size: 1.5rem;">
            📍 Επιλογή Box Now Locker
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            Γράψε το Box Now locker που προτιμάς στο πεδίο παραπάνω
          </p>
        </div>
        
        <div style="background: var(--secondary-dark); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-purple-light); margin-bottom: 1rem; font-size: 1.1rem;">
            💡 Πώς να βρεις το κοντινότερο Box Now:
          </h4>
          <ol style="color: var(--text-primary); line-height: 1.8; margin-left: 1.2rem;">
            <li>Πήγαινε στο <a href="https://boxnow.gr/en/locker-finder" target="_blank" style="color: var(--accent-purple); text-decoration: underline; font-weight: 600;">boxnow.gr/en/locker-finder</a></li>
            <li>Βρες το πιο κοντινό σου locker</li>
            <li>Γράψε το όνομα και τη διεύθευση στο πεδίο παραπάνω</li>
          </ol>
        </div>
        
        <div style="background: rgba(139, 92, 246, 0.15); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--accent-purple); margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-purple-light); margin-bottom: 0.8rem;">
            📝 Παράδειγμα σωστής εισαγωγής:
          </h4>
          <p style="color: var(--text-primary); font-family: monospace; background: var(--secondary-dark); padding: 1rem; border-radius: 8px; margin: 0; font-size: 0.95rem;">
            BOX NOW Σύνταγμα, Μητροπόλεως 1, 10557
          </p>
        </div>
        
        <div style="text-align: center;">
          <button 
            onclick="document.getElementById('boxnowmap').style.display='none'; document.getElementById('boxNowStation').focus();"
            style="padding: 1rem 3rem; background: linear-gradient(135deg, var(--accent-purple), var(--accent-purple-dark)); color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 1.1rem; font-weight: 600; box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4); transition: transform 0.2s ease;"
            onmouseover="this.style.transform='translateY(-2px)'"
            onmouseout="this.style.transform='translateY(0)'"
          >
            ✅ Εντάξει, το κατάλαβα!
          </button>
        </div>
      </div>
    `;
    
    initialized = true;
  }
  
  // If nothing worked, show helpful manual input guide
  if (!initialized) {
    console.log('ℹ️ Showing manual Box Now input guide');
    
    mapEl.innerHTML = `
      <div style="padding: 2rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(109, 40, 217, 0.1)); border-radius: 15px; border: 2px solid var(--accent-purple);">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h3 style="color: var(--accent-purple); margin-bottom: 0.5rem; font-size: 1.5rem;">
            📍 Επιλογή Box Now Locker
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">
            Γράψε το Box Now locker που προτιμάς στο πεδίο παραπάνω
          </p>
        </div>
        
        <div style="background: var(--secondary-dark); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-purple-light); margin-bottom: 1rem; font-size: 1.1rem;">
            💡 Πώς να βρεις το κοντινότερο Box Now:
          </h4>
          <ol style="color: var(--text-primary); line-height: 1.8; margin-left: 1.2rem;">
            <li>Πήγαινε στο <a href="https://www.boxnow.gr/lockers" target="_blank" style="color: var(--accent-purple); text-decoration: underline; font-weight: 600;">www.boxnow.gr/lockers</a></li>
            <li>Βρες το πιο κοντινό σου locker</li>
            <li>Γράψε το όνομα και τη διεύθευση στο πεδίο παραπάνω</li>
          </ol>
        </div>
        
        <div style="background: rgba(139, 92, 246, 0.15); padding: 1.5rem; border-radius: 10px; border: 1px solid var(--accent-purple); margin-bottom: 1.5rem;">
          <h4 style="color: var(--accent-purple-light); margin-bottom: 0.8rem;">
            📝 Παράδειγμα σωστής εισαγωγής:
          </h4>
          <p style="color: var(--text-primary); font-family: monospace; background: var(--secondary-dark); padding: 1rem; border-radius: 8px; margin: 0; font-size: 0.95rem;">
            BOX NOW Σύνταγμα, Μητροπόλεως 1, 10557
          </p>
        </div>
        
        <div style="text-align: center;">
          <button 
            onclick="document.getElementById('boxnowmap').style.display='none'; document.getElementById('boxNowStation').focus();"
            style="padding: 1rem 3rem; background: linear-gradient(135deg, var(--accent-purple), var(--accent-purple-dark)); color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 1.1rem; font-weight: 600; box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4); transition: transform 0.2s ease;"
            onmouseover="this.style.transform='translateY(-2px)'"
            onmouseout="this.style.transform='translateY(0)'"
          >
            ✅ Εντάξει, το κατάλαβα!
          </button>
        </div>
      </div>
    `;
  }
  
  // Reset selection
  const station = document.getElementById('boxNowStation');
  const lockerId = document.getElementById('boxNowLockerId');
  if (station) station.value = '';
  if (lockerId) lockerId.value = '';
};
}