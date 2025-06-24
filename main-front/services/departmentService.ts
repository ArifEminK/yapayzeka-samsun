const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function getDepartments() {
  const res = await fetch(`${API_URL}/departments`);
  if (!res.ok) throw new Error("Departmanlar alınamadı");
  return res.json();
}

export async function getDepartmentById(id: string) {
  const res = await fetch(`${API_URL}/departments/${id}`);
  if (!res.ok) throw new Error("Departman bulunamadı");
  return res.json();
} 