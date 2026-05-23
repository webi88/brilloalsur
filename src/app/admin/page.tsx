"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Upload, X, Loader2, Eye, EyeOff } from "lucide-react";

const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
function todayFormatted() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,"0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function slugify(t: string) {
  return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-");
}

function parseContent(text: string, infoUrl: string, infoPos: number): string {
  const blocks = text.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);
  const result: string[] = [];
  let cCount = 0;

  const inline = (s: string) =>
    s.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>");

  for (const block of blocks) {
    let html = "";
    if (block.startsWith("## ")) {
      html = `<h2>${inline(block.slice(3))}</h2>`;
    } else if (block.startsWith("### ")) {
      html = `<h3>${inline(block.slice(4))}</h3>`;
    } else if (block.split("\n").every(l => /^[-•]\s/.test(l.trim()))) {
      const items = block.split("\n").map(l => `        <li>${inline(l.replace(/^[-•]\s/,""))}</li>`).join("\n");
      html = `<ul>\n${items}\n      </ul>`;
    } else if (block.split("\n").every(l => /^\d+\.\s/.test(l.trim()))) {
      const items = block.split("\n").map(l => `        <li>${inline(l.replace(/^\d+\.\s/,""))}</li>`).join("\n");
      html = `<ol>\n${items}\n      </ol>`;
    } else {
      html = `<p>${inline(block.replace(/\n/g," "))}</p>`;
    }
    result.push(html);
    if (!block.startsWith("#")) {
      cCount++;
      if (cCount === infoPos && infoUrl) {
        result.push(
          `<figure style="margin: 2rem 0;">\n        <img src="${infoUrl}" alt="Infografía del artículo" style="width:100%; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.12);" />\n      </figure>`
        );
      }
    }
  }
  return "\n      " + result.join("\n\n      ") + "\n    ";
}

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Desarrollo");
  const [date, setDate] = useState(todayFormatted());
  const [readTime, setReadTime] = useState("7 min");
  const [content, setContent] = useState("");
  const [infoPos, setInfoPos] = useState(3);

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [infoFile, setInfoFile] = useState<File | null>(null);
  const [infoPreview, setInfoPreview] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const coverRef = useRef<HTMLInputElement>(null);
  const infoRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (title && !slug) setSlug(slugify(title));
  }, [title]);

  const handleLogin = () => {
    if (pwd === "4123") { setAuth(true); setPwdError(false); }
    else { setPwdError(true); }
  };

  const pickFile = (file: File, kind: "cover" | "info") => {
    const url = URL.createObjectURL(file);
    if (kind === "cover") { setCoverFile(file); setCoverPreview(url); }
    else { setInfoFile(file); setInfoPreview(url); }
  };

  const handleSubmit = async () => {
    if (!title || !excerpt || !content) { setError("Título, extracto y contenido son obligatorios."); return; }
    if (!coverFile) { setError("Sube una imagen de portada."); return; }
    if (!infoFile) { setError("Sube la infografía."); return; }
    setLoading(true); setError("");
    try {
      const infoUrl = `/api/uploads/${Date.now()}_info.${infoFile.name.split(".").pop()}`;
      const htmlContent = parseContent(content, infoUrl, infoPos);

      const fd = new FormData();
      fd.append("password", "4123");
      fd.append("slug", slug || slugify(title));
      fd.append("title", title);
      fd.append("excerpt", excerpt);
      fd.append("category", category);
      fd.append("date", date);
      fd.append("readTime", readTime);
      fd.append("content", htmlContent);
      fd.append("cover", coverFile);
      fd.append("infographic", infoFile);

      const res = await fetch("/api/articles.php", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error desconocido");
      setSuccess(data.slug);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setTitle(""); setSlug(""); setExcerpt(""); setContent("");
    setDate(todayFormatted()); setReadTime("7 min"); setCategory("Desarrollo");
    setCoverFile(null); setCoverPreview(""); setInfoFile(null); setInfoPreview("");
    setSuccess(""); setError(""); setInfoPos(3);
  };

  // ── Password screen ─────────────────────────────────────────────────────────
  if (!auth) return (
    <div className="min-h-screen bg-olive-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm text-center">
        <Image src="/logo.png" alt="Logo" width={64} height={64} className="mx-auto mb-4" />
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Panel de Publicación</h1>
        <p className="text-gray-400 text-sm mb-8">Regresémosle el Brillo al Sur</p>
        <div className="relative mb-4">
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Contraseña"
            value={pwd}
            onChange={e => { setPwd(e.target.value); setPwdError(false); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-olive-500 pr-10 ${pwdError ? "border-red-400 bg-red-50" : "border-gray-200"}`}
          />
          <button type="button" onClick={() => setShowPwd(v => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {pwdError && <p className="text-red-500 text-xs mb-3">Contraseña incorrecta</p>}
        <button onClick={handleLogin}
          className="w-full bg-olive-700 hover:bg-olive-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
          Entrar
        </button>
      </div>
    </div>
  );

  // ── Success screen ───────────────────────────────────────────────────────────
  if (success) return (
    <div className="min-h-screen bg-olive-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">¡Artículo publicado!</h2>
        <p className="text-gray-500 text-sm mb-6">Ya está disponible en el sitio.</p>
        <a href={`/noticias/${success}/`} target="_blank"
          className="block w-full bg-olive-700 hover:bg-olive-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm mb-3">
          Ver artículo →
        </a>
        <button onClick={reset}
          className="w-full border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-colors text-sm">
          Publicar otro
        </button>
      </div>
    </div>
  );

  // ── Upload area component ────────────────────────────────────────────────────
  const UploadArea = ({ label, preview, onFile, inputRef, hint }: {
    label: string; preview: string; onFile: (f: File) => void;
    inputRef: React.RefObject<HTMLInputElement>; hint: string;
  }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-olive-400 transition-colors overflow-hidden"
        onDragOver={e => e.preventDefault()}
        onDrop={e => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) onFile(f); }}>
        {preview
          ? <img src={preview} alt="" className="w-full h-40 object-cover" />
          : <div className="h-32 flex flex-col items-center justify-center gap-2 text-gray-400">
              <Upload className="w-6 h-6" />
              <span className="text-xs">{hint}</span>
            </div>
        }
      </div>
      {preview && (
        <button type="button" onClick={() => { onFile(new File([],"",{type:"image/png"})); }}
          className="text-xs text-gray-400 hover:text-red-500 mt-1 flex items-center gap-1">
          <X className="w-3 h-3" /> Cambiar imagen
        </button>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f); }} />
    </div>
  );

  // ── Article form ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Image src="/logo.png" alt="Logo" width={44} height={44} />
          <div>
            <h1 className="font-heading font-bold text-xl text-gray-900 leading-tight">Panel de Publicación</h1>
            <p className="text-xs text-gray-400">Regresémosle el Brillo al Sur</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Título del artículo *</label>
            <textarea rows={2} value={title} onChange={e => { setTitle(e.target.value); setSlug(slugify(e.target.value)); }}
              placeholder="Escribe el título completo del artículo..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-olive-500 resize-none" />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">URL del artículo</label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-gray-50">
              <span className="text-gray-400 text-xs">/noticias/</span>
              <input value={slug} onChange={e => setSlug(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 text-xs" />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Extracto / Resumen *</label>
            <textarea rows={3} value={excerpt} onChange={e => setExcerpt(e.target.value)}
              placeholder="Resumen breve que aparece en la tarjeta y redes sociales..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-olive-500 resize-none" />
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Categoría</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-olive-500">
                {["Desarrollo","Turismo","Infraestructura","Educación","Agricultura","Energía","Cultura"].map(c =>
                  <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Fecha</label>
              <input value={date} onChange={e => setDate(e.target.value)}
                placeholder="06 May 2026"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-olive-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Tiempo lectura</label>
              <input value={readTime} onChange={e => setReadTime(e.target.value)}
                placeholder="7 min"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-olive-500" />
            </div>
          </div>

          {/* Cover image */}
          <UploadArea label="Imagen de portada *" preview={coverPreview}
            onFile={f => pickFile(f, "cover")} inputRef={coverRef}
            hint="Arrastra o haz clic — JPG/PNG recomendado" />

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contenido del artículo *</label>
            <textarea rows={16} value={content} onChange={e => setContent(e.target.value)}
              placeholder={"Escribe los párrafos aquí. Separa cada párrafo con una línea en blanco.\n\nPara subtítulos usa: ## Mi Subtítulo\nPara listas usa: - Punto 1\nPara negritas usa: **texto importante**"}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-olive-500 resize-y font-mono" />
            <p className="text-xs text-gray-400 mt-1.5">
              <strong>## Subtítulo</strong> · <strong>- Lista</strong> · <strong>**negrita**</strong> · párrafos separados por línea en blanco
            </p>
          </div>

          {/* Infographic */}
          <div className="border-t border-gray-100 pt-6 space-y-4">
            <UploadArea label="Infografía (se inserta en el centro del texto) *" preview={infoPreview}
              onFile={f => pickFile(f, "info")} inputRef={infoRef}
              hint="Arrastra o haz clic — PNG/JPG" />
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                Insertar infografía después del párrafo número
              </label>
              <input type="number" min={1} max={20} value={infoPos} onChange={e => setInfoPos(Number(e.target.value))}
                className="w-24 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-olive-500 text-center" />
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{error}</p>}

          {/* Submit */}
          <button onClick={handleSubmit} disabled={loading}
            className="w-full bg-olive-700 hover:bg-olive-800 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Publicando...</> : "Publicar artículo →"}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Los artículos publicados aquí aparecen en el sitio de inmediato.<br />
          ⚠️ Al subir un nuevo ZIP no borres la carpeta <code>api/</code> del servidor.
        </p>
      </div>
    </div>
  );
}
