import { mapSliceZone } from '@prismicio/client';
import type { PageServerLoad, EntryGenerator } from './$types'; 
import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export const load: PageServerLoad = async ({ params, fetch, cookies }) => {
	const client = createClient({ fetch, cookies }); 

	const page = await client.getByUID('page', params.uid);
	const slices = await mapSliceZone(page.data.slices, mappers, { client });

	return {
		slices,
		title: page.data.title, 
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image?.url ?? null
	};
};

export const entries: EntryGenerator = async () => {
	const client = createClient();
	const pages = await client.getAllByType('page');

	const validPages = pages.filter((page): page is typeof page & { uid: string } => {
		return typeof page.uid === 'string';
	});

	return validPages.map((page) => ({
		uid: page.uid
	}));
};

