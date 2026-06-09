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

// export const getFaqs = () => apiFetch<ApiResponse<ILandingFaqItem[]>>("/faqs");

// export const getTestimonials = () =>
//   apiFetch<ApiResponse<ILandingTestimonialItem[]>>("/testimonials");

// export const getAboutPageContent = () =>
//   apiFetch<ApiResponse<IAboutPageContent>>("/about");

// export const getBlogsPageContent = () =>
//   apiFetch<ApiResponse<IBlogsPageContent>>("/blogs/sections");

// export const getEventsPageContent = () =>
//   apiFetch<ApiResponse<IEventsPageContent>>("/events/sections");
