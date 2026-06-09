"use client";

import { useEffect, useState } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
  XShareButton,
} from "react-share";

type NoteShareProps = {
  title: string;
  excerpt?: string;
};

const shareButtonClass =
  "transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function NoteShare({ title, excerpt }: NoteShareProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  return (
    <section className="flex flex-wrap items-center gap-3 border-y border-border/20 py-4">
      <p className="mr-1 font-mono text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">
        Share
      </p>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=" - "
        className={shareButtonClass}
        aria-label="Share on WhatsApp"
      >
        <WhatsappIcon size={34} round />
      </WhatsappShareButton>
      <XShareButton
        url={url}
        title={title}
        className={shareButtonClass}
        aria-label="Share on X"
      >
        <XIcon size={34} round />
      </XShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        summary={excerpt}
        className={shareButtonClass}
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon size={34} round />
      </LinkedinShareButton>
      <TelegramShareButton
        url={url}
        title={title}
        className={shareButtonClass}
        aria-label="Share on Telegram"
      >
        <TelegramIcon size={34} round />
      </TelegramShareButton>
      <FacebookShareButton
        url={url}
        hashtag="#SomtoNotes"
        className={shareButtonClass}
        aria-label="Share on Facebook"
      >
        <FacebookIcon size={34} round />
      </FacebookShareButton>
      <EmailShareButton
        url={url}
        subject={title}
        body={excerpt}
        className={shareButtonClass}
        aria-label="Share by email"
      >
        <EmailIcon size={34} round />
      </EmailShareButton>
    </section>
  );
}
