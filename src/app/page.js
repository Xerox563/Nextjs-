"use client";
// in order to use hooks make it client component .
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  const navigate1 = (f) => {
    router.push(f);
  };
  const navigate2 = (f) => {
    router.push(f);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Linking and Navigation </h1>
        <Link href={"/Routing"}>Go to Routing Page</Link>
        <br />
        <button onClick={() => router.push("/EventsState")}>
          Go to Components Page
        </button>
        <button onClick={() => navigate("/Routing")}>Go to routing Page</button>
        <button onClick={() => navigate1("/NestedRouting/")}>
          Go to Nested Route
        </button>
        <button onClick={() => navigate2("/NestedRouting/InnerRoute")}>
          Go to Inner Nested Route
        </button>
      </main>
    </div>
  );
}
