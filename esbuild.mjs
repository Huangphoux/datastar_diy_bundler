import * as esbuild from "esbuild";

await esbuild.build({
    bundle: true,
    minify: true,
    sourcemap: true,
    entryPoints: ["src/bundles/datastar.ts"], // which file to bundle
    outdir: "../bundles",                     // output directory
    target: "es2023",
    format: "esm",
    // define: { ALIAS: "star" },
});