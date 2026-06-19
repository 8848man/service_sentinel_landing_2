import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body?.email ?? "").trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const { error } = await getSupabase().from("waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "Email already registered" }, { status: 400 });
      }
      throw error;
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
