// Sample product data - you'll replace with your actual products and images

const products = [
    
    // Necklaces
    {
        id: 1,
        name: 'The Ankh Necklace',
        category: 'necklaces',
        price: 18,
        description: 'Inspired by egyptian mythology combined with rosemary-like aesthetic. The chain and the charm are made by stainless steel and they are anti-allergic..',
        images: ['Images/Necklaces/AnkhNecklace/photo1.jpg', 'Images/Necklaces/AnkhNecklace/photo2.jpg'] // Add up to 5 image URLs - main image first
    },
    {
        id: 2,
        name: 'Shadow Crucis Necklace',
        category: 'necklaces',
        price: 15,
        description: 'Α black cross born from the shadows,a symbol of silent strength, faith and dark elegance. The chain is hand-wired and is made by Stainless Steel, the charm is made from Zinic Alloy. Write me in the description if you want a custom length (The modification can be shorter but not longer, I mean I can make it like a choker)',
        images: ['Images/Necklaces/ShadowCrucis/photo1.jpg', 'Images/Necklaces/ShadowCrucis/photo2.jpg', 'Images/Necklaces/ShadowCrucis/photo3.jpg', 'Images/Necklaces/ShadowCrucis/photo4.jpg']
    },
    {
        id: 3,
        name: 'Crystal Pendant',
        category: 'necklaces',
        price: 30,
        description: 'Μωβ crystal pendant σε μαύρη αλυσίδα, handmade με αγάπη.',
        images: ['', '', '']
    },
    
    // Chokers
    {
        id: 4,
        name: 'Velvet Choker',
        category: 'chokers',
        price: 20,
        description: 'Βελούδινο choker με gothic charm, comfortable και stylish.',
        images: ['', '', '']
    },
    {
        id: 5,
        name: 'Spiked Choker',
        category: 'chokers',
        price: 22,
        description: 'Edgy choker με μικρά spikes, perfect για punk-goth look.',
        images: ['', '', '']
    },
    {
        id: 6,
        name: 'Lace Choker',
        category: 'chokers',
        price: 18,
        description: 'Λεπτή δαντέλα με κεντρικό charm, romantic gothic aesthetic.',
        images: ['', '', '']
    },
    
    // Earrings
    {
        id: 7,
        name: 'Bat Earrings',
        category: 'earrings',
        price: 8,
        description: 'Write me in the description if you want the Black or Red pair !! Only 1 pair included. The hook is made by Stainless Steel and the charm is made by Zinic Alloy.',
        images: ['Images/Earrings/BatEarrings.jpg']
    },
    {
        id: 8,
        name: 'Plague Doctor Earrings',
        category: 'earrings',
        price: 7,
        description: 'These earrings are inspired from the Plague Era, the hooks are made by Stainless Steel and the charms are made by Zinic Alloy.',
        images: ['Images/Earrings/PlagueDoctorEarrings.jpg']
    },
    {
        id: 9,
        name: 'Edgy Heart Earrings',
        category: 'earrings',
        price: 6,
        description: 'The hook is made by Stainless Steel and the charm is made from Zinic Alloy.',
        images: ['Images/Earrings/EdgyHeartEarrings.jpg']
    },
    
    // More products to fill the grid
    {
        id: 10,
        name: 'Pentagram Necklace',
        category: 'necklaces',
        price: 28,
        description: 'Witchy pentagram pendant, powerful και beautiful.',
        images: ['', '', '']
    },
    {
        id: 11,
        name: 'Chain Choker',
        category: 'chokers',
        price: 24,
        description: 'Multi-chain choker με gothic aesthetic, statement piece.',
        images: ['', '', '']
    },
    {
        id: 12,
        name: 'Raven Earrings',
        category: 'earrings',
        price: 17,
        description: 'Dark και mysterious raven σκουλαρίκια, unique design.',
        images: ['', '', '']
    }
];

// Payment info - YOU NEED TO REPLACE THESE WITH YOUR ACTUAL LINKS
const paymentInfo = {
    paypal: 'https://paypal.me/yourlink', // Replace with your actual PayPal.me link
    revolut: 'https://revolut.me/yourlink', // Replace with your actual Revolut.me link
    iban: 'GR00 0000 0000 0000 0000 0000 000' // Replace with your actual IBAN
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
    card.onclick = () => openProductModal(product);
    
    const mainImage = product.images && product.images[0] ? product.images[0] : '';
    
    card.innerHTML = `
        <div class="product-image">
            ${mainImage 
                ? `<img src="${mainImage}" alt="${product.name}">`
                : '<div class="placeholder-icon">✦</div>'
            }
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
       <div class="product-price">${product.price}€</div>

<button class="buy-button" onclick="event.stopPropagation(); addToCartFromModal(${product.id})">
  Προσθήκη στο καλάθι 🛒
</button>

<button class="buy-button">View Details</button>
        </div>
    `;
    
    return card;
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
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
                <div class="product-price">${product.price}€</div>
               <p style="color: var(--accent-purple-light); margin-bottom: 1rem; font-weight: 600;">
                📦 Μεταφορικά Box Now: +${shipping}€
                </p>
                
<button class="submit-order-btn" onclick="addToCartFromModal(${product.id})">
  Προσθήκη στο καλάθι 🛒
</button>

<p style="color: var(--text-secondary); margin-top: 0.8rem; font-size: 0.95rem;">
  Η πληρωμή ολοκληρώνεται από το καλάθι. 📦 Μεταφορικά Box Now: +${shipping}€
</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Initialize current carousel index
    window.currentCarouselIndex = 0;
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
    // This is a placeholder - you'll need to implement actual email sending
    // Options: EmailJS, FormSubmit, your own backend, etc.
    
    console.log('Order received:', orderData);
    
    // Example with mailto (basic, not ideal but works)
    // You can replace this with EmailJS later
    const subject = `Νέα Παραγγελία: ${orderData.product}`;
    const body = `
ΝΕΑΗ ΠΑΡΑΓΓΕΛΙΑ - Floxify Charms

Προϊόν: ${orderData.product}
Τιμή: ${orderData.total}€

ΣΤΟΙΧΕΙΑ ΠΕΛΑΤΗ:
Όνομα: ${orderData.name}
Email: ${orderData.email}
Τηλέφωνο: ${orderData.phone}
Box Now: ${orderData.boxNow}

Σχόλια: ${orderData.notes || 'Κανένα'}

Ημερομηνία: ${orderData.timestamp}
    `;
    
    // Store in localStorage as backup
    const orders = JSON.parse(localStorage.getItem('floxifyOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('floxifyOrders', JSON.stringify(orders));
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
        <h4 style="margin-bottom: 0.5rem; font-family: 'Cinzel', serif;">✅ Στοιχεία Καταχωρήθηκαν!</h4>
        <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            Αποστολή στο: <strong>${orderData.boxNow}</strong>
        </p>
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
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };
    
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    };
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
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
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Ευχαριστώ για το μήνυμά σου! Θα επικοινωνήσω σύντομα! 🖤');
        contactForm.reset();
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
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);

  if (existing) existing.qty += qty;
  else cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    image: (product.images && product.images[0]) ? product.images[0] : '',
    qty: qty
  });

  saveCart(cart);
}

function changeCartQty(productId, delta) {
  let cart = getCart();
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
  modal.style.display = 'block';
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
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

  addToCart(product, 1);

  showOrderConfirmation({
    boxNow: 'Το προϊόν προστέθηκε στο καλάθι 🛒'
  });
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
  document.body.style.overflow = 'hidden';

  const cartDescription = cart
    .map(i => `${i.name} x${i.qty} (${i.price}€)`)
    .join('<br>');

  // ✅ Βάζουμε ΚΑΙ τη φόρμα ΚΑΙ το paymentSection μέσα στο modal
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
      <div class="order-form-section">
        <h3 style="font-family: 'Cinzel', serif; font-size: 1.5rem; margin-bottom: 1rem; color: var(--accent-purple-light);">
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
            <input
              type="text"
              id="boxNowStation"
              required
              placeholder="Αναζήτησε το Box Now σου... (π.χ. Θεσσαλονίκη Τσιμισκή)"
              list="boxNowStations"
              autocomplete="off"
            >
            <datalist id="boxNowStations">
              <option value="Θεσσαλονίκη - Τσιμισκή 57">
              <option value="Θεσσαλονίκη - Εγνατία 154">
              <option value="Θεσσαλονίκη - Μητροπόλεως 44">
              <option value="Θεσσαλονίκη - Αγίας Σοφίας 68">
              <option value="Θεσσαλονίκη - Βασ. Όλγας 122">
              <option value="Θεσσαλονίκη - Καραολή Δημητρίου 54">
              <option value="Θεσσαλονίκη - 25ης Μαρτίου 34">
            </datalist>
            <small style="color: var(--text-secondary); font-size: 0.85rem; display: block; margin-top: 0.3rem;">
              💡 Βρες το κοντινότερο Box Now στο <a href="https://www.boxnow.gr/find-a-locker" target="_blank" style="color: var(--accent-purple);">boxnow.gr</a>
            </small>
          </div>

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
            <button class="payment-btn" onclick="showBankDetails()">
              🏦 Τραπεζική κατάθεση
            </button>
          </div>

          <div id="bankDetails" style="display:none; margin-top: 1.5rem; padding: 1.5rem; background: var(--primary-dark); border-radius: 8px; border: 1px solid var(--accent-purple);">
            <h4 style="color: var(--accent-purple-light); margin-bottom: 1rem;">Στοιχεία Τραπεζικού Λογαριασμού:</h4>
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>IBAN:</strong> ${paymentInfo.iban}</p>
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>Ποσό:</strong> ${total}€</p>
          </div>

          <p style="color: var(--accent-purple-light); margin-top: 1.5rem; font-size: 0.95rem; text-align: center; background: rgba(139, 92, 246, 0.1); padding: 1rem; border-radius: 8px;">
            ✅ Μετά την πληρωμή θα στείλω το δέμα στο Box Now που επέλεξες!<br>
            Θα λάβεις SMS με τον κωδικό παραλαβής. 🖤
          </p>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'block';

  // submit handler (Cart)
  const form = document.getElementById('cartOrderForm');
  form.onsubmit = (e) => handleCartOrderSubmit(e, cart, total);
}

function handleCartOrderSubmit(event, cart, total) {
  event.preventDefault();

  const orderData = {
    products: cart,
    name: document.getElementById('customerName').value,
    email: document.getElementById('customerEmail').value,
    phone: document.getElementById('customerPhone').value,
    boxNow: document.getElementById('boxNowStation').value,
    notes: document.getElementById('orderNotes').value,
    total: total,
    shipping: BOXNOW_SHIPPING,
    timestamp: new Date().toLocaleString('el-GR')
  };

  console.log('ORDER (CART):', orderData);

  // ✅ κρύψε φόρμα ΜΕΣΑ στο modal
  const modalBody = document.getElementById('modalBody');
  const formSection = modalBody.querySelector('.order-form-section');
  const paymentSection = modalBody.querySelector('#paymentSection');

  formSection.style.display = 'none';
  paymentSection.style.display = 'block';

  showOrderConfirmation({
    boxNow: 'Στοιχεία καλαθιού καταχωρήθηκαν ✅'
  });
}