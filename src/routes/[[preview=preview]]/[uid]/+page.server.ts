import { asText, mapSliceZone } from '@prismicio/client';
import type { PageLoad, EntryGenerator } from './$types';
import { createClient } from '$lib/prismicio';
import { mappers } from '$lib/slices/mappers';

export const load: PageLoad = async ({ params, fetch }) => {
	const client = createClient({ fetch }); 

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
	return pages.map((page) => ({ uid: page.uid }));
};
