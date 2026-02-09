"use client"

import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { client } from "./lib/client";
import { useRouter } from "next/navigation";


const ANIMALS = ["cat", "dog", "owl", "crow"]
const STORAGE_KEY = "chat_username"

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
    return `anonymous-${word}-${nanoid(5)}`
  
}

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter()

  useEffect(() => {
    const main =() => {
      const stored = localStorage.getItem(STORAGE_KEY)

      if (stored) {
        setUsername(stored)
        return
      }

      const generated = generateUsername()
      localStorage.setItem(STORAGE_KEY, generated)
      setUsername(generated)
    }

    main()
  }, [])

  // inside mutation we can send the user to the room,, how ? >> with a hook called useRouter from next/navigation, and then we can use the push method to navigate the user to the newly created room after we get the roomId from the response of the createRoom mutation.
  const { mutate: createRoom} = useMutation({  //mutate : createRoom , invokes the funtinon that we pass in the mutationFn property when we want to create a new chat room, and it will handle the asynchronous logic of making the API call to create the room and managing the loading and error states associated with that operation.
    mutationFn: async () => {

      const res = await client.room.create.post() // << this is how we make a POST request to the "/room" endpoint defined in our Elysia API server using the typed client we created. This will trigger the route handler for the "/room" endpoint, which in this case logs "room created" to the console. ,,, a fetch call to the backend to create a new chat room when the user clicks the "CREATE SECURE ROOM" button. The client.room.create.post() method sends a POST request to the "/room/create" endpoint defined in our Elysia API server, which will handle the request and perform the necessary actions to create a new chat room. The response from the server can be used to update the UI or navigate the user to the newly created chat room.

      if (res.status === 200) {
        router.push(`/room/${res.data?.roomId}`) // << This line uses the useRouter hook from Next.js to programmatically navigate the user to the newly created chat room. After successfully creating a room and receiving the roomId from the server response, this line constructs the URL for the chat room (e.g., "/room/abc123") and pushes it to the router, which updates the browser's URL and renders the corresponding page for that chat room.
      }
    }
  })

  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-green-500">
              {"> "}private_chat
            </h1>
            <p className="text-zinc-500 text-sm">A private, self-destructing chat room.</p>
          </div>
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500">Your Identity</label>
               
              <div className="flex items-center gap-3">

                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400
                font-mono">
                  {username}
                </div>

              </div>
            </div>
            <button 
              onClick={() => createRoom()} // << This onClick handler is attached to the "CREATE SECURE ROOM" button. When the button is clicked, it triggers the createRoom function, which is defined using the useMutation hook from React Query. The createRoom function makes a POST request to the "/room/create" endpoint of our Elysia API server to create a new chat room. This allows users to easily create a secure chat room with a single click.
              className="w-full bg-zinc-100 text-black p-3 text-sm 
              font-bold hover:bg-zinc-50 hover:text-black transition-colors mt-2 
              cursor-pointer disabled:opacity-50">
              CREATE SECURE ROOM
            </button>
          </div>

        </div>
      </div>


    </main>
  ) 
  
}




