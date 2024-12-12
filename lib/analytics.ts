// Google Analytics configuration and utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag: (command: string, idOrName: string, config?: any) => void;
  }
}

type AnalyticsEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// Log page views
export const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: AnalyticsEvent): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};