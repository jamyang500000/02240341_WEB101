import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable Next's default body parser so formidable can handle multipart/form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Make sure the upload folder exists
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: MAX_SIZE,
    filename: (name, ext, part) => {
      // Save as <timestamp>-<originalName> to avoid collisions
      const safeName = (part.originalFilename || 'file').replace(/[^a-zA-Z0-9.\-_]/g, '_');
      return `${Date.now()}-${safeName}`;
    },
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ error: err.message || 'File upload failed.' });
    }

    // formidable v3 returns each field as an array
    const uploaded = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!uploaded) {
      return res.status(400).json({ error: 'No file received.' });
    }

    // Server-side type validation
    if (!ALLOWED_TYPES.includes(uploaded.mimetype)) {
      // Clean up the file that formidable saved
      try { fs.unlinkSync(uploaded.filepath); } catch (e) { /* ignore */ }
      return res.status(400).json({
        error: `Invalid file type "${uploaded.mimetype}". Allowed: JPG, PNG, GIF, PDF.`,
      });
    }

    const fileName = path.basename(uploaded.filepath);
    return res.status(200).json({
      success: true,
      message: 'File uploaded successfully',
      file: {
        originalName: uploaded.originalFilename,
        savedAs: fileName,
        size: uploaded.size,
        type: uploaded.mimetype,
        url: `/uploads/${fileName}`,
      },
    });
  });
}
