console.log("before import OpenAI");
// import OpenAI from "openai";
console.log("after import OpenAI");

import { foo } from "./lib";
export async function GET(request: Request) {
  // new OpenAI();

  console.log("foo", foo);

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
