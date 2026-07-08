import type { Client, Content, SliceMapper } from "@prismicio/client";

type Context = { client: Client<Content.AllDocumentTypes> };

type ContentIndexCustomProps = {
  items: Content.BlogpostDocument[] | Content.ProjectDocument[];
};

const mapper: SliceMapper<
  Content.ContentIndexSlice,
  ContentIndexCustomProps,
  Context
> = async ({ slice, context }) => {
  const { client } = context;

  const items =
    slice.primary.content_type === "Blog"
      ? await client.getAllByType("blogpost")
      : await client.getAllByType("project");

  return { slice, items };
};

export default mapper;
