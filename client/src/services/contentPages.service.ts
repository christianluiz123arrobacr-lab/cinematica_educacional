import { supabase } from "@/lib/supabase";

export type ContentPageRow = {
  id: string;
  slug: string;
  title: string;
  subject?: string | null;
  topic?: string | null;
  description?: string | null;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
};

export type ContentBlockItem = {
  title?: string;
  content?: string;
  formula?: string;
  image_url?: string;
};

export type ContentBlockSettings = {
  background?: string;
  icon?: string;
  columns?: number;
  align?: "left" | "center" | "right";
  cardVariant?: string;
};

export type ContentBlockRow = {
  id: string;
  page_id: string;
  type:
    | "section_card"
    | "text_block"
    | "info_box"
    | "highlight_dark"
    | "formula_box"
    | "cards_grid";
  variant?: string | null;
  title?: string | null;
  content?: string | null;
  formula?: string | null;
  image_url?: string | null;
  items_json?: ContentBlockItem[] | null;
  settings_json?: ContentBlockSettings | null;
  order_index: number;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
};

export async function getContentPageBySlug(slug: string) {
  const { data, error } = await supabase
    .from("content_pages")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    throw error;
  }

  return data as ContentPageRow;
}

export async function getContentBlocksByPageId(pageId: string) {
  const { data, error } = await supabase
    .from("content_blocks")
    .select("*")
    .eq("page_id", pageId)
    .eq("is_visible", true)
    .order("order_index", { ascending: true });

  if (error) {
    throw error;
  }

  return (data || []) as ContentBlockRow[];
}

export async function getContentPageWithBlocks(slug: string) {
  const page = await getContentPageBySlug(slug);
  const blocks = await getContentBlocksByPageId(page.id);

  return {
    page,
    blocks,
  };
}
