import React from 'react';
import { FormState, SocialItem } from '../types';

interface PreviewCardProps {
  formState: FormState;
  socialItems: SocialItem[];
  cardRef: React.RefObject<HTMLDivElement | null>;
}

export function PreviewCard({ formState, socialItems, cardRef }: PreviewCardProps) {
  return (
    <div className="main">
      <h1 className="main-title">Open Graph Image Generator for Blog Post</h1>
      <div className="card" ref={cardRef}>
        <div>
          <div className="post-title">{formState.title || "Post Title"}</div>
          <div className="author-name">
            <span>{formState.author || "Author"}</span>
            {formState.job.length >= 1 ? <span>,</span> : ""}
            <span className="job-role">{formState.job || "Job Role"}</span>
          </div>
          <div className="social">
            {socialItems
              .filter(item => item.value.length >= 1)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="social-container"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.Icon />
                  <span className="social-title">{item.value}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}