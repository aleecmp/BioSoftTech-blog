import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let destinationPath;
    if (process.env.NODE_ENV === 'production') {
      destinationPath = '/var/www/app/public/uploads';
    } else {
      destinationPath = path.join(
        process.cwd(),
        '..',
        'client',
        'public',
        'upload'
      );
    }
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

export const upload = multer({ storage });

export const uploadFile = (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
};
