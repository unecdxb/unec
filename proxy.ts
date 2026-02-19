// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import * as jose from "jose";

// export async function proxy(request: NextRequest) {
//   const response = NextResponse.next();
//   const path = request.nextUrl.pathname;

//   // CORS headers
//   response.headers.set("Access-Control-Allow-Origin", "https://docs-rho-wine.vercel.app");
//   response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   // Define protected and public admin routes
//   const isLoginPage = path === "/admin/login";
//   const isProtectedRoute = path.startsWith("/admin") && !isLoginPage;

//   const token = request.cookies.get("adminToken")?.value || "";
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

//   // 🔹 1. If user is on login page and already has a valid token → redirect to /admin
//   if (isLoginPage && token) {
//     try {
//       await jose.jwtVerify(token, secret);
//       return NextResponse.redirect(new URL("/admin", request.url));
//     } catch {
//       // invalid token — let them stay on login
//     }
//   }

//   // 🔹 2. If user is on a protected route and no valid token → redirect to login
//   if (isProtectedRoute) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/admin/login", request.url));
//     }

//     try {
//       await jose.jwtVerify(token, secret);
//       return NextResponse.next();
//     } catch {
//       return NextResponse.redirect(new URL("/admin/login", request.url));
//     }
//   }

//   // Default (public routes)
//   return response;
// }

// export const config = {
//   matcher: ["/api/:path*", "/admin/:path*"],
// };





import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";

function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

function applySecurityHeaders(response: NextResponse, nonce: string) {
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}'
      https://www.googletagmanager.com
      https://www.google-analytics.com
      https://www.google.com
      https://www.gstatic.com
      https://cdn.tiny.cloud;
    style-src 'self' 'nonce-${nonce}'
      https://fonts.googleapis.com
      https://cdn.tiny.cloud;
    img-src 'self' data: blob: https://*.dropboxusercontent.com https:;
    font-src 'self' https://fonts.gstatic.com https://cdn.tiny.cloud;
    connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://api.resend.com https://www.google.com https://cdn.tiny.cloud;
    frame-src 'self' https://www.youtube.com https://player.vimeo.com https://www.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
  `.replace(/\n/g, "");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  // keep your cors
  response.headers.set("Access-Control-Allow-Origin", "https://docs-rho-wine.vercel.app");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return response;
}

export async function proxy(request: NextRequest) {
  const nonce = generateNonce();
  const path = request.nextUrl.pathname;

  let response = NextResponse.next();

  // ---------- AUTH LOGIC ----------
  const isLoginPage = path === "/admin/login";
  const isProtectedRoute = path.startsWith("/admin") && !isLoginPage;

  const token = request.cookies.get("adminToken")?.value || "";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

  if (isLoginPage && token) {
    try {
      await jose.jwtVerify(token, secret);
      response = NextResponse.redirect(new URL("/admin", request.url));
      return applySecurityHeaders(response, nonce);
    } catch {}
  }

  if (isProtectedRoute) {
    if (!token) {
      response = NextResponse.redirect(new URL("/admin/login", request.url));
      return applySecurityHeaders(response, nonce);
    }

    try {
      await jose.jwtVerify(token, secret);
    } catch {
      response = NextResponse.redirect(new URL("/admin/login", request.url));
      return applySecurityHeaders(response, nonce);
    }
  }

  // ---------- DEFAULT ----------
  return applySecurityHeaders(response, nonce);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
