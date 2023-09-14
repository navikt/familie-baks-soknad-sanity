# familie-baks-soknad-sanity
Sanity (cms) for søknad til kontantstøtte

### Installere Sanity
* Kjør `npm install -g @sanity/cli` i terminalen.

### Kjøre lokalt
* Kjør `yarn` for å installere alle npm-pakkene. 
* Kjør `yarn dev` for å starte applikasjonen på localhost:3333.

### Utvikling
* For å unngå at apper som bruker _familie-baks-soknad-sanity_ brekker dersom man endrer api_navn til et felt, har vi valgt å låse api_navn ved å gjøre den read only. Det betyr at ikke-utviklere kun kan endre selve innholdet i teksten, men utviklere kan endre api_navn. For å enable endring av api_navn må man fjerne ```readOnly: true``` -feltet i filen fieldsBase.ts.