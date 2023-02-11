import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

import multer from 'multer';

const app = express();

// MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// ROUTES
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// app.use("/api/upload", uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/users', userRoutes);

export default app;
