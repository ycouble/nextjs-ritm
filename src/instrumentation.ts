export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { Hook } = await import("require-in-the-middle");
    // const { Hook } = await import("import-in-the-middle");
    console.log("Registering Require Hook");
    const requireHook = new Hook(
      ["openai", "./lib"],
      { internals: true },
      function (exports, name, basedir) {
        console.log("Require Hooked", name);
        return exports;
      }
    );
  }
}
