"use client";

import AdministrationDrawer from "@/app/Components/AdministrationDrawer";
import ResponsiveDrawer from "@/app/Components/Dashboard";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
  return (
    <>
      {/*  Student <ResponsiveDrawer /> */}
      <AdministrationDrawer />
    </>
  );
}
