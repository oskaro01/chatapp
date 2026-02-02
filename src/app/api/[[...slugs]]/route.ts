import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get("/user", { user: { name: "John Doe" } }) // end point {return}


export const GET = app.fetch 
export const POST = app.fetch 

export type App = typeof app

// what this code do? >> 
// It defines a type 'App' that represents the structure 
// of the Elysia application instance 'app'.
// This allows for type-safe interactions with the 
// application's API endpoints and middleware.

// whats the endpoint and api here? >>
// The endpoint is "/user" and the API is the Elysia application instance 'app'.
// what do we understand by instance here?
// >> An instance refers to a specific realization of an object or class in programming.
// In this case, 'app' is an instance of the Elysia class, 
// representing a specific web application with defined routes and behaviors.
// So in very short >>
// An instance is a specific object created from a class, 
// representing a unique realization of that class in code.

// so the object has a specific structure defined by the class? 
// whats that structure? >> 
// The structure is defined by the Elysia class, which includes:
// - Defined routes (e.g., "/user")
// - Middleware and plugins
// - Configuration options (e.g., prefix '/api')
// - Methods for handling HTTP requests (GET, POST, etc.)
// This structure is what makes the 'app' instance a specific realization of the Elysia class.