import type {
  ContactMessagePayload,
  ContactPageContent,
} from "@/lib/types/contact";
import type {
  BuildsPageContent,
  ExperiencePageContent,
} from "@/lib/types/experience";
import type {
  NoteCommentPayload,
  PublicNoteComment,
  PublicNoteDetail,
  PublicNotesContent,
} from "@/lib/types/notes";
import { apiFetch, apiPost } from "./util";

export const getLandingContent = () =>
  apiFetch<ApiResponse<ILandingContent>>("/landing");

export const getExperienceContent = () =>
  apiFetch<ApiResponse<ExperiencePageContent>>("/experience");

export const getBuildsContent = () =>
  apiFetch<ApiResponse<BuildsPageContent>>("/builds");

export const getContactContent = () =>
  apiFetch<ApiResponse<ContactPageContent>>("/contact");

export const sendContactMessage = (payload: ContactMessagePayload) =>
  apiPost<ApiResponse<null>>("/contact", payload);

export const getNotesContent = (query?: { page?: number; q?: string }) =>
  apiFetch<ApiPaginatedResponse<PublicNotesContent>>("/notes", query);

export const getNoteContent = (slug: string) =>
  apiFetch<ApiResponse<PublicNoteDetail>>(`/notes/${slug}`);

export const sendNoteComment = (slug: string, payload: NoteCommentPayload) =>
  apiPost<ApiResponse<PublicNoteComment>>(`/notes/${slug}/comments`, payload);

export const likeNoteComment = (slug: string, id: string) =>
  apiPost<ApiResponse<{ id: string; likes: number }>>(
    `/notes/${slug}/comments/${id}/like`
  );
