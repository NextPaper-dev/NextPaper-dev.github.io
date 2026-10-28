# NextPaper.dev — Official Landing Page

<div align="center">
  <img src="public/assets/nextpaper-logo.jpg" alt="NextPaper.dev" width="480" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" />
  <br /><br />
  <p><strong>Architects of High-Performance Systems & Scalable Commerce Infrastructure</strong></p>
  <p>
    <a href="https://nextpaper.dev"><strong>nextpaper.dev</strong></a> • 
    <a href="https://github.com/NextPaper-dev">GitHub Organization</a> • 
    <a href="https://github.com/Storesdz">StoresDZ Flagship</a>
  </p>
</div>

---

## ⚡ Overview

**NextPaper.dev** is a high-profile systems development studio and engineering collective. We engineer mission-critical distributed architectures, hyper-fast Rust edge runtimes, and flagship multi-tenant SaaS platforms.

This repository powers the official public landing page for NextPaper, crafted with **Astro 5**, **React 19 (JSX/TSX)**, and **Tailwind CSS**, featuring a Vercel-inspired dark engineering aesthetic fused with NextPaper's physical origami metallic visual identity.

---

## 🏆 Flagship Feature: StoresDZ

NextPaper's current flagship software product is **StoresDZ** — a high-throughput, multi-tenant e-commerce platform engineered with:
- **Go Commerce Core (`Storesdz/storesdz`)**: Gin web engine, PostgreSQL connection pools via `pgx`, type-safe SQL query generation via `sqlc`, Casbin RBAC, and NATS JetStream event mesh.
- **Rust Liquid Compiler & Edge Funnel (`Storesdz/liquid-renderer` & `Storesdz/funnel-server`)**: Sub-millisecond static HTML synthesis from Liquid templates.
- **Zero-Dependency Funnel SDK (`Storesdz/funnel-sdk`)**: 12KB browser SDK for lightning-fast checkout conversions and carrier contract integration.
- **Merchant Admin Dashboard (`Storesdz/storesdzdash`)**: React + Vite + Shadcn UI with Monaco code editor and automated AliExpress scraping queues.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation with Island Architecture)
- **UI Components**: [React 19](https://react.dev/) JSX / TSX
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom NextPaper dark mode palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Visual Design**:
  - Deep obsidian canvas (`#07080a`, `#0d0f14`)
  - Folded paper metallic gradients (`#f8fafc` to `#64748b`)
  - Electric Cyan (`#00e5ff`) and Warm Amber (`#ff6b00`) dual-glow signatures

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node.js v24)
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/NextPaper-dev/nextpaper.dev.git
cd nextpaper.dev

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production

```bash
npm run build
```

The compiled, production-ready static assets will be located in the `dist/` directory.

---

## 🏛️ License

Proprietary © NextPaper.dev. All rights reserved.
