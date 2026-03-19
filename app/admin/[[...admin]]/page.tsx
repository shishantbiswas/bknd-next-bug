"use client"
import { Admin } from "./page.client";
import { Suspense } from "react";
import "bknd/dist/styles.css";

export default function AdminPage() {
  return (
    <Suspense>
      <Admin
        config={{
          basepath: "/admin",
          logo_return_path: "/../",
          theme: "system",
        }}
      />
    </Suspense>
  );
}