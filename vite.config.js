import react from '@vitejs/plugin-react'

const config = {
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['@testing-library/jest-dom'],
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
}

export default config
