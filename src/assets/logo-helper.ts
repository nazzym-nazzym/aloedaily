import { LOGO_WEBP_96_BASE64, LOGO_WEBP_256_BASE64, FAVICON_PNG_48_BASE64 } from './logo-data';

function base64ToUint8Array(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// In-memory zero-latency binary assets
export const LOGO_WEBP_BYTES = base64ToUint8Array(LOGO_WEBP_256_BASE64);
export const LOGO_WEBP_96_BYTES = base64ToUint8Array(LOGO_WEBP_96_BASE64);
export const FAVICON_PNG_BYTES = base64ToUint8Array(FAVICON_PNG_48_BASE64);
