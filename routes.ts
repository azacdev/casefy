/**
 * Routes that are accessible to the public
 * They dont require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/new-verification"];

/**
 * Routes used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/signup",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * Prefix for api authentication routes
 * Routes that start with prefix are used for authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 * **/
export const DEFAULT_LOGIN_REDIRECT = "/";
