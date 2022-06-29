export interface SpørsmålTemplate extends SpørsmålBaseTemplate {
  name: `sporsmal_${Steg}`;
}

export interface SpørsmålBaseTemplate {
  title: string;
  type: SanityTyper;
  fields: Field[];
}

interface Field {
  title: string;
  name: string;
  type: SanityTyper;
}

export enum SanityTyper {
  STRING = 'string',
  REFERENCE = 'reference',
  BOOLEAN = 'boolean',
  OBJECT = 'object',
  ARRAY = 'array',
  BLOCK = 'block',
  DOCUMENT = 'document',
  TABLE = 'table',
}

export enum Steg {
  FORSIDE = 'FORSIDE',
  OM_DEG = 'OM_DEG',
  DIN_LIVSSITUASJON = 'DIN_LIVSSITUASJON',
}
