import { createClient } from "$lib/prismicio";

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID("page", "home");

	return {
		page
	};
}
