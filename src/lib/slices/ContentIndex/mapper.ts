import type { Client, Content, SliceMapper } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/svelte';

import ContentIndex from './index.svelte';

type Context = { client: Client<Content.AllDocumentTypes> };

const mapper: SliceMapper<
	Content.ContentIndexSlice,
	SliceComponentProps<Content.ContentIndexSlice> & { items: any },
	Context
> = async ({ slice, index, slices, context }) => {
	const { client } = context;

	const items =
		slice.primary.content_type === 'Blog'
			? await client.getAllByType('blogpost')
			: await client.getAllByType('project');

	return { 
		slice,
		index,
		slices,
		context,
		items
	};
};

export default mapper;
