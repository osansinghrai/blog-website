"use client";

import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Header />
      <Bloglist />
      <Footer />
    </div>
  );
}
