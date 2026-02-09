

"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { useState } from "react"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient()) // with every render we are regenrating the query client, 
  // and the reason is that it wont get stale in every rerender, and it will be
  //  the same instance of the query client, so we are using useState to create a 
  // single instance of the query client that will be used throughout the app,

  return (
    
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    
  )
}  

