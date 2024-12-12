"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { event } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data: FormData) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      toast.success('Bericht succesvol verzonden!');
      event({
        action: 'submit_form',
        category: 'Contact',
        label: 'Contact Form Submission',
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Er is iets misgegaan');
      event({
        action: 'form_error',
        category: 'Contact',
        label: 'Contact Form Error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, submitForm };
}