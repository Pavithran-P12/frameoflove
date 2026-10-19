# Albums

Each folder here becomes one album on the Gallery page (frameoflove.co.in/gallery),
shown as a two-row carousel. Add a folder, push, and it appears. No code changes.

## Folder and photos

- Name the folder after the couple, e.g. `maria-and-nithin`. That shows as **Maria & Nithin**
  (dashes become spaces, "and" becomes "&"). You can also name it `Maria & Nithin` directly.
- Photos (`.jpg`, `.jpeg`, `.png`, `.webp`) appear in file-name order, so number them:
  `01.jpg`, `02.jpg`, … `10.jpg` (numbers sort naturally, 2 before 10).
- Pick 15–30 of the best photos, exported at about **2400 px on the long edge, JPEG quality ~85**
  (roughly 0.5–1.5 MB each). Smaller copies for phones are made automatically when the site builds.
  Full camera files are too big for GitHub.

## Optional details: album.json

Put an `album.json` file in the folder to add more. Every line is optional:

```json
{
  "title": "Maria & Nithin",
  "location": "Coimbatore",
  "date": "2026-02",
  "cover": "07.jpg",
  "order": 1,
  "film": "https://www.youtube.com/watch?v=Ve4aX0PjBWw"
}
```

- `date`: written as `2026-02` or `2026-02-14`, albums sort newest first.
- `cover`: the photo shown first.
- `order`: lower numbers come first and override the date order.
- `film`: adds a "Watch the film" link to the album.
