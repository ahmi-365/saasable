/**
 * Router Link wrapper for React Router.
 *
 * This file provides a NextLink-compatible interface using React Router's Link
 * for seamless migration from Next.js to Vite + React Router.
 */
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// NextLink compatible wrapper - forwards ref and handles href prop
const NextLink = forwardRef(function NextLink({ href, ...props }, ref) {
  return <RouterLink ref={ref} to={href || '/'} {...props} />;
});

export { RouterLink as Link, NextLink };

