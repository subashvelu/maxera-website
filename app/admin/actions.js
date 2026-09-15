"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticateAdmin(previousState, formData) {
  const accessKey = formData.get("accessKey");
  const expectedKey = process.env.ADMIN_ACCESS_KEY || "maxera-admin";

  if (typeof accessKey !== "string" || accessKey.trim() !== expectedKey) {
    return { error: "The admin access key is incorrect." };
  }

  cookies().set("maxera-admin-session", expectedKey, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  cookies().delete("maxera-admin-session");
  redirect("/");
}
