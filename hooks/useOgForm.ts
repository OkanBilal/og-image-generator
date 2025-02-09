import { useState, useEffect } from 'react';
import { GitHub, Linkedin, Twitter, Figma } from "../components/icons";
import { SocialItem, FormState } from '../types';

export function useOgForm() {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    author: "",
    job: "",
    github: "",
    figma: "",
    twitter: "",
    linkedin: ""
  });

  const updateFormField = (field: keyof FormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const [socialItems, setSocialItems] = useState<SocialItem[]>([
    { id: 1, Icon: GitHub, value: "", key: 'github', setValue: (value: string) => updateFormField('github', value) },
    { id: 2, Icon: Linkedin, value: "", key: 'linkedin', setValue: (value: string) => updateFormField('linkedin', value) },
    { id: 3, Icon: Twitter, value: "", key: 'twitter', setValue: (value: string) => updateFormField('twitter', value) },
    { id: 4, Icon: Figma, value: "", key: 'figma', setValue: (value: string) => updateFormField('figma', value) },
  ]);

  useEffect(() => {
    setSocialItems(prevItems => prevItems.map(item => ({
      ...item,
      value: formState[item.key]
    })));
  }, [formState]);

  return {
    formState,
    updateFormField,
    socialItems,
    setSocialItems
  };
}