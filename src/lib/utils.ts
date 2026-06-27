import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function ensureArray<T>(value: T | T[] | undefined): T[] {
	if (value == undefined) return [];
	return Array.isArray(value) ? value : [value];
}
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
