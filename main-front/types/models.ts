export type Faculty = {
  _id: string;
  name: { tr: string; en: string };
  description?: { tr: string; en: string };
};

export type Department = {
  _id: string;
  name: { tr: string; en: string };
  description?: { tr: string; en: string };
  faculty: Faculty | string;
  img_path?: { tr: string; en: string };
};

export type Academician = {
  _id: string;
  name: { tr: string; en: string };
  email: string;
  title?: { tr: string; en: string };
  department: Department | string;
  phone?: string;
  office?: string;
  bio?: { tr: string; en: string };
  image?: string;
};

export type Student = {
  _id: string;
  name: { tr: string; en: string };
  email: string;
  number: string;
  department: Department | string;
  phone?: string;
  bio?: { tr: string; en: string };
  image?: string;
};

export type Project = {
  _id: string;
  title: { tr: string; en: string };
  description?: { tr: string; en: string };
  startDate?: string;
  endDate?: string;
  department: Department | string;
  img?: string;
  // images, students, academicians ayrı tablolarda tutuluyor
};

export type ProjectImage = {
  _id: string;
  project: Project | string;
  url: string;
  description?: { tr: string; en: string };
};

export type ProjectStudent = {
  _id: string;
  project: Project | string;
  student: Student | string;
  role?: { tr: string; en: string };
};

export type ProjectAcademician = {
  _id: string;
  project: Project | string;
  academician: Academician | string;
  role?: { tr: string; en: string };
}; 