const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getProjectImages() {
  const res = await fetch(`${API_URL}/projectimages`);
  if (!res.ok) throw new Error("Proje görselleri alınamadı");
  return res.json();
}

export async function getProjectImageById(id: string) {
  const res = await fetch(`${API_URL}/projectimages/${id}`);
  if (!res.ok) throw new Error("Proje görseli bulunamadı");
  return res.json();
} 