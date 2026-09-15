import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase-server";

export async function GET() {
  try {
    const supabaseAdmin = getSupabaseAdmin();
    const result = await supabaseAdmin.from("orders").select("*").order("created_at", { ascending: false });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ orders: result.data || [] });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to load orders." }, { status: 500 });
  }
}
