import { defineConfig } from "vitest/config";


// https://vite.dev/config/
export default defineConfig({
 test: {
    environment: "jsdom",       // IMPORTANT: active un DOM pour testing-library
    globals: true,              // optionnelle : permet d'utiliser describe/it sans import
    setupFiles: "./tests/setupTests.js", // fichier d'initialisation (optionnel mais recommandé)
    watch: true
  },
})
