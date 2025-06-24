const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getFaculties() {
  const res = await fetch(`${API_URL}/faculties`);
  if (!res.ok) throw new Error("Fakülteler alınamadı");
  return res.json();
}

export async function getFacultyById(id: string) {
  const res = await fetch(`${API_URL}/faculties/${id}`);
  if (!res.ok) throw new Error("Fakülte bulunamadı");
  return res.json();
} 