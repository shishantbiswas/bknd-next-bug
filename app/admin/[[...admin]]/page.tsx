"use client"
import "bknd/dist/styles.css";
import { Admin } from "bknd/ui";

export default function AdminPage() {
  return (
    <Admin
      config={{
        basepath: "/admin",
        logo_return_path: "/../",
        theme: "system",
      }}
    />
  );
}