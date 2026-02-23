import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'



const privateRoutes = [
    "/private",
    "/dashbaord",
    "/secret"
]
export async function proxy(req) {
    const token = await getToken({req});
    const reqPath = req.nextUrl.pathname;
    const isAuthenticated = Boolean(token)
    const isUser = token?.role === "user";
    const isAdmin = token?.role === "admin"
    const isPrivate = privateRoutes.some(route => reqPath.startsWith(route))
    console.log({isAuthenticated, isUser, reqPath, isPrivate})


    if(!isAuthenticated && isPrivate){
        const loginUrl = new URL("/api/auth/signin", req.url)
        loginUrl.searchParams.set("callbackUrl", reqPath)
        return NextResponse.redirect(loginUrl)
    }

    // return NextResponse.redirect(new URL('/home', request.url))
    return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: ['/private/:path*', '/dashboard/:path*', '/secret/:path*'],
}