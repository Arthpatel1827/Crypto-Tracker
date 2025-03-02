# Crypto Price Tracker (Next.js 14 + App Router + React Query + TypeScript + CSS Modules)

## 🚀 Overview
This is a **Crypto Price Tracker** built with **Next.js (App Router)**, **React Query**, **TypeScript**, and **CSS Modules**. It fetches live cryptocurrency prices from CoinGecko and displays them in a table with search and manual refresh functionalities.

## 🛠️ Tech Stack
- **Next.js 14** (App Router)
- **React Query** (for API calls & caching)
- **TypeScript**
- **CSS Modules** (for styling)
- **CoinGecko API** (for fetching crypto data)

## 📂 Folder Structure
```
/app
    layout.tsx       # Server Component (Wraps entire app)
    providers.tsx    # Client Component (React Query Provider)
    page.tsx         # Home page (uses React Query)
/components         # UI components (CryptoTable, SearchBar, RefreshButton)
/styles             # CSS Modules for styling
/utils              # API fetch functions
/types              # Type definitions
```

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/crypto-tracker.git
cd crypto-tracker
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

## 🔑 Key Features
- Fetch live crypto prices from CoinGecko
- Search functionality to filter cryptocurrencies
- Manual refresh button to update prices
- React Query for efficient API management
- App Router optimized for Next.js 14
- Fully typed with TypeScript
- Styled using CSS Modules

## 📝 License
This project is open-source under the MIT License.

## 💬 Questions or Suggestions?
Feel free to open an issue or reach out! 🚀

