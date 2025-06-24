const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getAcademicians() {
  const res = await fetch(`${API_URL}/academicians`);
  if (!res.ok) throw new Error("Akademisyenler alınamadı");
  return res.json();
}

export async function getAcademicianById(id: string) {
  const res = await fetch(`${API_URL}/academicians/${id}`);
  if (!res.ok) throw new Error("Akademisyen bulunamadı");
  return res.json();
} 