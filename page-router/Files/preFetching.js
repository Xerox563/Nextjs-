/*
 * PreFetching is a mechanism for automatically loading the page code and data in the background before a user navigates to a new route.


How Prefetching Works in Next.js
Automatic Link Prefetching:
When you use the Next.js <Link> component to navigate between pages, Next.js automatically prefetches the JavaScript for the linked page in the background (when the link is visible in the viewport).

* code 
import Link from 'next/link';

export default function Home() {
  return (
    <Link href="/about">About</Link>
  );
}
When this link scrolls into view, Next.js will prefetch the code for /about.

* Disabling Prefetching:
You can turn off prefetching for a specific link using the prefetch={false} prop:

* code
<Link href="/about" prefetch={false}>
  About
</Link>

 */
