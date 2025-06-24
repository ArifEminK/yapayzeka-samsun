require("dotenv").config();
const mongoose = require("mongoose");
const Academician = require("./models/Academician");

// MongoDB'ye bağlan
mongoose
  .connect(process.env.MONGODB_URI.replace('test', 'veri'))
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => {
    console.error("Bağlantı hatası:", err);
    process.exit(1);
  });

// Eklenecek veri (örnek, department ObjectId'sini kendi veritabanından bulup yazmalısın)
const data = [
  {
    name: { tr: "Doç. Dr. Zafer Cömert", en: "Assoc. Prof. Dr. Zafer Cömert" },
    email: "zafer.comert@samsun.edu.tr",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr." },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  },
  {
    name: { tr: "Doç. Dr. Muammer Türkoğlu", en: "Assoc. Prof. Dr. Muammer Türkoğlu" },
    email: "muammer.turkoglu@samsun.edu.tr",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr." },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Makine öğrenmesi.", en: "Machine learning." },
    image: "",
  },
  {
    name: { tr: "Doç. Dr. Abdulkadir Karacı", en: "Assoc. Prof. Dr. Abdulkadir Karacı" },
    email: "abdulkadir.karaci@samsun.edu.tr",
    title: { tr: "Doç. Dr.", en: "Assoc. Prof. Dr." },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  },
  {
    name: { tr: "Dr. Öğr. Üyesi Özgür TONKAL", en: "Dr. Öğr. Üyesi Özgür TONKAL" },
    email: "ozgur.tonkal@samsun.edu.tr",
    title: { tr: "Dr. Öğr. Üyesi", en: "Dr. Öğr. Üyesi" },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  },
  {
    name: { tr: "Dr. Öğr. Üyesi Nurettin ŞENYER", en: "Dr. Öğr. Üyesi Nurettin ŞENYER" },
    email: "nurettin.senyer@samsun.edu.tr",
    title: { tr: "Dr. Öğr. Üyesi", en: "Dr. Öğr. Üyesi" },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  },
  {
    name: { tr: "Arş. Gör. Ömer DURMUŞ", en: "Arş. Gör. Ömer DURMUŞ" },
    email: "omer.durmus@samsun.edu.tr",
    title: { tr: "Arş. Gör.", en: "Arş. Gör." },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  },
  {
    name: { tr: "Arş. Gör. Ferhat ARAT", en: "Arş. Gör. Ferhat ARAT" },
    email: "ferhat.arat@samsun.edu.tr",
    title: { tr: "Arş. Gör.", en: "Arş. Gör." },
    department: "685b199b52c15b989f4ce6d5",
    bio: { tr: "Yapay zeka ve görüntü işleme.", en: "Artificial intelligence and image processing." },
    image: "",
  }
];

Academician.insertMany(data)
  .then(() => {
    console.log("Academician verileri başarıyla eklendi!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Ekleme hatası:", err);
    mongoose.disconnect();
  }); 