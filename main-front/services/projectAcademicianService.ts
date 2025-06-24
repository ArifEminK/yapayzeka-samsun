const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getProjectAcademicians() {
  const res = await fetch(`${API_URL}/projectacademicians`);
  if (!res.ok) throw new Error("Proje-akademisyen ilişkileri alınamadı");
  return res.json();
}

export async function getProjectAcademicianById(id: string) {
  const res = await fetch(`${API_URL}/projectacademicians/${id}`);
  if (!res.ok) throw new Error("Proje-akademisyen ilişkisi bulunamadı");
  return res.json();
} 