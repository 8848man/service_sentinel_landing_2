import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email ?? "").trim().toLowerCase();
    const message: string = (body?.message ?? "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const { error } = await getSupabase().from("contact_messages").insert({ email, message });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
