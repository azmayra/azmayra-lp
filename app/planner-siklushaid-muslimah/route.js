import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-dynamic'

export async function GET() {
  const html = readFileSync(join(process.cwd(), 'public', 'planner-siklushaid-muslimah.html'), 'utf8')
  const pixelId = process.env.META_PIXEL_ID_DIGITAL
  const validPixelId = pixelId && /^\d+$/.test(pixelId) ? pixelId : null

  const pixelScript = validPixelId
    ? `<script>
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${JSON.stringify(validPixelId)});
      fbq('track', 'PageView');
      document.addEventListener('click', function(event) {
        if (event.target.closest && event.target.closest('.cta-link')) fbq('track', 'InitiateCheckout');
      }, true);
    </script>`
    : ''

  return new Response(html.replace('<!-- DIGITAL_META_PIXEL -->', pixelScript), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}
