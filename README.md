# Calculator
A minimalist calculator app that can perform basic math operations. [Technical specifications](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f).

# Tech stack
- Webpack — bundling and development server
- HTMLWebpackPlugin — HTML generation and optimization
- Babel — JavaScript transpilation
- Sass + PostCSS — styling and CSS preprocessing
- ESLint + Prettier — linting and code formatting
- Husky + lint-staged — Git hooks and pre-commit checks

# Initialization
Clone the repository and install dependencies:
```
git clone https://github.com/Tereshchenko-Trin/Calculator.git
cd calculator
npm install
```

# Build instructions

**Development mode.**
The application will be available at `http://localhost:3000` (with hot reload).
```
npm run dev
```

**Production build.**
The assembly is generated in the `dist` folder.
```
npm run build
```

Watch mode.
Watch files and rebuild on changes.
```
npm run watch
```

# Additional scripts
Lint JS files using ESLint:
```
npm run lint
```

Format code using Prettier:
```
npm run format
```
Pre-commit checking via Husky and lint-staged is performed automatically.

# File structure
```
calculator/
|── src/
│   |── index.js             # Entry point
│   |── styles/              # SCSS files
│   |── modules/             # JS modules
│   |── assets/              # Fonts, icons and etc.
|
|── public/
│   |── index.html           # HTML template
|
|── dist/                    # Build output (auto-generated)
|── webpack.config.cjs       # Webpack configuration
|── .eslintrc.config.js      # ESLint config
|── .prettierrc.json         # Prettier formatting rules
|── README.md                # Progect documentation
```
