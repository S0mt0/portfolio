export type PublicNotesHero = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type PublicNoteListItem = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  bannerImage?: string;
  tags: string[];
  readTime: string;
  publishedAt: string | null;
  updatedAt: string;
};

export type PublicNoteComment = {
  id: string;
  name: string;
  website?: string;
  content: string;
  likes: number;
  createdAt: string;
};

export type PublicNoteDetail = PublicNoteListItem & {
  content: string;
  featured: boolean;
  allowComments: boolean;
  bannerCaption?: string;
  author: {
    name: string;
    image?: string | null;
  };
  comments: PublicNoteComment[];
  relatedPosts: PublicNoteListItem[];
};

export type PublicNotesContent = {
  hero: PublicNotesHero;
  notes: PublicNoteListItem[];
};

export type NoteCommentPayload = {
  name: string;
  email: string;
  website?: string;
  content: string;
};
