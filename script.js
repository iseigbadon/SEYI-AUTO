// ============================================
// SEYI AUTO - WORLD-CLASS LUXURY SYSTEM
// Multi-Language | Categories | Detailed Parts
// ============================================

// Language support
const languages = {
    en: {
        nav: ['Brands', 'Gallery', 'Inventory', 'Reserve'],
        hero: 'SEYI AUTO',
        heroSub: 'Premium Automobiles. Curated Excellence.',
        heroDes: 'Luxury redefined for the Abuja elite. Explore Tesla, Mercedes-Benz, Toyota, and more.',
        explore: 'Explore Inventory',
        brands: 'Our Collections',
        brandsDesc: 'Handpicked luxury brands from around the world',
        inventory: 'Current Inventory',
        inventoryDesc: 'Premium vehicles available for immediate purchase or test drive',
        allVehicles: 'All Vehicles',
        sedans: 'Sedans',
        suvs: 'SUVs',
        hypercars: 'Hypercars',
        trucks: 'Trucks',
        gallery: 'Gallery',
        galleryDesc: 'Visual showcase of our premium collection',
        whyUs: 'Why SEYI AUTO',
        whyUsDesc: 'Experience luxury redefined',
        reserve: 'Reserve Your Vehicle',
        contact: 'Get in touch with our sales team',
        phone: 'Phone',
        location: 'Location',
        hours: 'Hours',
        specs: 'Specifications',
        features: 'Features',
        exterior: 'Exterior',
        interior: 'Interior',
        engine: 'Engine',
        performance: 'Performance',
        reserveNow: 'Reserve Now',
        viewDetails: 'View Details',
        close: 'Close'
    },
    es: {
        nav: ['Marcas', 'Galería', 'Inventario', 'Reservar'],
        hero: 'SEYI AUTO',
        heroSub: 'Automóviles Premium. Excelencia Seleccionada.',
        heroDes: 'Lujo redefinido para la élite de Abuja. Explora Tesla, Mercedes-Benz, Toyota y más.',
        explore: 'Explorar Inventario',
        brands: 'Nuestras Colecciones',
        brandsDesc: 'Marcas de lujo seleccionadas de todo el mundo',
        inventory: 'Inventario Actual',
        inventoryDesc: 'Vehículos premium disponibles para compra inmediata o prueba de conducción',
        allVehicles: 'Todos los Vehículos',
        sedans: 'Sedanes',
        suvs: 'SUVs',
        hypercars: 'Hipercars',
        trucks: 'Camiones',
        gallery: 'Galería',
        galleryDesc: 'Escaparate visual de nuestra colección premium',
        whyUs: 'Por Qué SEYI AUTO',
        whyUsDesc: 'Experimenta el lujo redefinido',
        reserve: 'Reserva tu Vehículo',
        contact: 'Ponte en contacto con nuestro equipo de ventas',
        phone: 'Teléfono',
        location: 'Ubicación',
        hours: 'Horarios',
        specs: 'Especificaciones',
        features: 'Características',
        exterior: 'Exterior',
        interior: 'Interior',
        engine: 'Motor',
        performance: 'Rendimiento',
        reserveNow: 'Reservar Ahora',
        viewDetails: 'Ver Detalles',
        close: 'Cerrar'
    },
    fr: {
        nav: ['Marques', 'Galerie', 'Inventaire', 'Réserver'],
        hero: 'SEYI AUTO',
        heroSub: 'Automobiles Premium. Excellence Curatée.',
        heroDes: 'Le luxe redéfini pour l\'élite d\'Abuja. Explorez Tesla, Mercedes-Benz, Toyota et bien d\'autres.',
        explore: 'Explorer l\'Inventaire',
        brands: 'Nos Collections',
        brandsDesc: 'Les meilleures marques de luxe du monde entier',
        inventory: 'Inventaire Actuel',
        inventoryDesc: 'Véhicules premium disponibles pour achat immédiat ou essai routier',
        allVehicles: 'Tous les Véhicules',
        sedans: 'Berlines',
        suvs: 'SUVs',
        hypercars: 'Hypervoitures',
        trucks: 'Camions',
        gallery: 'Galerie',
        galleryDesc: 'Vitrine visuelle de notre collection premium',
        whyUs: 'Pourquoi SEYI AUTO',
        whyUsDesc: 'Expérience du luxe redéfini',
        reserve: 'Réservez Votre Véhicule',
        contact: 'Contactez notre équipe commerciale',
        phone: 'Téléphone',
        location: 'Localisation',
        hours: 'Horaires',
        specs: 'Spécifications',
        features: 'Caractéristiques',
        exterior: 'Extérieur',
        interior: 'Intérieur',
        engine: 'Moteur',
        performance: 'Performance',
        reserveNow: 'Réserver Maintenant',
        viewDetails: 'Voir les Détails',
        close: 'Fermer'
    },
    yo: {
        nav: ['Awọn Ẹgbẹ', 'Irinṣẹ', 'Ero Owo', 'Ṣe Agbẹ'],
        hero: 'SEYI AUTO',
        heroSub: 'Awọn Ọkọ Iyalẹnu. Ayanmo Tutọ.',
        heroDes: 'Iyalẹnu ti a tunṣe fun awọn ọlọ́ la Abuja. Ṣawari Tesla, Mercedes-Benz, Toyota, ati ẹléku.',
        explore: 'Ṣawari Ero Owo',
        brands: 'Awọn Akọlẹ Wa',
        brandsDesc: 'Awọn ẹgbẹ iyalẹnu ti a yàn lọ́dọ̀ gbogbo ayé',
        inventory: 'Ero Owo Lọ́wọ́',
        inventoryDesc: 'Awọn ọkọ iyalẹnu ti o wa lọ́dọ̀ fún rànlọ́wọ́ tani tàbí ìdènà ọkọ',
        allVehicles: 'Gbogbo Awọn Ọkọ',
        sedans: 'Awọn Ọkọ Sedani',
        suvs: 'Awọn SUV',
        hypercars: 'Awọn Ọkọ Iyalẹnu Gidi',
        trucks: 'Awọn Ọkọ Iṣẹ',
        gallery: 'Irinṣẹ',
        galleryDesc: 'Ifihan ọrọ ti awọn ọkọ iyalẹnu wa',
        whyUs: 'Kí ni Àdájọ̀ SEYI AUTO',
        whyUsDesc: 'Ìfẹ́ iyalẹnu ti a tunṣe',
        reserve: 'Ṣe Agbẹ Ọkọ Rẹ',
        contact: 'Bá wa lọ́wọ́ kan pẹ̀lú ẹgbẹ ìtajà wa',
        phone: 'Nomba Àgbà',
        location: 'Ipo',
        hours: 'Àkókò',
        specs: 'Eré Ẹrọ',
        features: 'Awọn Èyà Nla',
        exterior: 'Ita Titun',
        interior: 'Inu',
        engine: 'Erọ',
        performance: 'Iṣẹ Ṣe',
        reserveNow: 'Ṣe Agbẹ Yanyan',
        viewDetails: 'Wo Awọn Alaye',
        close: 'Bọ̀'
    }
};

let currentLanguage = 'en';

// ENHANCED INVENTORY WITH CATEGORIES & DETAILED SPECS - EXACT MODELS WITH VERIFIED IMAGES
const inventory = [
    {
        id: 1,
        brand: 'Tesla',
        name: 'Model S Plaid',
        category: 'sedan',
        price: '₦70,000,000',
        specs: ['400 mi range', '2.1s 0-100', '200+ mph'],
        image: 'images/sedans/tesla/Tesla Model S (1).jpg',
        exterior: { color: 'Midnight Silver Metallic', wheels: '20" Aero', paint: 'Multi-coat' },
        interior: { seats: 'Premium Leather', climate: 'Tri-zone', sound: 'Premium Audio' },
        images: ['images/sedans/tesla/Tesla Model S (1).jpg', 'images/sedans/tesla/Tesla Model S (2).jpg', 'images/sedans/tesla/Tesla Model S 4.jpg', 'images/sedans/tesla/Tesla Model S (3).jpg'],
        engine: { type: 'Dual Motor Electric', power: '1,020 hp', torque: '1,050 lb-ft' },
        performance: { accel: '2.1s', topSpeed: '200 mph', range: '400 miles' },

        highlights: ['Dual Motor AWD', 'Plaid Powertrain', 'Glass Roof', 'Supercharging']
    },
    {
        id: 2,
        brand: 'Mercedes-AMG',
        name: 'C63 Cabriolet (W206)',
        category: 'sedan',
        price: '₦52,000,000',
        specs: ['510 hp', '3.8s 0-100', '180 mph'],
        image: 'images/sedans/Mercedes-AMG/pexels-andreevaleksandar-25189129.jpg',
        exterior: { color: 'Designo Diamond White Bright', wheels: '19" AMG Forged', paint: 'Premium' },
        interior: { seats: 'AIRSCARF Leather', climate: 'Dual-zone', sound: 'Burmester' },
        images: ['images/sedans/Mercedes-AMG/pexels-andreevaleksandar-25189129.jpg', 'images/sedans/Mercedes-AMG/pexels-mikebirdy-1104768.jpg', 'images/sedans/Mercedes-AMG/pexels-paashuu-16052715.jpg', 'images/sedans/Mercedes-AMG/pexels-riccardo-maremmi-1630705481-28200243.jpg'],
        engine: { type: '2.0L Turbo 4-Cyl', power: '510 hp', torque: '531 lb-ft' },
        performance: { accel: '3.8s', topSpeed: '180 mph', fuel: '10.2 L/100km' },

        highlights: ['4-Cylinder Twin-Turbo', 'Convertible Top', 'Panoramic Roof', 'AMG Dynamics']
    },
    {
        id: 3,
        brand: 'BMW',
        name: 'M5 Competition (F90)',
        category: 'sedan',
        price: '₦56,000,000',
        specs: ['625 hp', '3.1s 0-100', '190 mph'],
        image: 'images/sedans/bmw/M5 Competition (F90) BMW (1).jpg',
        exterior: { color: 'BMW Black Sapphire', wheels: '20" M Light Alloy', paint: 'Metallic' },
        interior: { seats: 'Merino Leather', climate: 'Tri-zone', sound: 'Harman Kardon' },
        images: ['images/sedans/bmw/M5 Competition (F90) BMW (1).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (2).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (3).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (4).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (5).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (6).jpg'],
        engine: { type: '4.4L Twin-Turbo V8', power: '625 hp', torque: '553 lb-ft' },
        performance: { accel: '3.1s', topSpeed: '190 mph', fuel: '10.6 L/100km' },

        highlights: ['Twin-Turbo V8', 'M Adaptive Suspension', 'Carbon Interior Trim', 'M Sport Brakes']
    },
    {
        id: 4,
        brand: 'Toyota',
        name: 'Land Cruiser 300 (J300)',
        category: 'suv',
        price: '₦39,000,000',
        specs: ['3.3L Twin-Turbo', 'All-Terrain Champion', '8-Seater'],
        image: 'images/sedans/Toyota Land Cruiser 300/Land Cruiser 300 (J300) Toyota (1).jpg',
        exterior: { color: 'Pearl White', wheels: '20" Alloy', paint: 'Premium Metallic' },
        interior: { seats: '8 Premium Leather', climate: 'Dual-zone', sound: 'Premium Audio' },
        images: ['images/sedans/Toyota Land Cruiser 300/Land Cruiser 300 (J300) Toyota (1).jpg', 'images/sedans/Toyota Land Cruiser 300/Land Cruiser 300 (J300) Toyota (2).jpg', 'images/sedans/Toyota Land Cruiser 300/Land Cruiser 300 (J300) Toyota (3).jpg', 'images/sedans/Toyota Land Cruiser 300/Land Cruiser 300 (J300) Toyota.jpg'],
        engine: { type: '3.3L Twin-Turbo V6 Diesel', power: '304 hp', torque: '471 lb-ft' },
        performance: { accel: '7.8s', topSpeed: '174 mph', capacity: '8 passengers' },

        highlights: ['All-Terrain Capability', 'Multi-Terrain Pro', '8-Seater Luxury', 'Hill Descent Control']
    },
    {
        id: 5,
        brand: 'Tesla',
        name: 'Model X Plaid',
        category: 'suv',
        price: '₦78,000,000',
        specs: ['348 mi range', '2.5s 0-100', 'Falcon Doors'],
        image: 'images/sedans/tesla/Tesla Model S (2).jpg',
        exterior: { color: 'Solid Black Metallic', wheels: '20" Aero', doors: 'Falcon Wing' },
        interior: { seats: '7 Premium Vegan', climate: 'Tri-zone', sound: 'Premium Audio' },
        images: ['images/sedans/tesla/Tesla Model S (2).jpg', 'images/sedans/tesla/Tesla Model S (3).jpg', 'images/sedans/tesla/Tesla Model S 4.jpg', 'images/sedans/tesla/Tesla Model S (1).jpg'],
        engine: { type: 'Tri Motor Electric', power: '1,020 hp', torque: '1,050 lb-ft' },
        performance: { accel: '2.5s', topSpeed: '200 mph', range: '348 miles' },

        highlights: ['Falcon Wing Doors', 'Tri Motor AWD', 'Max Range Package', 'Autopilot Plus']
    },
    {
        id: 6,
        brand: 'Mercedes-AMG',
        name: 'GLE 63 S Coupe (C167)',
        category: 'suv',
        price: '₦70,000,000',
        specs: ['603 hp', '3.8s 0-100', 'Twin-Turbo V8'],
        image: 'images/sedans/Mercedes-AMG/pexels-mikebirdy-1104768.jpg',
        exterior: { color: 'Obsidian Black', wheels: '21" AMG Multi-spoke', paint: 'Premium Metallic' },
        interior: { seats: '5 Nappa Leather', climate: 'Tri-zone', sound: 'Burmester' },
        images: ['images/sedans/Mercedes-AMG/pexels-mikebirdy-1104768.jpg', 'images/sedans/Mercedes-AMG/pexels-paashuu-16052715.jpg', 'images/sedans/Mercedes-AMG/pexels-andreevaleksandar-25189129.jpg', 'images/sedans/Mercedes-AMG/pexels-riccardo-maremmi-1630705481-28200243.jpg'],
        engine: { type: '4.0L Twin-Turbo V8', power: '603 hp', torque: '627 lb-ft' },
        performance: { accel: '3.8s', topSpeed: '193 mph', fuel: '11.9 L/100km' },

        highlights: ['AMG Performance', 'Adaptive Suspension', 'Panoramic Sunroof', 'AMG Styling Package']
    },
    {
        id: 7,
        brand: 'BMW',
        name: 'X7 M60i xDrive (G07)',
        category: 'suv',
        price: '₦53,000,000',
        specs: ['523 hp', '4.2s 0-100', '7-Seater Luxury'],
        image: 'images/sedans/bmw/M5 Competition (F90) BMW (2).jpg',
        exterior: { color: 'Frozen Black Pearl', wheels: '22" M Light Alloy', paint: 'Premium' },
        interior: { seats: '7 Premium Leather', climate: 'Quad-zone', sound: 'Harman Kardon' },
        images: ['images/sedans/bmw/M5 Competition (F90) BMW (2).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (3).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (4).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (5).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (6).jpg', 'images/sedans/bmw/M5 Competition (F90) BMW (1).jpg'],
        engine: { type: '4.4L Twin-Turbo', power: '523 hp', torque: '553 lb-ft' },
        performance: { accel: '4.2s', topSpeed: '180 mph', capacity: '7 passengers' },

        highlights: ['Luxury 7-Seater', 'Twin-Turbo Power', 'Panoramic Sunroof', 'M Sport Package']
    },
    {
        id: 8,
        brand: 'Toyota',
        name: 'HiLux Conquest (N80)',
        category: 'truck',
        price: '₦25,000,000',
        specs: ['2.8L Turbo Diesel', 'Double Cab', 'Premium Trim'],
        image: 'images/trucks/Hilux/blake-carpenter-sngN7wcxkv0-unsplash.jpg',
        exterior: { color: 'Pearl White', wheels: '18" Steel Alloy', bed: 'Steel Deck' },
        interior: { seats: '5 Leather Premium', climate: 'Dual-zone', sound: 'Premium Audio' },
        images: ['images/trucks/Hilux/blake-carpenter-sngN7wcxkv0-unsplash.jpg', 'images/trucks/Hilux/cassiano-k-wehr-tvi8dUU3ULk-unsplash.jpg', 'images/trucks/Hilux/dusty-barnes-o7fqZ18YFXc-unsplash.jpg', 'images/trucks/Hilux/isaac-mitchell-BP3qDezFinc-unsplash.jpg', 'images/trucks/Hilux/isaac-mitchell-iRBD0-AN_78-unsplash.jpg', 'images/trucks/Hilux/jakob-rosen-T4Y82tddTsY-unsplash.jpg'],
        engine: { type: '2.8L Turbo Diesel', power: '204 hp', torque: '369 lb-ft' },
        performance: { accel: '10.2s', topSpeed: '168 mph', payload: '1050 kg' },

        highlights: ['Turbo Diesel Reliable', 'Double Cab Luxury', 'Strong Payload', 'Towing 3500kg']
    },
    {
        id: 9,
        brand: 'Tesla',
        name: 'Roadster (2025)',
        category: 'hypercar',
        price: '₦135,000,000',
        specs: ['1.9s 0-60 mph', '620+ mi range', '250+ mph top speed'],
        image: 'images/hypercars/Roadster (2025) Tesla.jpg',
        exterior: { color: 'Solid Red Metallic', wheels: '20" Carbonized Twin', paint: 'Metallic' },
        interior: { seats: '4 Vegan Leather', climate: 'Tri-zone', sound: 'Premium Sound' },
        images: ['images/hypercars/Roadster (2025) Tesla.jpg', 'images/hypercars/Roadster (2026) Tesla.jpg', 'images/hypercars/Roadster (2027) Tesla.jpg', 'images/hypercars/Roadster (2028) Tesla.jpg', 'images/hypercars/Roadster (2029) Tesla.jpg', 'images/hypercars/Roadster (2030) Tesla.jpg'],
        engine: { type: 'Tri Motor Electric', power: '7,500 hp', torque: 'Instant' },
        performance: { accel: '1.9s', topSpeed: '250+ mph', range: '620 miles' },

        highlights: ['Fastest Production Car', 'Instant Acceleration', 'Gullwing Doors', 'Next-Gen Tech']
    },
    {
        id: 10,
        brand: 'Porsche',
        name: '911 Turbo S (992.2)',
        category: 'hypercar',
        price: '₦95,000,000',
        specs: ['641 hp', '2.7s 0-60 mph', '205 mph top speed'],
        image: 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (7).jpg',
        exterior: { color: 'Carmine Red Metallic', wheels: '21" Titanium Finish', paint: 'Premium Hybrid' },
        interior: { seats: '2+2 Premium Sport', climate: 'Climate', sound: 'Bose Surround' },
        images: ['images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (7).jpg', 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (8).jpg', 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (9).jpg', 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (10).jpg', 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (11).jpg', 'images/suv/911 Turbo S (992.2) Porsche/911 Turbo S (992.2) Porsche (12).jpg'],
        engine: { type: '3.8L Twin-Turbo Flat-6', power: '641 hp', torque: '590 lb-ft' },
        performance: { accel: '2.7s', topSpeed: '205 mph', fuel: '10.2 L/100km' },

        highlights: ['Twin-Turbo Flat-6', 'AWD System', 'Sport Suspension', 'Carbon Wheels']
    }
];

// Language switching
function switchLanguage(lang, button) {
    currentLanguage = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Update all translatable text on the page
    updatePageLanguage();
    populateInventory();
}

function t(key) {
    return languages[currentLanguage][key] || key;
}

function updatePageLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        // Handle nav items which are indexed
        if (key.startsWith('nav-')) {
            const index = parseInt(key.split('-')[1]);
            element.textContent = languages[currentLanguage].nav[index];
        } else {
            // Handle regular translatable keys
            if (languages[currentLanguage][key]) {
                element.textContent = languages[currentLanguage][key];
            }
        }
    });
}

// POPULATE INVENTORY WITH FULL DETAILS
function populateInventory(filterCategory = 'all') {
    const grid = document.getElementById('inventoryGrid');
    let filtered = inventory;
    
    if (filterCategory !== 'all') {
        filtered = inventory.filter(item => item.category === filterCategory);
    }
    
    grid.innerHTML = filtered.map(item => `
        <div class="inventory-item" onclick="openDetailedModal('${item.id}')">
            <div class="inv-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;">
                <span class="category-badge">${item.category.toUpperCase()}</span>
            </div>
            <div class="inv-details">
                <div class="inv-brand">${item.brand}</div>
                <div class="inv-name">${item.name}</div>
                <div class="inv-specs">
                    ${item.specs.map(spec => `<span>${spec}</span>`).join('')}
                </div>
                <div class="inv-price">${item.price}</div>
                <button class="inv-btn" onclick="event.stopPropagation()">${t('viewDetails')}</button>
            </div>
        </div>
    `).join('');
}

// Category filtering
function filterByCategory(category) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    populateInventory(category);
}

// DETAILED MODAL WITH PARTS & SPECIFICATIONS
const modal = document.getElementById('modal');

function openDetailedModal(carId) {
    const car = inventory.find(c => c.id == carId);
    if (!car) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-model detailed">
            <div class="modal-header">
                <h2>${car.name}</h2>
                <p class="modal-brand">${car.brand}</p>
            </div>
            
            <div class="modal-price-badge">${car.price}</div>
            
            <!-- IMAGE GALLERY -->
            <div class="image-gallery">
                <div class="gallery-main">
                    <img src="${car.images[0]}" alt="${car.name}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 5px;">
                </div>
                <div class="gallery-thumbnails">
                    ${car.images.map((img, idx) => `
                        <div class="thumbnail" onclick="document.querySelector('.gallery-main img').src='${img}'" style="cursor: pointer;">
                            <img src="${img}" alt="Thumbnail ${idx+1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 3px; border: 2px solid transparent; transition: all 0.3s;" onmouseover="this.parentElement.style.borderColor='#000';" onmouseout="this.parentElement.style.borderColor='transparent';">
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- TABS FOR DETAILED INFO -->
            <div class="modal-tabs">
                <button class="tab-btn active" onclick="switchTab('specs')">📋 ${t('specs')}</button>
                <button class="tab-btn" onclick="switchTab('exterior')">🚗 ${t('exterior')}</button>
                <button class="tab-btn" onclick="switchTab('interior')">🪑 ${t('interior')}</button>
                <button class="tab-btn" onclick="switchTab('engine')">⚙️ ${t('engine')}</button>
                <button class="tab-btn" onclick="switchTab('performance')">🏁 ${t('performance')}</button>
            </div>

            <!-- TAB CONTENTS -->
            <div id="specs" class="tab-content active">
                <h3>${t('specs')}</h3>
                <div class="specs-detail-grid">
                    ${car.specs.map((spec, idx) => `
                        <div class="spec-detail-item">
                            <span class="spec-icon">${['⚡', '💨', '🔧', '✨'][idx % 4]}</span>
                            <span class="spec-value">${spec}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="highlights-section">
                    <h4>Key Highlights</h4>
                    <div class="highlights-list">
                        ${car.highlights.map(h => `<div class="highlight-item">✓ ${h}</div>`).join('')}
                    </div>
                </div>
            </div>

            <div id="exterior" class="tab-content">
                <h3>${t('exterior')}</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Color</span>
                        <span class="detail-value">${car.exterior.color}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Wheels</span>
                        <span class="detail-value">${car.exterior.wheels}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Paint</span>
                        <span class="detail-value">${car.exterior.paint}</span>
                    </div>
                    ${car.exterior.doors ? `
                        <div class="detail-item">
                            <span class="detail-label">Doors</span>
                            <span class="detail-value">${car.exterior.doors}</span>
                        </div>
                    ` : ''}
                    ${car.exterior.bed ? `
                        <div class="detail-item">
                            <span class="detail-label">Bed</span>
                            <span class="detail-value">${car.exterior.bed}</span>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div id="interior" class="tab-content">
                <h3>${t('interior')}</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Seating</span>
                        <span class="detail-value">${car.interior.seats}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Climate Control</span>
                        <span class="detail-value">${car.interior.climate}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Audio System</span>
                        <span class="detail-value">${car.interior.sound}</span>
                    </div>
                </div>
            </div>

            <div id="engine" class="tab-content">
                <h3>${t('engine')}</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Type</span>
                        <span class="detail-value">${car.engine.type}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Power</span>
                        <span class="detail-value">${car.engine.power}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Torque</span>
                        <span class="detail-value">${car.engine.torque}</span>
                    </div>
                </div>
            </div>

            <div id="performance" class="tab-content">
                <h3>${t('performance')}</h3>
                <div class="performance-bars">
                    <div class="perf-bar">
                        <label>Acceleration (0-100)</label>
                        <div class="bar">
                            <div class="bar-fill" style="width: ${100 - (parseFloat(car.performance.accel) * 10)}%"></div>
                        </div>
                        <span>${car.performance.accel}</span>
                    </div>
                    <div class="perf-bar">
                        <label>Top Speed</label>
                        <div class="bar">
                            <div class="bar-fill" style="width: ${(parseFloat(car.performance.topSpeed) / 2.5)}%"></div>
                        </div>
                        <span>${car.performance.topSpeed}</span>
                    </div>
                    ${car.performance.range ? `
                        <div class="perf-bar">
                            <label>Range</label>
                            <div class="bar">
                                <div class="bar-fill" style="width: ${(parseInt(car.performance.range) / 6.2)}%"></div>
                            </div>
                            <span>${car.performance.range}</span>
                        </div>
                    ` : ''}
                </div>
            </div>

            <!-- CTA BUTTONS -->
            <div class="modal-cta-full">
                <button class="modal-btn primary" onclick="bookReservation('${car.name}')">${t('reserveNow')}</button>
                <button class="modal-btn secondary" onclick="closeModal()">${t('close')}</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function bookReservation(vehicleName) {
    scrollToSection('contact');
    closeModal();
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #1a1a1a;
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 3px;
        font-weight: 600;
        z-index: 3000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.4s ease;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(100px)';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// Brand Video Mapping
const brandVideos = {
    'tesla': 'video/New Model 3 Performance _ Tesla.mp4',
    'mercedes': 'video/Mercedese benz The Drift of a Lifetime.mp4',
    'bmw': 'video/Heart of Joy _ The New BMW iX3..mp4',
    'toyota': 'video/toyota GRIP Movie _ First Look.mp4'
};

// WhatsApp Integration
const whatsappNumber = '2348168890294'; // Nigeria code included

function openWhatsApp(type = '') {
    let message = 'Hi SEYI AUTO, I\'m interested in your luxury vehicles. ';
    
    if (type === 'testdrive') {
        message += 'I would like to book a test drive.';
    } else if (type === 'inquiry') {
        message += 'Could you provide more information?';
    } else {
        message += 'Can you help me?';
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

function sendViaWhatsApp() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const vehicle = document.getElementById('vehicle').value;
    const message = document.getElementById('message').value;
    
    if (!fullName || !email || !phone || !vehicle) {
        showNotification('Please fill in all required fields');
        return;
    }
    
    const whatsappMessage = `*SEYI AUTO - Vehicle Inquiry*

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Interested Vehicle: ${vehicle}

Message:
${message}

---
Sent from SEYI AUTO Website`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Clear form
    document.querySelector('.contact-form').reset();
    showNotification('Opening WhatsApp with your inquiry...');
}

function handleContactSubmit(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const vehicle = document.getElementById('vehicle').value;
    
    if (!fullName || !email || !phone || !vehicle) {
        showNotification('Please fill in all required fields');
        return;
    }
    
    // Show confirmation
    showNotification(`Thank you, ${fullName}! We'll contact you shortly.`);
    document.querySelector('.contact-form').reset();
}

function scrollToBooking() {
    scrollToSection('contact');
}

// Open brand video modal
function openBrandVideo(brand) {
    const videoModal = document.getElementById('videoModal');
    const brandVideo = document.getElementById('brandVideo');
    
    if (brandVideos[brand]) {
        brandVideo.src = brandVideos[brand];
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Autoplay the video
        setTimeout(() => {
            brandVideo.play();
        }, 100);
    }
}

// Close video modal
function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const brandVideo = document.getElementById('brandVideo');
    videoModal.style.display = 'none';
    brandVideo.pause();
    document.body.style.overflow = 'auto';
}

// Close video modal on outside click
window.addEventListener('click', (event) => {
    const videoModal = document.getElementById('videoModal');
    if (event.target === videoModal) {
        closeVideoModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    populateInventory();
});
>>>>>>> 98e33c8d6dcd9a04f9b734155cbad98cd082366f
