"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <section>
      <h1>useRouter</h1>
      <Link href="/projects">Projects</Link>
      <button
        className="border px-2 py-4 rounded-lg"
        onClick={() => navigate("about")}
      >
        Go to About Page
      </button>
      <button
        className="border px-2 py-4 rounded-lg"
        onClick={() => navigate("register")}
      >
        Go to Login Page
      </button>
    </section>
  );
};

export default Home;
