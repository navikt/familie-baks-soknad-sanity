import { ReactNode } from 'react';

import { Rule } from '@sanity/types';

export interface DokumentBase {
  type: SanityTyper.DOCUMENT;
  fields: Field[];
}

export interface StegDokument extends DokumentBase {
  steg: Steg;
  title: string;
  name: DokumentNavn;
}

type Field = FieldBase &
  (
    | { description: `${string | undefined}${'(obligatorisk)'}`; validation: (rule: Rule) => Rule }
    | { description: `${string | undefined}${'(frivillig)'}`; validation?: (rule: Rule) => Rule }
  );

interface FieldBase {
  name: string;
  title: string | ReactNode;

  [key: string]: unknown;
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
  CUSTOM_BLOCK = 'customBlock',
  LOCALE_STRING = 'localeString',
  LOCALE_BLOCK = 'localeBlock',
  ALERT_STRING = 'alertString',
  ALERT_BLOCK = 'alertBlock',
}

export enum DokumentNavn {
  NAVIGASJON = 'NAVIGASJON',
  FORSIDE_BEKREFTELSESBOKS = 'FORSIDE_BEKREFTELSESBOKS',
  FORSIDE_PUNKTLISTE = 'FORSIDE_PUNKTLISTE',
  OM_DEG_PERSONOPPLYSNINGER = 'OM_DEG_PERSONOPPLYSNINGER',
  OM_DEG_SPORSMAL = 'OM_DEG_SPORSMAL',
  DIN_LIVSSITUASJON_SPORSMAL = 'DIN_LIVSSITUASJON_SPORSMAL',
}

export const dokumentTittel: Record<DokumentNavn, string> = {
  NAVIGASJON: 'Navigasjon',
  FORSIDE_BEKREFTELSESBOKS: 'Bekreftelsesboks',
  FORSIDE_PUNKTLISTE: 'Punktliste',
  OM_DEG_PERSONOPPLYSNINGER: 'Personopplysninger',
  OM_DEG_SPORSMAL: 'Spørsmål',
  DIN_LIVSSITUASJON_SPORSMAL: 'Spørsmål',
};

export enum Steg {
  FORSIDE = 'FORSIDE',
  OM_DEG = 'OM_DEG',
  DIN_LIVSSITUASJON = 'DIN_LIVSSITUASJON',
  VELG_BARN = 'VELG_BARN',
  OM_BARNA = 'OM_BARNA',
  OM_BARNET = 'OM_BARNET',
  EØS_FOR_SØKER = 'EØS_FOR_SØKER',
  EØS_FOR_BARN = 'EØS_FOR_BARN',
  OPPSUMMERING = 'OPPSUMMERING',
  DOKUMENTASJON = 'DOKUMENTASJON',
  KVITTERING = 'KVITTERING',
}

export const stegTittel: Record<Steg, string> = {
  FORSIDE: 'Forside',
  OM_DEG: 'Om deg',
  DIN_LIVSSITUASJON: 'Din livssituasjon',
  VELG_BARN: 'Velg barn',
  OM_BARNA: 'Om barna',
  OM_BARNET: 'Om barnet',
  EØS_FOR_SØKER: 'Eøs for søker',
  EØS_FOR_BARN: 'Eøs for barn',
  OPPSUMMERING: 'Oppsummering',
  DOKUMENTASJON: 'Dokumentasjon',
  KVITTERING: 'Kvittering',
};

export enum Ytelse {
  ORDINÆR_BARNETRYGD = 'ORDINÆR_BARNETRYGD',
  UTVIDET_BARNETRYGD = 'UTVIDET_BARNETRYGD',
  KONTANTSTØTTE = 'KONTANTSTØTTE',
}
