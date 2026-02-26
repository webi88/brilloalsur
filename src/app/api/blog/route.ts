import { NextResponse } from "next/server";

// Google Sheets API - Public spreadsheet as database
// To use: Create a Google Sheet with columns: title, excerpt, category, date, readTime, image
// Then publish it to web and use the sheet ID here

const SHEET_ID = process.env.GOOGLE_SHEET_ID || "";
const BLOG_SHEET_NAME = "Blog";
const API_KEY = process.env.GOOGLE_API_KEY || "";

async function fetchSheetData(sheetName: string) {
  if (!SHEET_ID || !API_KEY) {
    return null;
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 300 } }); // Cache 5 min
  if (!res.ok) return null;
  const data = await res.json();
  return data.values;
}

export async function GET() {
  try {
    const rows = await fetchSheetData(BLOG_SHEET_NAME);

    if (!rows || rows.length < 2) {
      // Return fallback data if no Google Sheets configured
      return NextResponse.json([
        {
          title: "El Tren Maya como catalizador del desarrollo en el sur",
          excerpt:
            "Un análisis sobre cómo la infraestructura de conectividad puede transformar las oportunidades económicas de la región sur de Quintana Roo.",
          category: "Infraestructura",
          date: "15 Feb 2026",
          readTime: "5 min",
          image: "",
        },
        {
          title: "Bacalar: turismo sustentable como modelo de crecimiento",
          excerpt:
            "La Laguna de los Siete Colores es un tesoro natural. Exploramos cómo el turismo responsable puede generar empleo sin destruir el ecosistema.",
          category: "Turismo",
          date: "10 Feb 2026",
          readTime: "7 min",
          image: "",
        },
        {
          title: "Educación y empleo: las claves para cerrar la brecha",
          excerpt:
            "El sur de Quintana Roo necesita inversión en capital humano. Analizamos las propuestas más prometedoras.",
          category: "Educación",
          date: "5 Feb 2026",
          readTime: "6 min",
          image: "",
        },
      ]);
    }

    // First row = headers, rest = data
    const headers = rows[0];
    const posts = rows.slice(1).map((row: string[]) => {
      const obj: Record<string, string> = {};
      headers.forEach((header: string, i: number) => {
        obj[header.toLowerCase().trim()] = row[i] || "";
      });
      return obj;
    });

    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
