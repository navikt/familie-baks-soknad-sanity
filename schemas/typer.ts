import { ObjectField } from '@sanity/types/src/schema/types';

export interface Field extends Omit<ObjectField, 'type'> {
  type: SanityTyper | CustomSanityTyper;
}

export interface SpørsmålTemplate extends SpørsmålBaseTemplate {
  name: DokumentNavn;
}

export interface SpørsmålBaseTemplate {
  title: string;
  type: SanityTyper | CustomSanityTyper;
  fields: Field[];
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

export enum CustomSanityTyper {
  LOCALE_STRING = 'localeString',
}

export enum StegTittel {
  FORSIDE = 'Forside',
  OM_DEG = 'Om deg',
  DIN_LIVSSITUASJON = 'Din livssituasjon',
}

export enum DokumentNavn {
  NAVIGASJON = 'navigasjon',
  FORSIDE_BEKREFTELSESBOKS = 'forside_bekreftelsesboks',
  FORSIDE_PUNKTLISTE = 'forside_punktliste',
  OM_DEG_PERSONOPPLYSNINGER = 'om_deg_personopplysninger',
  OM_DEG_SPØRSMÅL = 'om_deg_sporsmal',
  DIN_LIVSSITUASJON_SPØRSMÅL = 'din_livssituasjon_sporsmal',
}

export enum DokumentTittel {
  NAVIGASJON = 'Navigasjon',
  SPØRSMÅL = 'Spørsmål',
  FORSIDE_BEKREFTELSESBOKS = 'Bekreftelsesboks',
  FORSIDE_PUNKTLISTE = 'Punktliste',
  OM_DEG_PERSONOPPLYSNINGER = 'Personopplysninger',
}

export enum Ytelse {
  ORDINÆR_BARNETRYGD = 'ORDINÆR_BARNETRYGD',
  UTVIDET_BARNETRYGD = 'UTVIDET_BARNETRYGD',
  KONTANTSTØTTE = 'KONTANTSTØTTE',
}
