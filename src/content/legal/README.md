# Legal content drop-in

Place the four Markdown files from the legal drafting chat here:

- `privacy.md`
- `terms.md`
- `ai-disclosure.md`
- `eula.md`

The /privacy, /terms, /ai-disclosure, and /eula routes read these at build
time. Until a file lands, its route renders an honest interim page (never a
404). Conventions the template understands:

- A line `Effective date: <date>` anywhere near the top.
- A `## Summary` section: its bullet lines render in the plain-English
  summary box at the top of the page.
- Standard headings (##, ###), paragraphs, bullet lists, and **bold**.
