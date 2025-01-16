# Digital Business Card 💳

This project is a **digital business card** built with **React, Typescript**, and configured using **Vite**. It is a responsive web application that displays personal information, social media links, and a button to add the contact directly.

## ✨ Features
- **Card Display :**
    - Profile picture
    - Custom banner
    - Name and professional title
    - **`About Me`** Section
- **Dynamic Social Links :**
    - Retrieved from **`../src/data/SocialLinks.json`** file
    - Each link has a unique color
- **"Add To Contact" Button :**
    - Generates a `.vcf` file for easy contact import

---

## 💻 Tech Stack 
- **React** with functional components
- **Typescript** for strict typing
- **Vite** for fast setup and efficient development
- **CSS Modules** for scoped styling

---

## 📂 Project Structure
```plaintext
Visit-card-ts/
├── public/          # Images used in the project
├── src/             # all source code here
|  ├── assets/       # additionnal files
|  ├── components/   # all components created to form the visit-card
|  ├── data/         # .json files stored here
```

---

## 📥 Installation
**1. Clone the repository :**
```bash
git clone https://github.com/Zeikrom251/visit-card-ts.git
cd your-repo
``` 

**2. Install dependencies :**
```bash
npm install
```

**3. Run the project locally :**
```bash
npm run dev
```

**4. Build for production :**
```bash
npm run build
```

---

## 📤 Deployment
This project can be deployed on Github Pages or platforms like Vercel and Netlify.

### Deploying to Github Pages :
  **1.** Install `gh-pages` :
  ```bash
npm install gh-pages --save-dev
  ```

  **2.** Add the following script to your `package.json` :
  ```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

  **3.** Run the deployment :
  ```bash
npm run deploy
```

  **4.** Go to your repository settings, navigate to **Settigns > Pages**, and enable Github Pages.

---

## ✏️ Author
- Ryan CHIKHI (Zeikrom)

---

If you found this project helpful or inspiring, leave a ⭐ on the repository ! 😊
