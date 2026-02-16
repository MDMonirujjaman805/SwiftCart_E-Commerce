# 🛍️ SwiftCart E-Commerce

A simple and responsive e-commerce website built using **HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript**.  
This project dynamically loads products from FakeStore API and allows users to browse products by category, view details in a modal, and add items to a cart.

---

## 🔗 Live Demo

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

# 📘 প্রশ্নগুলোর উত্তর (বাংলায়)

---

## 1️⃣ null এবং undefined এর মধ্যে পার্থক্য কী?

**undefined** তখন হয় যখন কোনো ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু তার মধ্যে কোনো মান দেওয়া হয়নি।  
অর্থাৎ ভেরিয়েবল আছে, কিন্তু সেটির কোনো value এখনো নির্ধারিত হয়নি।

অন্যদিকে **null** একটি ইচ্ছাকৃত মান (intentional value), যা প্রোগ্রামার নিজে সেট করে বোঝাতে যে এখানে কোনো মান নেই।

### উদাহরণ:

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

## Author

MD Moniruzzaman
Frontend Developer (Learning Phase 🚀)
```
