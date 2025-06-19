/* 
Code splitting is a crucial performance optimization technique in modern web development, particularly in Next.js applications. It involves breaking down your application's code into smaller, more manageable chunks, which can then be loaded on demand. This technique significantly enhances the performance and user experience by reducing the initial load time of your application. In this article, we'll dive deep into what code splitting is, how it works in Next.js, and provide example code to illustrate its implementation.

Understanding Code Splitting
At its core, code splitting is about dividing your application's codebase into smaller pieces or chunks. Instead of loading the entire application upfront, these chunks are loaded as needed, such as when a user navigates to a new route or interacts with a specific feature. This approach ensures that the initial load time is minimized, and only the necessary code is fetched and executed.

In a traditional web application, all JavaScript files are bundled together into one large file, which is then sent to the client's browser. This can lead to long loading times, especially for large applications. Code splitting addresses this issue by creating multiple bundles that are loaded on demand, significantly improving the performance and responsiveness of your application.

How Code Splitting Works in Next.js
Code splitting is a performance optimization technique that divides your application's code into smaller, more manageable chunks. Next.js provides built-in support for code splitting, making it straightforward to implement and enhance your application's performance. Here’s a detailed look at how code splitting works in Next.js:

* Automatic Code Splitting
Next.js automatically splits code at the page level. Each page in a Next.js application is compiled into a separate JavaScript file, which is loaded only when the user navigates to that specific page. This reduces the initial load time and ensures that only the necessary code is loaded for each page.

Example:

Consider a Next.js application with three pages: index.js, about.js, and contact.js. Each of these pages will be split into separate JavaScript bundles.

/pages/index.js
/pages/about.js
/pages/contact.js
When a user navigates to the homepage (index.js), only the JavaScript code for that page is loaded. If the user then navigates to the About page (about.js), the JavaScript for the About page is loaded, without reloading the entire application.

* Dynamic Imports
In addition to automatic page-level code splitting, Next.js supports dynamic imports, allowing you to split code at the component level. This is particularly useful for loading large components or third-party libraries only when needed.

Example:

// components/HeavyComponent.js
const HeavyComponent = () => {
  return <div>This is a heavy component!</div>;
};

export default HeavyComponent;

// pages/index.js
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import the HeavyComponent
const DynamicHeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Hide' : 'Show'} Heavy Component
      </button>
      {showComponent && <DynamicHeavyComponent />}
    </div>
  );
}
In this example, HeavyComponent is only loaded when the user clicks the button. Until then, the code for HeavyComponent is not included in the initial bundle, reducing the initial load time.

Optimizing Third-Party Libraries
Sometimes, third-party libraries can significantly increase your bundle size. Using dynamic imports, you can load these libraries only when they are needed.

Example:

// pages/chart.js
import dynamic from 'next/dynamic';

// Dynamically import a heavy charting library
const Chart = dynamic(() => import('react-chartjs-2'), { ssr: false });

export default function ChartPage() {
  return (
    <div>
      <h1>Chart Example</h1>
      <Chart data={...} options={...} />
    </div>
  );
}
In this example, the react-chartjs-2 library is only loaded when the ChartPage is accessed, ensuring that the initial bundle remains lightweight.

* Splitting by Routes
Splitting by routes is a built-in feature of Next.js that automatically splits your application’s code at the page level. Each page in your Next.js application is compiled into a separate JavaScript file, which is loaded only when the user navigates to that specific page. This approach ensures that the initial load time is reduced and only the necessary code is loaded for each route.

When you create a new page in the pages directory, Next.js automatically creates a separate chunk for that page. This chunk is loaded dynamically when the user visits the route corresponding to that page. For example, if you have the following structure:

/pages
  - index.js
  - about.js
  - contact.js
Next.js will generate separate JavaScript files for each page:

index.js -> /static/chunks/pages/index.js
about.js -> /static/chunks/pages/about.js
contact.js -> /static/chunks/pages/contact.js
When a user navigates to /about, only the JavaScript for about.js is loaded, reducing the initial bundle size and improving load time.

Example: Automatic Route-Based Code Splitting
Here’s a simple example to illustrate how Next.js handles route-based code splitting automatically.

File Structure :

/pages
  - index.js
  - about.js
  - contact.js
pages/index.js
const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;
pages/about.js
const AboutPage = () => {
  return <h1>About Page</h1>;
};

export default AboutPage;
pages/contact.js
const ContactPage = () => {
  return <h1>Contact Page</h1>;
};

export default ContactPage;

* Vendor Splitting in Next.js
Vendor splitting in Next.js is a technique used to optimize the loading performance of a web application by separating third-party libraries (vendors) from the main application code. This helps in reducing the initial load time and enables better caching strategies. Here's a guide on how to implement vendor splitting in a Next.js application:

*/

/*
How Code Splitting Works 🤔

Dynamic Imports (import()):
Next.js leverages dynamic imports using import() to split code into smaller bundles. Instead of loading all JavaScript files upfront, dynamic imports allow components or modules to be loaded asynchronously when they are needed.


2. Splitting by Routes:

In Next.js, code splitting is done automatically based on routes. Each page component in the pages directory becomes a separate chunk of JavaScript. When a user navigates to a specific route, only the JavaScript necessary for that route is loaded.

3. Vendor Splitting:

Next.js also performs vendor splitting by default. Dependencies node_modules are separated into a vendor bundle. This means that common libraries like React or lodash are placed in a separate chunk, which can be cached by the browser for faster subsequent loads.
*/
