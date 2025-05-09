/*
*✅ Server Components
-> Default in App Router – these are rendered on the server.

Characteristics:
-> Rendered on the server, sent to the client as static HTML + data.
-> Can fetch data directly (e.g., from a database) without exposing credentials.
-> Cannot use browser-only APIs (like window, document, or event handlers).
-> Smaller bundle size since they aren’t sent to the client as JavaScript.

Use Cases:
-> Data fetching and rendering content that doesn't need to update interactively.
-> Static or dynamic pages that don’t need interactivity (like blog posts or product pages).
-> Good for SEO + security (Good for fetching Data)

* ✅ Client Components
-> Explicitly marked using "use client" directive.

Characteristics:
-> Rendered on the client, and needed when using interactivity.
-> Can use state (useState, useEffect), context, refs, etc.
-> Required for event handling like clicks, forms, animations.

Use Cases:
-> Interactive UI elements (buttons, inputs, modals, dropdowns).
-> Components requiring client-only libraries (e.g., charts, maps, localStorage).
*/
