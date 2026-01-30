// Sample product data - you'll replace with your actual products and images
const products = [
    // Necklaces
    {
        id: 1,
        name: 'Moon Phase Necklace',
        category: 'necklaces',
        price: 25,
        description: 'Ασημένιο κολιέ με τις φάσεις της σελήνης, ιδανικό για witchy vibes.',
        image: '' // Placeholder - add your image URL here
    },
    {
        id: 2,
        name: 'Victorian Locket',
        category: 'necklaces',
        price: 35,
        description: 'Vintage-style locket με intricate λεπτομέρειες και μαύρη αλυσίδα.',
        image: ''
    },
    {
        id: 3,
        name: 'Crystal Pendant',
        category: 'necklaces',
        price: 30,
        description: 'Μωβ crystal pendant σε μαύρη αλυσίδα, handmade με αγάπη.',
        image: ''
    },
    
    // Chokers
    {
        id: 4,
        name: 'Velvet Choker',
        category: 'chokers',
        price: 20,
        description: 'Βελούδινο choker με gothic charm, comfortable και stylish.',
        image: ''
    },
    {
        id: 5,
        name: 'Spiked Choker',
        category: 'chokers',
        price: 22,
        description: 'Edgy choker με μικρά spikes, perfect για punk-goth look.',
        image: ''
    },
    {
        id: 6,
        name: 'Lace Choker',
        category: 'chokers',
        price: 18,
        description: 'Λεπτή δαντέλα με κεντρικό charm, romantic gothic aesthetic.',
        image: ''
    },
    
    // Earrings
    {
        id: 7,
        name: 'Bat Earrings',
        category: 'earrings',
        price: 15,
        description: 'Cute bat σκουλαρίκια, ιδανικά για everyday goth style.',
        image: ''
    },
    {
        id: 8,
        name: 'Moon & Stars',
        category: 'earrings',
        price: 18,
        description: 'Ασημένια σκουλαρίκια με σελήνη και αστέρια, celestial vibes.',
        image: ''
    },
    {
        id: 9,
        name: 'Crystal Drops',
        category: 'earrings',
        price: 20,
        description: 'Elegant drop σκουλαρίκια με μωβά crystals που λάμπουν.',
        image: ''
    },
    
    // More products to fill the grid
    {
        id: 10,
        name: 'Pentagram Necklace',
        category: 'necklaces',
        price: 28,
        description: 'Witchy pentagram pendant, powerful και beautiful.',
        image: ''
    },
    {
        id: 11,
        name: 'Chain Choker',
        category: 'chokers',
        price: 24,
        description: 'Multi-chain choker με gothic aesthetic, statement piece.',
        image: ''
    },
    {
        id: 12,
        name: 'Raven Earrings',
        category: 'earrings',
        price: 17,
        description: 'Dark και mysterious raven σκουλαρίκια, unique design.',
        image: ''
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
    
    card.innerHTML = `
        <div class="product-image">
            ${product.image 
                ? `<img src="${product.image}" alt="${product.name}">`
                : '<div class="placeholder-icon">✦</div>'
            }
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}€</div>
            <button class="buy-button">View Details</button>
        </div>
    `;
    
    return card;
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    // Calculate total with shipping (3€ standard)
    const shipping = 3;
    const total = product.price + shipping;
    
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image">
                ${product.image 
                    ? `<img src="${product.image}" alt="${product.name}">`
                    : '<div class="placeholder-icon">✦</div>'
                }
            </div>
            <div class="modal-details">
                <div class="product-category">${product.category}</div>
                <h2>${product.name}</h2>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}€</div>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    + ${shipping}€ μεταφορικά = <strong>${total}€</strong> σύνολο
                </p>
                
                <div class="payment-options">
                    <h3>Επίλεξε τρόπο πληρωμής:</h3>
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
                    
                    <div id="bankDetails" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: var(--primary-dark); border-radius: 8px; border: 1px solid var(--accent-purple);">
                        <h4 style="color: var(--accent-purple-light); margin-bottom: 1rem;">Στοιχεία Τραπεζικού Λογαριασμού:</h4>
                        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                            <strong>IBAN:</strong> ${paymentInfo.iban}
                        </p>
                        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                            <strong>Ποσό:</strong> ${total}€
                        </p>
                        <p style="color: var(--text-secondary); margin-top: 1rem; font-size: 0.95rem;">
                            Μετά την κατάθεση, στείλε μου email με το αποδεικτικό και τη διεύθυνση αποστολής!
                        </p>
                    </div>
                    
                    <p style="color: var(--text-secondary); margin-top: 1.5rem; font-size: 0.95rem; text-align: center;">
                        Μετά την πληρωμή, θα επικοινωνήσω μαζί σου για τη διεύθυνση αποστολής! 🖤
                    </p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
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
    };
    
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
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
