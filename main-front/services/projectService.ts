const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw new Error("Projeler alınamadı");
  return res.json();
}

export async function getProjectById(id: string) {
  const res = await fetch(`${API_URL}/projects/${id}`);
  if (!res.ok) throw new Error("Proje bulunamadı");
  return res.json();
} 