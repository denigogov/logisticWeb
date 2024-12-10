import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Needed to handle aliases

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/global/scss/_app.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias '@' to 'src'
    },
  },
});
