import * as Sentry from '@sentry/nextjs';

export const initSentryErrorHandler = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: 'your-sentry-dsn',  // Replace with your Sentry DSN
      tracesSampleRate: 1.0,
    });

    // Global Error Handler for React rendering errors
    Sentry.setTag('error-handling', 'react-render-errors');
  }
};