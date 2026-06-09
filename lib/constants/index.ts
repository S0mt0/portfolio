export const VERSION = Date.now();

export const isDevelopment = process.env.NODE_ENV === "development";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (isDevelopment ? "http://localhost:3001" : "https://talktosomto.xyz");

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (isDevelopment
    ? "http://localhost:3000/api"
    : "https://admin.talktosomto.xyz/api");
