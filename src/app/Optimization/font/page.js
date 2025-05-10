import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Optim() {
  return (
    <div>
      <h1>Font Optimization in Next.js</h1>
      <h1 className={roboto.className}>Font with Next.js Font Optimization.</h1>
    </div>
  );
}

// ✅ With next/font (like above), fonts are:
// - Downloaded at build time
// - Self-hosted by Next.js
// - Served directly from your own server, not fetched from Google at runtime
// ❌ No network request is made to fonts.googleapis.com or fonts.gstatic.com
// ✅ This improves performance, privacy, and avoids layout shift (FOIT/FOUT)

// extra request jo har page load pr jaa rhi hoti hai vo avoid ho jaati hai and usign nextjs font , fonts are maintained in the cache.
