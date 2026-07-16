// Recovers the plaintext disclosure content from the encrypted payload,
// for editing. Writes src/content/disclosure/content.json (gitignored).
//
// Usage:  node scripts/decrypt-disclosure.mjs [password]

import { webcrypto as crypto } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const password = process.argv[2] || "CampaignAIDisclosure";
const root = process.cwd();
const inPath = path.join(root, "src", "data", "disclosure-encrypted.json");
const outPath = path.join(root, "src", "content", "disclosure", "content.json");

const payload = JSON.parse(fs.readFileSync(inPath, "utf8"));
const fromB64 = (value) => Uint8Array.from(Buffer.from(value, "base64"));

const keyMaterial = await crypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(password),
  "PBKDF2",
  false,
  ["deriveKey"]
);
const key = await crypto.subtle.deriveKey(
  {
    name: "PBKDF2",
    salt: fromB64(payload.salt),
    iterations: payload.iterations,
    hash: "SHA-256",
  },
  keyMaterial,
  { name: "AES-GCM", length: 256 },
  false,
  ["decrypt"]
);

try {
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromB64(payload.iv) },
    key,
    fromB64(payload.data)
  );
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, new TextDecoder().decode(plaintext));
  console.log(`Decrypted ${inPath} -> ${outPath}`);
} catch {
  console.error("Wrong password: could not decrypt.");
  process.exit(1);
}
