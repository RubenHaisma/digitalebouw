export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  if (typeof window.gtag === 'undefined') return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};