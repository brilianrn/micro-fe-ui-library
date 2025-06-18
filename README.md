# @goapotik/ui

Reusable **React UI Component Library** built with **TypeScript** and **shadcn/ui** conventions.\
Designed for use across multiple **microfrontend** applications to ensure consistent design and development experience.

---

## ✨ Features

- ✅ Reusable React components (Atoms & Molecules)
- ✅ Built with **TypeScript** and **full type definitions**
- ✅ Structured with **shadcn/ui** conventions
- ✅ Integrated **Tailwind CSS**
- ✅ Ready for **npm** publishing (private or public)
- ✅ Designed to be used in **microfrontend** architectures

---

## 📦 Installation

```bash
npm install @goapotik/ui
```

---

## 🔧 Usage

```tsx
import { Button } from '@goapotik/ui'

export const Example = () => {
  return (
    <Button variant="default" size="sm">
      Click Me
    </Button>
  )
}
```

---

## 📁 Folder Structure

```
src/
├── index.ts               # Entry point → export everything
└── components/
    ├── atoms/             # Basic components (direct from shadcn/ui)
    │   ├── button/
    │   │   └── index.tsx
    │   └── index.ts
    └── molecules/         # Custom composed components
        ├── button/
        │   └── index.tsx
        └── index.ts
```

---

## ⚙️ Development

```bash
npm install
npm run build
```

- **Build output:** → `/dist/`
- Formats: **ESM** & **CJS**
- Includes: **.d.ts** declaration files

---

## 🚀 Publishing

```bash
npm publish --access public
npm publish --access restricted
```

---

## 🛠️ Tooling & Conventions

- **TypeScript** → Strict mode enabled
- **Tsup** → Bundler
- **ESLint + Prettier** → Linting & formatting
- **Husky + lint-staged** → Pre-commit hook
- **Tailwind CSS** → Utility-first CSS styling

---

## 📜 License

MIT

---

## 🔗 Used by:

- `main-app`
- `product-app`
- Other microfrontend projects within the organization
