import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("hello this is a bun response", { status: 200 });
    } else {
      return new Response("server not found", { status: 404 });
    }
  },
  port: 4010,
  hostname: "127.0.0.1",
});
