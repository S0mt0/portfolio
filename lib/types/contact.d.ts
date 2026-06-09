export type ContactSocials = {
  email?: string;
  github?: string;
  x?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
  website?: string;
};

export type ContactPageContent = {
  id?: string;
  key: "contact";
  hero: {
    eyebrow: string;
    title: string;
    description?: string;
  };
  cvUrl?: string;
  recipientEmail?: string;
  helperNote?: string;
  socials: ContactSocials;
  createdAt?: string;
  updatedAt?: string;
};

export type ContactMessagePayload = {
  name: string;
  email: string;
  workType?: string;
  timeline?: string;
  budget?: string;
  details: string;
};
