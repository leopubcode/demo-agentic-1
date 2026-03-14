import esbuild from "esbuild";
import externalizeAllPackagesExcept from "esbuild-plugin-noexternal";

async function run() {
  const options = {
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: "dist",
    entryNames: "[name]",
    outExtension: { ".js": ".cjs" },
    target: "node20",
    plugins: [externalizeAllPackagesExcept(["@repo/utils"])],
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
