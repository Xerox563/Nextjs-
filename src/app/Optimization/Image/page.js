import Image from "next/image";
import Pict from "../../../public/nature.png";
// Image Optimization
export default function Asset() {
  //   console.log(Pict);
  return (
    <div>
      <h1>Image Optimization</h1>
      <Image src={Pict} alt="Not Loaded" />
      {/* <img src={Pict} width={300} height={200} alt="Not Loaded" /> */}
    </div>
  );
}

// img ka size screen size bdaane pr bdta rehta hai on the other hand Image (nextjs) waali intact rehti hai
// nextjs image waali component pr lazy load and other feature addon krta hai
// nextjs security bhi provide krta hai (you have to register domains )

// export function generateMetadata() {
//   return (
//     title:"Image Optimization",
//     description:"Optimizing Image using next/image (Image Component)"
//   )
// }

/* 
  * Image Optimization
  Why its needed ? 
  -> Load Slowly
  -> Use more data
  -> feel laggy to load and website to work slow .
  --------------------------------------------------------
✅ 1. Lazy Loading (Automatic)
What it is: Don't load images until they are about to be seen.
📦 Why it helps: Speeds up initial page load
✅ 2. Responsive Image Sizing
What it is: Automatically load different image sizes based on device/screen width.
📱 Mobile gets small images
💻 Desktop gets big images
🛠️ Done automatically using sizes, fill, or CSS
* Code 
<div style={{ position: 'relative', width: '100%', height: '400px' }}>
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
✅ 3. WebP / AVIF Support
What it is: Newer image formats that are smaller and faster than JPEG/PNG.
🛠️ In Next.js:
Automatically converts to WebP or AVIF if the browser supports it.
✅ 4. CDN & Performance Optimization
What it is: Your images are automatically optimized and served from a fast global network (CDN).

On Vercel:
It’s automatic and works out of the box.
Images load from nearby servers (Edge Network) = 🔥 speed.

* Font Optimization 
🅰️ Why Font Optimization Matters
-> Fonts can slow down your site if they’re:
-> Loaded from external sources (like Google Fonts)
-> Not cached properly
-> Causing "FOIT" (Flash of Invisible Text) or "FOUT" (Flash of Unstyled Text)
🔧 Next.js solves this by giving you optimized, built-in font handling through next/font.
✅ Built-in Font Optimization (Next.js 13+)
Instead of adding fonts manually in <link> tags, you use:
Code : import { Inter } from "next/font/google";
This gives:
🚀 Faster font loading (self-hosted)
🛡️ Better privacy (no Google font CDN calls)
🎨 No layout shifts or font flashes
 */
