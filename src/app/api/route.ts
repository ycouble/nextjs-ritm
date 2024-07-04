import { Hook as RequireHook } from "require-in-the-middle";

const requireHook = new RequireHook(function (exports, name, basedir) {
  console.log("Require Hooked", name);
  return exports;
});

export async function GET(request: Request) {
  const openai = (await import("openai")).default;

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
