# 🛍️ SwiftCart E-Commerce

A simple and responsive e-commerce website built using **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript**.  
This project dynamically loads products from FakeStore API and allows users to browse products by category, view details in a modal, and add items to a cart.

---

## 🔗 Live Demo

https://swift-cart-e-commerce-livid.vercel.app/

---

## 📁 GitHub Repository

https://github.com/MDMonirujjaman805/SwiftCart_E-Commerce

---

## 🚀 Features

- Responsive Navbar with Cart Count
- Hero Section with CTA Button
- Dynamic Category Loading from API
- Products Loaded by Category
- Product Cards with:
  - Image
  - Title
  - Price
  - Category
  - Rating
  - Details Button
  - Add to Cart Button
- Product Details Modal
- Add to Cart Functionality
- Cart Count Update
- LocalStorage Support
- Newsletter Section
- Footer Section
- Fully Responsive Layout

---

## 🛠️ Technology Used

- HTML5
- Tailwind CSS
- DaisyUI
- Vanilla JavaScript (ES6)
- FakeStore API

---

## 📦 API Endpoints Used

- All Products  
  https://fakestoreapi.com/products

- All Categories  
  https://fakestoreapi.com/products/categories

- Products by Category  
  https://fakestoreapi.com/products/category/${category}

- Single Product Details  
  https://fakestoreapi.com/products/${id}

---

## ⚙️ How to Run This Project

1. Clone the repository:
   ```bash
   git clone https://github.com/MDMonirujjaman805/SwiftCart_E-Commerce
   ```

---

# 📘 JavaScript Concepts: Q&A

জাভাস্ক্রিপ্টের কিছু গুরুত্বপূর্ণ ইন্টারভিউ প্রশ্ন এবং সেগুলোর উত্তর নিচে আলোচনা করা হলো।

---

### 1️⃣ null এবং undefined এর মধ্যে পার্থক্য কী?

| বৈশিষ্ট্য  | undefined                                                           | null                                                           |
| :--------- | :------------------------------------------------------------------ | :------------------------------------------------------------- |
| **সংজ্ঞা** | ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান (value) দেওয়া হয়নি। | এটি একটি ইচ্ছাকৃত মান, যা বোঝায় যে ভেরিয়েবলটি বর্তমানে খালি। |
| **ধরণ**    | এটি জাভাস্ক্রিপ্টের একটি ডিফল্ট সিস্টেম স্টেট।                      | এটি প্রোগ্রামার নিজে সেট করেন।                                 |
| **Type**   | `typeof undefined` হচ্ছে `undefined`                                | `typeof null` হচ্ছে `object`                                   |

---

### 2️⃣ map() এবং forEach() এর মধ্যে পার্থক্য কী?

- **map():** এটি একটি অ্যারের প্রতিটি উপাদানের উপর কাজ করে এবং একটি **নতুন অ্যারে** রিটার্ন করে। অরিজিনাল অ্যারে পরিবর্তন হয় না।
- **forEach():** এটি প্রতিটি উপাদানের উপর কাজ করে কিন্তু কিছু **রিটার্ন করে না**। এটি মূলত শুধু লুপ চালানোর জন্য ব্যবহৃত হয়।

**পার্থক্য:** যখন আপনার নতুন কোনো পরিবর্তিত অ্যারে দরকার হয় তখন `map()` ব্যবহার করা উত্তম, আর যখন শুধু ডেটা প্রদর্শন বা অন্য কোনো কাজ (যেমন ডাটাবেজে সেভ করা) করতে হয় তখন `forEach()` ব্যবহার করা হয়।

---

### 3️⃣ == এবং === এর মধ্যে পার্থক্য কী?

- **== (Loose Equality):** এটি শুধুমাত্র ভেরিয়েবলের **মান (Value)** তুলনা করে। প্রয়োজনে টাইপ কনভার্ট করে নেয়।
- **=== (Strict Equality):** এটি মান এবং **ডেটা টাইপ (Data Type)** দুটোই তুলনা করে।

**উদাহরণ:**

```javascript
5 == "5"; // true (কারণ শুধু মান সমান)
5 === "5"; // false (কারণ একটি Number অন্যটি String)
```

---

## 4️⃣ API fetch করার ক্ষেত্রে async/await এর গুরুত্ব কী?

জাভাস্ক্রিপ্ট ডিফল্টভাবে সিনক্রোনাস। কিন্তু API থেকে ডাটা আসতে সময় লাগে। async/await এর গুরুত্ব হলো:

Readable Code: এটি এসিনক্রোনাস কোডকে দেখতে সিনক্রোনাস কোডের মতো সহজ করে তোলে।

Execution Control: await কিউওয়ার্ড ব্যবহার করলে কোড ততক্ষণ অপেক্ষা করে যতক্ষণ না ডাটা সফলভাবে আসে।

Error Handling: try...catch ব্লক ব্যবহার করে খুব সহজে এরর হ্যান্ডেল করা যায়।

---

## 5️⃣ JavaScript এ Scope ব্যাখ্যা করো

স্কোপ নির্ধারণ করে আপনার কোডের কোন অংশ থেকে কোন ভেরিয়েবল অ্যাক্সেস করা যাবে।

Global Scope: ভেরিয়েবল যদি কোনো ফাংশন বা ব্লকের বাইরে ডিক্লেয়ার করা হয়, তবে তা পুরো প্রোগ্রামের যেকোনো জায়গা থেকে ব্যবহার করা যায়।

Function Scope: কোনো ফাংশনের ভেতর var দিয়ে ডিক্লেয়ার করা ভেরিয়েবল শুধুমাত্র ওই ফাংশনের ভেতরেই কাজ করে।

Block Scope: let এবং const দিয়ে ডিক্লেয়ার করা ভেরিয়েবলগুলো শুধুমাত্র তাদের নির্দিষ্ট { } ব্লকের ভেতর সীমাবদ্ধ থাকে (যেমন: if-else বা for loop)।

---

## Author

# MD Monirujjaman
