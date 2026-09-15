import { cookies } from "next/headers";
import AdminAccessGate from "../../components/admin/AdminAccessGate";

export default function AdminLayout({ children }) {
  const adminCookie = cookies().get("maxera-admin-session")?.value;
  const expectedKey = process.env.ADMIN_ACCESS_KEY || "maxera-admin";

  if (adminCookie !== expectedKey) {
    return <AdminAccessGate />;
  }

  return children;
}
