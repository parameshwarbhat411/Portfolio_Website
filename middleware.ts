import { NextResponse } from 'next/server';

export function middleware(req: Request) {
    const url = new URL(req.url);

    // Let Next.js internals, static files, and the maintenance page itself load
    if (
        url.pathname.startsWith('/_next') ||
        url.pathname.startsWith('/static') ||
        url.pathname.startsWith('/favicon') ||
        url.pathname === '/maintenance.html'
    ) {
        return NextResponse.next();
    }

    // Rewrite everything else to maintenance.html
    url.pathname = '/maintenance.html';
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: '/:path*',
};