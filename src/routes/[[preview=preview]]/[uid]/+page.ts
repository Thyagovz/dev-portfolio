import { createClient } from "$lib/prismicio";

export async function load({ params, fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID("page", params.uid);

	return {
		page
	};
}
