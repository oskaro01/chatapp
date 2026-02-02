import { treaty } from '@elysiajs/eden'
import type { App } from '@/app/api/[[...slugs]]/route'

// .api to enter /api prefix
export const client = treaty<App>('localhost:3000').api


// what this code do? 
// >> It creates a client instance using the 'treaty' library
//  to interact with the Elysia server defined in the 
// specified route file. The client is typed with 
// the 'App' type, which represents the structure of 
// the Elysia application, allowing for type-safe API 
// calls to the server at 'localhost:3000/api'. 

// in very short what it does is >> 
// Creates a typed client for interacting 
// with an Elysia API server running on localhost:3000.

// typed client? whats that?
// >> A typed client is a programming construct that 
// allows developers to interact with an API in a type-safe manner, 

//elysia api server? 
// >> An Elysia API server is a lightweight, fast, and scalable server built with the Elysia framework, 
//    which is a minimalistic and fast web framework for TypeScript/JavaScript.