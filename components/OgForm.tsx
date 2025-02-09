import { FormState, SocialItem } from '../types';
import { ReactSortable } from "react-sortablejs";

interface OgFormProps {
  formState: FormState;
  updateFormField: (field: keyof FormState, value: string) => void;
  socialItems: SocialItem[];
  setSocialItems: (items: SocialItem[]) => void;
  onDownload: () => void;
}

export function OgForm({ formState, updateFormField, socialItems, setSocialItems, onDownload }: OgFormProps) {
  const renderInput = (label: string, field: keyof FormState) => (
    <li key={field}>
      <label className="info-label-title">{label}</label>
      <input
        type="text"
        className="input"
        value={formState[field]}
        onChange={(e) => updateFormField(field, e.target.value)}
      />
    </li>
  );

  const renderSocialInput = (item: SocialItem) => (
    <li key={item.key}>
      <label className="label-title">{item.key.charAt(0).toUpperCase() + item.key.slice(1)}</label>
      <input
        type="text"
        className="input"
        value={item.value}
        onChange={(e) => {
          setSocialItems(
            socialItems.map(prevItem =>
              prevItem.key === item.key ? { ...prevItem, value: e.target.value } : prevItem
            )
          );
          updateFormField(item.key, e.target.value);
        }}
      />
    </li>
  );

  return (
    <div className="options">
      <h2 className="options-title">OG Image Generator</h2>
      <ul>
        {renderInput("Post Title", "title")}
        {renderInput("Author", "author")}
        {renderInput("Job Role", "job")}
        <ReactSortable
          list={socialItems}
          setList={setSocialItems}
          animation={200}
          delay={2}
          delayOnTouchOnly={true}
          handle=".label-title"
          className="social-inputs"
        >
          {socialItems.map((item) => (
            <div key={item.id} className="social-input-item">
              {renderSocialInput(item)}
            </div>
          ))}
        </ReactSortable>
        <li key="download">
          <button className="download" type="button" onClick={onDownload}>
            Download
          </button>
        </li>
      </ul>
    </div>
  );
}