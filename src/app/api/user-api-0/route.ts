export const GET = () =>
  new Response(JSON.stringify({ user: { name: "John Doe" } }));




// for every api ,, we need a folder then route.ts then stringify,, but if we use elysia 

/*
Simple comparison (remember this)
Next.js API → structured, file-based, more boilerplate
Elysia → code-based, minimal, faster to write

*/