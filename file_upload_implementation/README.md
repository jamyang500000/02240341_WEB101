# File Upload Implementation — Practical 3

A Next.js (Pages Router) application that implements a file upload form with:

- ✅ **Multipart form data handling** — via `formidable` on the server, `FormData` + `axios` on the client
- ✅ **File type & size validation** — JPG, PNG, GIF, PDF only; max 5 MB (client AND server side)
- ✅ **Upload progress tracking** — using `axios` `onUploadProgress` callback
- ✅ **Drag-and-drop interface** — using `react-dropzone`
- ✅ **React Hook Form** — for form state management

## How to Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Project Structure

```
file_upload_implementation/
├── pages/
│   ├── api/
│   │   └── upload.js          # Backend API route (formidable, saves to public/uploads)
│   ├── _app.js                # Loads globals.css
│   ├── _document.js           # HTML shell
│   └── index.js               # Upload form (React Hook Form + Dropzone + Axios)
├── public/
│   └── uploads/               # Uploaded files end up here
├── styles/
│   └── globals.css            # All styling
├── package.json
├── next.config.mjs
├── jsconfig.json
└── .eslintrc.json
```

## How It Works

1. The user **drags** or **clicks** to pick a file in the dropzone (powered by `react-dropzone`).
2. Client-side validation runs immediately: type must be JPG/PNG/GIF/PDF, size ≤ 5 MB.
3. On **Upload**, the file is bundled into `FormData` and sent to `/api/upload` via `axios.post`.
4. `axios.onUploadProgress` reports upload progress, which updates the progress bar (0–100%).
5. The server (`pages/api/upload.js`) disables Next's default body parser, then uses `formidable` to parse the multipart form data, save the file to `public/uploads/`, and re-validate the type server-side.
6. On success, the server returns the saved file's metadata, and the client shows a green success banner.

## Testing

Try uploading:

- ✅ A valid JPG/PNG image under 5 MB → should succeed
- ❌ A `.txt` file → blocked client-side ("Invalid file type")
- ❌ A 10 MB image → blocked client-side ("File is too large")
- ✅ A valid PDF → should succeed and be saved with `.pdf` extension

Saved files appear in `public/uploads/` and are accessible at `http://localhost:3000/uploads/<filename>`.
