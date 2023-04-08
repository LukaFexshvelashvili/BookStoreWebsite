import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/BookStoreWebsite/",
  plugins: [react()],
  server: {
    host: true,
  },
});
