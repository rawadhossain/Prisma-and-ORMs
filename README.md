# Prisma and ORMS

# Singleton prisma client
Ref - https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
- Create db/index.ts
- Add a prisma client singleton inside it

```bash
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
```
- Update imports of prisma everywhere

```bash
import client from "@/db"
```

<br>
<br>
<u>

## Initialize an empty Node.js project with Typescript


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
