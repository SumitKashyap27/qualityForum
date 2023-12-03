"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  const { data, status } = useSession();
  console.log(status);
  if (status === "loading") {
    return <>Loading</>;
  }
  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    redirect("/");
  }
}
