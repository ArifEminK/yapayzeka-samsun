require("dotenv").config();
const mongoose = require("mongoose");
const Department = require("./models/Department");

// MongoDB'ye bağlan
mongoose
  .connect(process.env.MONGODB_URI.replace('test', 'veri'))
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => {
    console.error("Bağlantı hatası:", err);
    process.exit(1);
  });

// Eklenecek veri (örnek, faculty ObjectId'lerini kendi veritabanından bulup yazmalısın)
const data = [
  {
    name: { tr: "Yazılım Mühendisliği", en: "Software Engineering" },
    description: { tr: "Yazılım ve bilgisayar bilimleri.", en: "Software and computer sciences." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/software.png",
    bg_img_path: "/img/engineering/software_bg.png"
  },
  {
    name: { tr: "Makine Mühendisliği", en: "Mechanical Engineering" },
    description: { tr: "Makine ve imalat teknolojileri.", en: "Mechanical and manufacturing technologies." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/machine.png"
  },
  {
    name: { tr: "Elektrik-Elektronik Mühendisliği", en: "Electrical-Electronics Engineering" },
    description: { tr: "Elektrik ve elektronik sistemler.", en: "Electrical and electronics systems." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/electric.png"
  },
  {
    name: { tr: "Endüstri Mühendisliği", en: "Industrial Engineering" },
    description: { tr: "Endüstri ve sistem mühendisliği.", en: "Industrial and systems engineering." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/endustry.png"
  },
  {
    name: { tr: "Biyomedikal Mühendisliği", en: "Biomedical Engineering" },
    description: { tr: "Biyomedikal teknolojiler.", en: "Biomedical technologies." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/biomedical.png"
  },
  {
    name: { tr: "Temel Bilimler", en: "Basic Sciences" },
    description: { tr: "Temel bilimler ve matematik.", en: "Basic sciences and mathematics." },
    faculty: "685b199b52c15b989f4ce6d5",
    img_path: "/img/engineering/basicsciences.png"
  }
];

Department.insertMany(data)
  .then(() => {
    console.log("Department verileri başarıyla eklendi!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Ekleme hatası:", err);
    mongoose.disconnect();
  });
