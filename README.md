# familie-baks-soknad-sanity
Sanity (cms) for søknad til barnetrygd og kontantstøtte (BAKS)

### Kjøre lokalt
* Kjør `nvm use` (Node-versjonen ligger i `.nvmrc`).
* Aktiver riktig pnpm-versjon med `corepack enable` (henter versjonen fra `packageManager` i package.json).
* Kjør `pnpm install` for å installere alle npm-pakkene.
* Kjør `pnpm dev` for å starte applikasjonen på localhost:3333.
* Sanity-CLI-en kjøres via repoet: `pnpm exec sanity <kommando>` (ikke installer `@sanity/cli` globalt — den er ikke kompatibel med repoets pinnede sanity-versjon).

### Utvikling
* For å unngå at apper som bruker _familie-baks-soknad-sanity_ brekker dersom man endrer api_navn til et felt, har vi valgt å låse api_navn ved å gjøre den read only. Det betyr at ikke-utviklere kun kan endre selve innholdet i teksten, men utviklere kan endre api_navn. For å enable endring av api_navn må man fjerne ```readOnly: true``` -feltet i filen fieldsBase.ts.