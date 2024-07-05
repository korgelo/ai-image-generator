import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { authMiddleware } from "@clerk/nextjs";

const isProtectedRoute = createRouteMatcher([
  '/',
  '/profile',
  '/credits',
  '/transformations/(.*)'
])

// export default authMiddleware({
//  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });

export default clerkMiddleware((auth, req) =>{
  if(isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};