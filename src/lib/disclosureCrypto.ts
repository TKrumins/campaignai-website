"use client";

/** Client-side decryption for the hidden Meaningful Disclosure page. The
 *  bundle ships only the AES-GCM ciphertext; a wrong password simply fails
 *  to decrypt. */

interface EncryptedPayload {
  iterations: number;
  salt: string;
  iv: string;
  data: string;
}

function fromB64(value: string): Uint8Array {
  const bin = atob(value);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export async function decryptDisclosure(
  payload: EncryptedPayload,
  password: string
): Promise<string | null> {
  try {
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
        salt: fromB64(payload.salt) as BufferSource,
        iterations: payload.iterations,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    const plaintext = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromB64(payload.iv) as BufferSource },
      key,
      fromB64(payload.data) as BufferSource
    );
    return new TextDecoder().decode(plaintext);
  } catch {
    return null;
  }
}
