"use client";
import { useRef } from "react";
import * as htmlToImage from 'html-to-image';
import { OgForm } from "../components/OgForm";
import { PreviewCard } from "../components/PreviewCard";
import { useOgForm } from "../hooks/useOgForm";

export default function Home() {
  const { formState, updateFormField, socialItems, setSocialItems } = useOgForm();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (cardRef.current) {
      htmlToImage.toPng(cardRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'og-image.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  return (
    <div className="flex">
      <OgForm
        formState={formState}
        updateFormField={updateFormField}
        socialItems={socialItems}
        setSocialItems={setSocialItems}
        onDownload={handleDownload}
      />
      <PreviewCard
        formState={formState}
        socialItems={socialItems}
        cardRef={cardRef}
      />
    </div>
  );
}
