const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getProjectStudents() {
  const res = await fetch(`${API_URL}/projectstudents`);
  if (!res.ok) throw new Error("Proje-öğrenci ilişkileri alınamadı");
  return res.json();
}

export async function getProjectStudentById(id: string) {
  const res = await fetch(`${API_URL}/projectstudents/${id}`);
  if (!res.ok) throw new Error("Proje-öğrenci ilişkisi bulunamadı");
  return res.json();
} 