# 👼 Little Angel Pre Primary School Website

A production-ready, fully static school website built with **HTML5 + CSS3 + Bootstrap 5**, ready to host on **GitHub Pages**.

## 🌐 Live URL
`https://YOUR-USERNAME.github.io/little-angel-school/`

---

## 📁 Directory Structure

```
little-angel-school/
│
├── index.html                  ← Home page
├── 404.html                    ← Custom 404 error page (GitHub Pages auto-uses this)
├── robots.txt                  ← SEO: search engine instructions
├── sitemap.xml                 ← SEO: site map (update domain before publishing)
├── README.md                   ← This file
│
├── css/
│   └── style.css               ← All custom styles, CSS variables, responsive rules
│
├── js/
│   └── main.js                 ← Navigation, animations, form handling, gallery lightbox
│
└── pages/
    ├── about.html              ← About Us, Principal's message, achievements, infrastructure
    ├── programs.html           ← Nursery / LKG / UKG details, fee table, FAQs
    ├── faculty.html            ← All staff profiles by department
    ├── gallery.html            ← Filterable photo gallery with lightbox
    ├── admissions.html         ← Admission process, form, documents checklist, FAQs
    ├── news.html               ← News articles, upcoming events, school calendar, notice board
    └── contact.html            ← Contact form, map, department contacts, social links
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 – Create GitHub Repository
1. Go to [github.com](https://github.com) → **New Repository**
2. Name it: `little-angel-school`
3. Set to **Public**
4. Click **Create Repository**

### Step 2 – Upload Files
**Option A – GitHub Web UI (no Git needed):**
1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop ALL files maintaining the folder structure
4. Commit with message: `Initial commit – Little Angel School Website`

**Option B – Git CLI:**
```bash
git init
git add .
git commit -m "Initial commit – Little Angel School Website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/little-angel-school.git
git push -u origin main
```

### Step 3 – Enable GitHub Pages
1. Go to repository **Settings** → **Pages** (left sidebar)
2. Under **Source** → select **Deploy from a branch**
3. Branch: **main** | Folder: **/ (root)**
4. Click **Save**
5. Wait 2–3 minutes → your site is live at `https://YOUR-USERNAME.github.io/little-angel-school/`

---

## 🛠️ Before Going Live – Customise These

| File | What to Change |
|------|---------------|
| All HTML files | Replace `+91 98765 43210` with real phone number |
| All HTML files | Replace `info@littleangelschool.in` with real email |
| All HTML files | Update address if different |
| `sitemap.xml` | Replace `yourusername` with your GitHub username |
| `robots.txt` | Replace `yourusername` with your GitHub username |
| `pages/contact.html` | Embed real Google Maps `<iframe>` |
| All pages | Update social media links (Facebook, Instagram, YouTube, WhatsApp) |
| `index.html` | Update seat availability numbers |

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure & semantic markup |
| CSS3 + Custom Properties | Theming, animations, layout |
| Bootstrap 5.3.2 | Responsive grid & components |
| Bootstrap Icons 1.11.3 | Icon set throughout the site |
| Google Fonts (Baloo 2 + Nunito) | Typography |
| Vanilla JavaScript | Interactivity, form handling, gallery |

**Zero dependencies to install. No build step. No Node.js required.**

---

## 🎨 Key Features

- ✅ **8 complete pages** – Home, About, Programs, Faculty, Gallery, Admissions, News, Contact
- ✅ **Fully responsive** – mobile, tablet, desktop
- ✅ **Animated scroll reveals** – fade-in-up on all sections
- ✅ **Filterable gallery** with emoji lightbox
- ✅ **Admission form** with client-side validation & success toast
- ✅ **School calendar table** (News page)
- ✅ **Marquee ticker** on all pages
- ✅ **Cookie consent banner**
- ✅ **Back-to-top button**
- ✅ **Custom 404 page** (GitHub Pages compatible)
- ✅ **SEO ready** – meta tags, robots.txt, sitemap.xml
- ✅ **Counter animations** on stats
- ✅ **No backend required** – 100% static

---

## 📞 School Info (Update Before Launch)

- **School Name:** Little Angel Pre Primary School
- **Location:** Plot 42, Sector 23, Nigdi, Pimpri-Chinchwad, Pune – 411044
- **Phone:** +91 98765 43210 / +91 98765 43211
- **Email:** info@littleangelschool.in
- **Founded:** 2005

---

## 📝 Licence

This website template was created for Little Angel Pre Primary School. All content is school-specific and intended for their official use.
