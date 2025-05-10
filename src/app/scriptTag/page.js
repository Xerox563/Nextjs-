const page = () => {
  return (
    <div>
      <h1>Hello </h1>
    </div>
  );
};

export default page;

/*
* ✅ Why Use <Script> from next/script (Recommended)
⚡ Performance-Optimized Loading
Loads scripts asynchronously without blocking page rendering.
Offers different strategy options for when the script should run.

📈 SEO-Friendly
Ensures that scripts don't interfere with the loading of core content, which improves SEO and Core Web Vitals.

🚀 Built-in Code Splitting
Only loads the script on pages where it's needed (if used conditionally).

🛡️ Prevents Render Blocking
Unlike normal scripts, it doesn’t block rendering while the script loads.

📊 Analytics-Ready
Ideal for integrating tools like Google Analytics, Facebook Pixel, etc., using afterInteractive or lazyOnload.

🧱 Runs in App & Pages Router
Works seamlessly with both file structures.

✅ Safer Inline Scripts
Prevents duplication and offers scope control using the id attribute.

🌐 Avoids Double Loading or Race Conditions
Helps control execution order and avoids issues caused by conflicting scripts.

* ❌ Problems with Regular <script> Tag (Not Recommended)
⏳ Blocks Rendering
Scripts in the <head> can block the HTML parsing and delay page load.

🔗 Loads Immediately
No control over when it executes (always loads during initial render).

❌ Not Framework-Aware
Doesn’t respect Next.js rendering lifecycle (hydration, SSR, etc.).

⚠️ Manual Control
You have to manually ensure scripts don’t conflict or reload incorrectly.

🚫 No Optimization or Lazy Loading
Unlike Next.js <Script>, you don’t get lazy loading or worker support out of the box.

🔐 Security Risks with Inline Code
If not handled properly, can introduce security or CSP issues.

❎ Harder to Debug
Hard to track which script ran when and where.
 */
