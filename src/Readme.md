DigiTools is a modern React-based digital tools marketplace website where users can explore products, view pricing, add items to a cart, remove items, and proceed to checkout through a clean and responsive UI.

## Live Site
[Live Demo](https://hasanalmahmud-b13-a06.netlify.app/)

## GitHub Repository
[GitHub Repo](https://github.com/hamsakib/hasanalmahmud-b13-a06)

## Description
This project was built as a responsive single-page React application based on a Figma design. It includes a navbar with cart count, banner, stats section, product and cart toggling, product cards, cart management, steps section, pricing section, footer, and toast notifications for user actions.

## Technologies Used
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON data

## Core Features
1. **Product & Cart Toggle**
   - Users can switch between Products and Cart sections.
   - Products are visible by default.
   - Cart shows selected items and empty-state message when no item is added.

2. **Cart Functionality**
   - Add products to cart
   - Remove products individually
   - See total cart count in navbar
   - Proceed to checkout clears the cart

3. **Responsive Modern UI**
   - Navbar, banner, stats, products, steps, pricing, and footer
   - Responsive design for desktop, tablet, and mobile
   - Styled according to the provided design direction

## Optional Features Implemented
- Cart count updates dynamically in the navbar
- “Buy Now” button changes to “Added to Cart” after clicking
- Toast messages for add, remove, and checkout actions

## JSON Product Data Structure
Each product contains:
- `id`
- `name`
- `description`
- `price`
- `period`
- `tag`
- `tagType`
- `features`
- `icon`

## How to Run Locally

```bash
npm install
npm run dev