"use client";
import React, { useContext } from "react";
import { UserContext } from "./contextApi/contextApi/userContext";
import { CircleLoader, RotateLoader } from "react-spinners";

// Below of Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./reduxStore/reduxStore/features/Theme/themeSlice";
import {
  increement,
  decreement,
} from "./reduxStore/reduxStore/features/Counter/counterSlice";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="">
      {/* Using Context API */}
      <UserList />
      {/* Using Redux */}
    </div>
  );
}

// Using Context API
const UserList = () => {
  const users = useContext(UserContext);

  if (!users || users.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircleLoader color="purple" size={70} />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-blue-300 shadow-md rounded-xl p-12  border border-gray-200"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

// Using Redux
const Counter = () => {
  const dispatch = useDispatch();

  // 🔄 Get values from Redux
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.mode);

  // 🖍 Apply theme to <body> based on Redux state
  useEffect(() => {
    document.body.className = theme; // either "light" or "dark"
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 transition-all duration-300">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increement())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decreement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>
      </div>

      <div className="pt-6">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};
