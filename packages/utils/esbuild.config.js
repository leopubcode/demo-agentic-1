import esbuild from "esbuild";

async function run() {
  const options = {
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outfile: "dist/index.cjs",
    target: "node20",
  };

  if (process.env.WATCH_MODE) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
  } else {
    await esbuild.build(options);
  }
}

run().catch(() => process.exit(1));
// "build": "esbuild ./src/index.ts --bundle --platform=node --packages=external --outfile=dist/index.cjs --target=node20",
