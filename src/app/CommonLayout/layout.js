"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="mt-4 relative">
      {pathname !== "/EventsState" && (
        <div className="flex space-x-3 mb-6">
          <Link
            className="bg-yellow-600 text-white px-4 py-2 rounded"
            href="/CommonLayout/StudentLogin"
          >
            Student Login
          </Link>
          <Link
            className="bg-purple-600 text-white px-4 py-2 rounded"
            href="/CommonLayout/TeacherLogin"
          >
            Teacher Login
          </Link>
          <Link
            className="bg-green-600 text-white px-4 py-2 rounded"
            href="/EventsState"
          >
            Events Page
          </Link>
        </div>
      )}
      <div className="ml-[210px] mt-[40px]">{children}</div>
    </div>
  );
}
