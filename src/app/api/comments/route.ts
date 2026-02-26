import { NextResponse } from "next/server";

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const COMMENTS_SHEET_NAME = "Comentarios";
const API_KEY = process.env.GOOGLE_API_KEY || "";

// GET: Fetch all comments
export async function GET() {
  try {
    if (!SHEET_ID || !API_KEY) {
      // Return fallback
      return NextResponse.json([
        {
          name: "María Elena García",
          location: "Felipe Carrillo Puerto",
          message:
            "Necesitamos que el sur deje de ser olvidado. Aquí hay gente trabajadora y cultura rica.",
          date: "12 Feb 2026",
        },
      ]);
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${COMMENTS_SHEET_NAME}?key=${API_KEY}`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return NextResponse.json([]);

    const data = await res.json();
    const rows = data.values;

    if (!rows || rows.length < 2) return NextResponse.json([]);

    const headers = rows[0];
    const comments = rows.slice(1).map((row: string[]) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, i: number) => {
        obj[header.toLowerCase().trim()] = row[i] || "";
      });
      return obj;
    });

    return NextResponse.json(comments.reverse()); // Newest first
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

// POST: Add a new comment via Google Apps Script
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, location, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Nombre y mensaje son requeridos" },
        { status: 400 }
      );
    }

    const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (APPS_SCRIPT_URL) {
      // Send to Google Apps Script web app to write to sheet
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          location: location || "Quintana Roo",
          message,
          date: new Date().toLocaleDateString("es-MX"),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error al guardar comentario" },
      { status: 500 }
    );
  }
}
