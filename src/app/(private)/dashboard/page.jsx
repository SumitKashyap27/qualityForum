"use client";

import AdministrationDrawer from "@/app/Components/AdministrationDrawer";
import ResponsiveDrawer from "@/app/Components/Dashboard";
import ViewDashboard from "@/app/Components/ViewDashboard";
import { useSession } from "next-auth/react";

export default function Page() {
  const dashboardArray = [
    { role: "STUDENT", drawer: ["Dashboard", "Feedback", "RaiseAIssue"] },
    { role: "WARDEN", drawer: ["Dashboard", "AddStudent", "ViewIssues"] },
    { role: "DSW", drawer: ["Dashboard"] },
    { role: "SYSADMIN", drawer: ["SysAdminView"] },
    { role: "PARENT", drawer: ["Dashboard"] },
  ];
  const { data } = useSession();
  return (
    <>
      {dashboardArray.map(
        (element, index) =>
          data.user.role === element.role && (
            <AdministrationDrawer
              key={index}
              drawerValue={dashboardArray[index]["drawer"]}
            />
          )
      )}
    </>
  );
}
