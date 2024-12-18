# Prisma and ORMS

Initialize an empty Node.js project with Typescript

```bash
npm init -y
npm install typescript
npx tsc --init
```

Add dependencies

```bash
npm install prisma
or
npm install prisma typescript ts-node @types/node --save-dev
```

```bash
npm install express @types/express
```

tsconfig.json

```bash
rootDir: "./src"
outDir: "./dist"
```

package.json

```bash
"scripts": {
        "dev": "tsc -b && node ./dist/index.js"
},

"prisma": {
  "seed": "ts-node prisma\seed.ts"
}
```

Initialize a fresh prisma project

```bash
npx prisma init
```

Create a prisma migration

```bash
npx prisma migrate dev
```

Generate a prisma client

```bash
npx prisma generate
```

Seed the database

```bash
npx prisma db seed
```
