// StatiCrypt-style encryption for the hidden Meaningful Disclosure page.
// Encrypts src/content/disclosure/content.json (never imported by the app)
// into src/data/disclosure-encrypted.json (shipped in the bundle).
//
// Usage:  node scripts/encrypt-disclosure.mjs [password]
// Default password: CampaignAIDisclosure
// Re-run after any edit to the plaintext content file.

import { webcrypto as crypto } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const password = process.argv[2] || "CampaignAIDisclosure";
const root = process.cwd();
const srcPath = path.join(root, "src", "content", "disclosure", "content.json");
const outPath = path.join(root, "src", "data", "disclosure-encrypted.json");

const plaintext = fs.readFileSync(srcPath, "utf8");
// Validate JSON before encrypting
JSON.parse(plaintext);

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));

const keyMaterial = await crypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(password),
  "PBKDF2",
  false,
  ["deriveKey"]
);
const key = await crypto.subtle.deriveKey(
  { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
  keyMaterial,
  { name: "AES-GCM", length: 256 },
  false,
  ["encrypt"]
);

const ciphertext = await crypto.subtle.encrypt(
  { name: "AES-GCM", iv },
  key,
  new TextEncoder().encode(plaintext)
);

const b64 = (buf) => Buffer.from(buf).toString("base64");

fs.writeFileSync(
  outPath,
  JSON.stringify(
    {
      v: 1,
      kdf: "PBKDF2-SHA256",
      iterations: 150000,
      salt: b64(salt),
      iv: b64(iv),
      data: b64(ciphertext),
    },
    null,
    2
  )
);

console.log(`Encrypted ${srcPath} -> ${outPath}`);
