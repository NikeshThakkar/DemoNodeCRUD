const multer = require('multer');
const path = require('path');

// image Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(__dirname)
    cb(null, __dirname + '/uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + '.' + ext);
  },
});

let upload = multer({
  storage,
  limits: { fileSize: 1 * 1000 * 1000 },
}).single('profileImg');

module.exports = upload;
