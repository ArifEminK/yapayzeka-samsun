const express = require('express');
const next = require('next');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/database');

const port = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: '../main-front' }); // Next.js frontend dizinini belirtiyoruz
const handle = nextApp.getRequestHandler();

// MongoDB bağlantısı
connectDB();

nextApp.prepare().then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // Faculty API route
  app.use('/api/faculties', require('./routes/api/faculty'));
  app.use('/api/departments', require('./routes/api/department'));
  app.use('/api/academicians', require('./routes/api/academician'));
  app.use('/api/students', require('./routes/api/student'));
  app.use('/api/projects', require('./routes/api/project'));
  app.use('/api/projectimages', require('./routes/api/projectimage'));
  app.use('/api/projectstudents', require('./routes/api/projectstudent'));
  app.use('/api/projectacademicians', require('./routes/api/projectacademician'));

  // Sağlık kontrolü
  app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'API çalışıyor' });
  });

  // Örnek API route (istersen backend API de yazabilirsin)
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Merhaba Express + Next!' });
  });

  // Tüm diğer istekleri Next'e yönlendir
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`Server ready on http://localhost:${port}`);
  });
});
