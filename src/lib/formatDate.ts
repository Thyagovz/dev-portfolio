import type { DateField } from '@prismicio/client';

export function formatDate(dateStr: DateField): string {
	if (!dateStr) return '';
	
	const date = new Date(`${dateStr}T12:00:00`);

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);

	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
