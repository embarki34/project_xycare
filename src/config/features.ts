/**
 * Feature Flags Configuration
 * 
 * You can toggle these interactive features on/off by adding them to your .env file.
 * Example .env file:
 * VITE_MAGNETIC_BUTTONS=false
 * VITE_CURSOR_SPOTLIGHT=false
 */
export const FEATURES = {
  MAGNETIC_BUTTONS: import.meta.env.VITE_MAGNETIC_BUTTONS !== 'false',
  CURSOR_SPOTLIGHT: import.meta.env.VITE_CURSOR_SPOTLIGHT !== 'false',
  MOUSE_PARALLAX: import.meta.env.VITE_MOUSE_PARALLAX !== 'false',
  STAGGERED_TEXT: import.meta.env.VITE_STAGGERED_TEXT !== 'false',
  INTERACTIVE_LOGO: import.meta.env.VITE_INTERACTIVE_LOGO !== 'false',
};
