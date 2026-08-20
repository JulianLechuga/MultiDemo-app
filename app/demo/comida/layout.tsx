"use client";

import React from "react";
import { ProductProvider } from "@/hooks/useProducts";

export default function ComidaLayout({ children }: { children: React.ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>;
}
