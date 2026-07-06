import { createClient } from "$lib/prismicio";
import type { Content } from "@prismicio/client";
import type { LayoutServerLoad } from "./$types";

export const prerender = "auto";

export const load: LayoutServerLoad = async () => {
  const client = createClient();

  const settings = await client.getSingle<Content.SettingsDocument>("settings");

  return {
    settings,
  };
};
