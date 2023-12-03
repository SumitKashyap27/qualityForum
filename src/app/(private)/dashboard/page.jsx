"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { data } = useSession();
  return <>{"Hii! I am " + data.user.role + "!"}</>;
}
