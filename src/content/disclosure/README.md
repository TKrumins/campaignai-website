# Hidden Meaningful Disclosure page content

The page at /CampaignAIDisclosure ships its copy AES-encrypted
(`src/data/disclosure-encrypted.json`). The plaintext source
(`content.json` in this folder) is **gitignored** so it never appears in
the public repository behind GitHub Pages.

To edit the page copy:

1. `node scripts/decrypt-disclosure.mjs <password>` — recreates
   `content.json` here.
2. Edit `content.json`.
3. `node scripts/encrypt-disclosure.mjs <password>` — regenerates the
   encrypted payload.
4. Delete `content.json` (or leave it; git ignores it) and rebuild.

The password defaults to the launch value if omitted. Real dogfooded
clips drop into `public/assets/disclosure/mechanism-{1..5}.mp4` and
replace the animated SVG mock players automatically at the next build.
