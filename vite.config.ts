import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import terser from "@rollup/plugin-terser";
import javascriptObfuscator from "javascript-obfuscator";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    terser({
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 3,
      },
      mangle: {
        toplevel: true,
      },
    }),
    {
      name: "obfuscate-js",
      closeBundle: () => {
        const outputDir = path.resolve(__dirname, "dist/assets");
        const files = fs.readdirSync(outputDir);

        files.forEach((file) => {
          if (file.endsWith(".js")) {
            const filePath = path.join(outputDir, file);
            const code = fs.readFileSync(filePath, "utf-8");
            const obfuscationResult = javascriptObfuscator.obfuscate(code, {
              compact: false,
              controlFlowFlattening: true,
              controlFlowFlatteningThreshold: 1,
              numbersToExpressions: true,
              simplify: true,
              stringArrayShuffle: true,
              splitStrings: true,
              stringArrayThreshold: 1,
            });
            fs.writeFileSync(
              filePath,
              obfuscationResult.getObfuscatedCode(),
              "utf-8"
            );
          }
        });
      },
    },
  ],
  build: {
    minify: "terser",
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
    },
  },
});
