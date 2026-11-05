import { defineConfig, type Plugin } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'node:fs';
import path from 'node:path';

function toonStudioLatestUiPlugin(): Plugin {
  const latestHtmlPath = path.resolve('static/index-latest-ui.html');

  const serveLatestHtml = (req: any, res: any, next: any) => {
    const url = (req.url || '').split('?')[0];
    if (url === '/' || url === '/index.html' || url === '/gizmo_studio_pro.html' || url === '/index-latest-ui.html') {
      if (fs.existsSync(latestHtmlPath)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(fs.readFileSync(latestHtmlPath, 'utf-8'));
        return;
      }
    }
    next();
  };

  return {
    name: 'toon-studio-latest-ui',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use(serveLatestHtml);
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveLatestHtml);
    },
    closeBundle() {
      const buildDir = path.resolve('build');
      if (fs.existsSync(latestHtmlPath) && fs.existsSync(buildDir)) {
        fs.copyFileSync(latestHtmlPath, path.join(buildDir, 'index.html'));
        fs.copyFileSync(latestHtmlPath, path.join(buildDir, '200.html'));
      }
    }
  };
}

export default defineConfig({
  plugins: [toonStudioLatestUiPlugin(), sveltekit()],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
