import type {
  ContactMessagePayload,
  ContactPageContent,
} from "@/lib/types/contact";
import type {
  BuildsPageContent,
  ExperiencePageContent,
} from "@/lib/types/experience";
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
