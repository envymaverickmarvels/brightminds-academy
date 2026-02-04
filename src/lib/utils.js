import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{2})(\d{5})(\d{5})/, "+$1 $2 $3");
}

export function getWhatsAppLink(phone, message = "") {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}