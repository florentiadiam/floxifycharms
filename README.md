# Floxify Charms - E-Commerce Website

Χειροποίητα κοσμήματα με witchy/victorian goth aesthetic 🖤✨

## Πώς να προσαρμόσεις το site

### 1. Πρόσθεσε τα δικά σου προϊόντα

Άνοιξε το `script.js` και βρες την `products` array (γύρω στη γραμμή 2).

Για κάθε προϊόν, άλλαξε:
```javascript
{
    id: 1,
    name: 'Το όνομα του κοσμήματος',
    category: 'necklaces', // ή 'chokers' ή 'earrings'
    price: 25, // Η τιμή σε ευρώ
    description: 'Περιγραφή του κοσμήματος...',
    image: 'path/to/your/image.jpg' // Άφησε κενό ('') για placeholder
}
```

Πρόσθεσε όσα προϊόντα θέλεις - απλά copy-paste το template!

### 2. Πρόσθεσε τις φωτογραφίες σου

**Option A: Ανέβασέ τες στο GitHub**
- Φτιάξε ένα φάκελο `images/` στο repository
- Ανέβασε τις φωτογραφίες εκεί
- Στο `script.js`, βάλε: `image: 'images/moon-necklace.jpg'`

**Option B: Χρησιμοποίησε εξωτερικό hosting**
- Ανέβασε σε Imgur/Google Drive/Cloudinary
- Πάρε το direct link της εικόνας
- Βάλε το link στο `image: 'https://...'`

### 3. Προσθέσε τα στοιχεία πληρωμών σου

Άνοιξε το `script.js` και βρες το `paymentInfo` object (γύρω στη γραμμή 76):

```javascript
const paymentInfo = {
    paypal: 'https://paypal.me/YOURLINK',     // ← Άλλαξε αυτό
    revolut: 'https://revolut.me/YOURLINK',   // ← Άλλαξε αυτό
    iban: 'GR00 0000 0000 0000 0000 0000 000' // ← Άλλαξε αυτό
};
```

**Πώς να φτιάξεις τα links:**
- **PayPal.me**: Πήγαινε στο paypal.me, φτιάξε το δικό σου link
- **Revolut.me**: Στο Revolut app → Profile → Revolut.me → Create link
- **IBAN**: Το IBAN του Alpha Bank σου

### 4. Προσάρμοσε το About section

Άνοιξε το `index.html` και βρες το `about-section` (γύρω στη γραμμή 54).
Άλλαξε το κείμενο με τη δική σου ιστορία!

### 5. Πρόσθεσε Social Media links

Στο `index.html`, βρες το footer (γύρω στη γραμμή 73):
```html
<a href="https://instagram.com/floxifycharms">Instagram</a>
<a href="https://facebook.com/floxifycharms">Facebook</a>
```

---

## Πώς να το ανεβάσεις στο GitHub Pages (ΔΩΡΕΑΝ hosting!)

### Βήμα 1: Φτιάξε repository
1. Πήγαινε στο GitHub
2. Κάνε "New Repository"
3. Όνομα: `floxifycharms` (ή ό,τι θέλεις)
4. Τσέκαρε "Public"
5. Create repository

### Βήμα 2: Ανέβασε τα αρχεία
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/floxifycharms.git
git push -u origin main
```

### Βήμα 3: Ενεργοποίησε GitHub Pages
1. Στο repository, πήγαινε Settings
2. Πήγαινε στο Pages (στο αριστερό menu)
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save

**Το site σου θα είναι live σε:** `https://YOUR-USERNAME.github.io/floxifycharms`

### Βήμα 4 (Προαιρετικό): Σύνδεσε custom domain

Όταν αγοράσεις το `floxifycharms.com`:

1. Στο GitHub Pages settings, βάλε το domain σου
2. Στον domain registrar (Namecheap/Cloudflare):
   - Πρόσθεσε CNAME record: `www` → `YOUR-USERNAME.github.io`
   - Πρόσθεσε A records για root domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

Μετά από 24 ώρες max, το site σου θα είναι στο `floxifycharms.com`! 🎉

---

## Συχνές Ερωτήσεις

**Q: Πώς προσθέτω περισσότερες κατηγορίες (π.χ. bracelets);**
A: 
1. Στο `index.html`, πρόσθεσε button: `<button class="filter-btn" data-category="bracelets">Bracelets</button>`
2. Στο `script.js`, πρόσθεσε προϊόντα με `category: 'bracelets'`

**Q: Πώς αλλάζω τα χρώματα;**
A: Στο `styles.css`, άλλαξε τα CSS variables στην αρχή:
```css
:root {
    --accent-purple: #8b5cf6;  /* Αυτό είναι το κύριο μωβ */
    --accent-purple-dark: #6d28d9;
    --accent-purple-light: #a78bfa;
}
```

**Q: Δουλεύει σε κινητά;**
A: Ναι! Το site είναι fully responsive.

**Q: Πώς παίρνω παραγγελίες;**
A: Όταν κάποιος πληρώσει, θα δεις το email στο PayPal/Revolut/τράπεζα. Επικοινώνησε μαζί του για τη διεύθυνση αποστολής!

---

## Κόστος Breakdown

- **GitHub Pages hosting**: 0€ (ΔΩΡΕΑΝ!)
- **Domain (.com)**: ~10-12€/χρόνο (όταν/αν θες)
- **Σύνολο**: 0€ μέχρι να αγοράσεις domain!

---

Καλή επιτυχία με το Floxify Charms! 🖤✨

Αν έχεις ερωτήσεις, στείλε μου μήνυμα!
