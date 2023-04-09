import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const jwt = request.cookies.get('token'); //gets the cookie in the headers
  if (request.nextUrl.pathname.includes('/dashboard')) {
    //validates if the url includes 'dashboard' so we can implement logic from it
    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/login', request.url)); //make sure the token isnt undefined, if its, redirect it to login
    }
    try {
      //if token exists, lets make sure its valid
      const { payload } = await jwtVerify(jwt, new TextEncoder().encode()); //makes sure its valid AND with the encoder makes sure the backedn we are calling created it
      console.log(payload);
      return NextResponse.next(); //if its valid, redirects to dashboard
    } catch (error) {
      console.log(error); //if itt doesnt, redirects to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next(); //continues visitiong the pages that dont need a token
}
