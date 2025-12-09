import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // 💥 CRITICAL FIX: Add define to resolve '__BASE_PATH__ is not defined' error
  // This variable is required by some React/Vite internal libraries but is sometimes missed 
  // when using non-standard configurations like base: './'.
  define: {
    // We set it to the root path string literal.
    '__BASE_PATH__': JSON.stringify('/'),
  },

  // Setting the 'base' to './' ensures that all bundled asset paths (like CSS, JS)
  // are generated as relative paths instead of absolute paths (starting with /).
  // This is required for local serving (serve out) and deployment on many shared hosts.
  base: './', 
  
  plugins: [react()],

  // Ensure the build output directory is 'out' to match your serve commands
  build: {
    outDir: 'out',
    // The previous deployment issue showed a failure in cleanup.
    // If you encounter an error during 'npm run build', set this to true:
    // emptyOutDir: true, 
  },
})