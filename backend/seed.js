require('dotenv').config();
const mongoose = require('mongoose');
const Faculty = require('./models/Faculty');

// MongoDB'ye bağlan
mongoose.connect(process.env.MONGODB_URI.replace('test', 'veri'))
  .then(() => console.log('MongoDB bağlantısı başarılı!'))
  .catch(err => {
    console.error('Bağlantı hatası:', err);
    process.exit(1);
  });

// Eklenecek veri (örnek)
const data = [
  { name: { tr: "Mühendislik Fakültesi", en: "Faculty of Engineering" }, description: { tr: "Mühendislik alanında eğitim veren fakülte.", en: "Faculty providing education in engineering." } },
  { name: { tr: "Mimarlık Fakültesi", en: "Faculty of Architecture" }, description: { tr: "Mimarlık alanında eğitim veren fakülte.", en: "Faculty providing education in architecture." } }
];

Faculty.insertMany(data)
  .then(() => {
    console.log('Veriler başarıyla eklendi!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Ekleme hatası:', err);
    mongoose.disconnect();
  });