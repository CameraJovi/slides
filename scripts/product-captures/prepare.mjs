import { cp, mkdir, readFile, writeFile } from "node:fs/promises"
import { createHash } from "node:crypto"
import { execFileSync } from "node:child_process"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("../../", import.meta.url))
const source = resolve(root, process.argv[2] || "../FrontCameraJovi/camerajoviUpgrade")
const destination = resolve(root, ".cache/jovi-product")
const files = ["app", "public", "package.json", "package-lock.json", "next.config.mjs", "postcss.config.mjs", "jsconfig.json"]

await mkdir(destination, { recursive: true })
for (const file of files) {
  await cp(resolve(source, file), resolve(destination, file), { recursive: true })
}

const sourceFiles = [
  "app/equacao/page.js", "app/resumo/page.js", "app/flashcard/page.js",
  "app/codigo/page.js", "app/caderno/page.js", "app/horarios/page.js",
  "app/salvar/page.js", "app/components/CardFlashcard.js",
  "app/components/ModalSmartPix.js", "app/components/CorpoCamera.js",
  "app/components/ItemHistorico.js", "app/lib/tailwind.js", "app/globals.css",
]
const hashes = {}
for (const file of sourceFiles) {
  hashes[file] = createHash("sha256").update(await readFile(resolve(source, file))).digest("hex")
}
const repository = resolve(source, "..")
const sourceRevision = execFileSync("git", ["-c", `safe.directory=${repository.replaceAll("\\", "/")}`, "-C", repository, "rev-parse", "HEAD"], { encoding: "utf8" }).trim()
await writeFile(resolve(destination, "capture-source.json"), JSON.stringify({ sourceRevision, hashes }, null, 2) + "\n")
await mkdir(resolve(destination, "app/demo/pix"), { recursive: true })
for (const [from, to] of [["fixtures.mjs", "fixtures.js"], ["demo-page.jsx", "page.js"], ["pix-page.jsx", "pix/page.js"]]) {
  await cp(resolve(root, "scripts/product-captures", from), resolve(destination, "app/demo", to))
}
console.log("Produto copiado sem alterações para .cache/jovi-product (sem arquivos .env).")
