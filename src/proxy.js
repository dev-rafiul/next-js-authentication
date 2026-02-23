import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

export async function proxy(req) {
    const token = await getToken({req});
    console.log(token)


    // return NextResponse.redirect(new URL('/home', request.url))
    return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: '/private/:path*',
}