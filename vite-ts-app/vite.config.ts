import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "vite-plugin-typescript";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript()],

  optimizeDeps: {
    exclude: [
      "three/examples/jsm/controls/DeviceOrientationControls",
      "use-asset",
      "three/examples/jsm/modifiers/SubdivisionModifier",
      "three/examples/js/libs/stats.min",
    ],
  },
});
