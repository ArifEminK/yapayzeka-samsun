const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getStudents() {
  const res = await fetch(`${API_URL}/students`);
  if (!res.ok) throw new Error("Öğrenciler alınamadı");
  return res.json();
}

export async function getStudentById(id: string) {
  const res = await fetch(`${API_URL}/students/${id}`);
  if (!res.ok) throw new Error("Öğrenci bulunamadı");
  return res.json();
} 