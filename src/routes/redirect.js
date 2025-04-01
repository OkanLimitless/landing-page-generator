import { handleRedirect, generateRedirectPage } from '../lib/redirects.js';

/**
 * Route handler for redirect paths
 * @param {Request} req - The request object
 * @returns {Response} The response object
 */
export async function GET(req) {
  const url = new URL(req.url);
  const targetUrl = handleRedirect(url.pathname);
  const gtagId = process.env.GOOGLE_TAG_ID || '';
  
  const html = generateRedirectPage(targetUrl, gtagId);
  
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
} 