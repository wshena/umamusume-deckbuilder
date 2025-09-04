import { clsx, type ClassValue } from "clsx"
import slugify from "slugify";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createSlug = (input:string) => slugify(input, { lower: true, strict: true });

export function truncateText(title: string, maxLength: number): string {
  // Jika panjang title sudah kurang atau sama dengan maxLength, kembalikan title asli
  if (title?.length <= maxLength) return title;
  
  // Potong string hingga maxLength
  const truncated = title?.slice(0, maxLength);
  
  // Cari indeks spasi terakhir pada potongan string
  const lastSpaceIndex = truncated?.lastIndexOf(" ");
  
  // Jika ada spasi, potong hingga spasi tersebut untuk menghindari memotong kata
  // Jika tidak ada, gunakan potongan langsung
  return (lastSpaceIndex > 0 ? truncated?.slice(0, lastSpaceIndex) : truncated) + "...";
}