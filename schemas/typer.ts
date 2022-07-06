export interface StegDokument {
  steg: Steg;
  title: DokumentTittel;
  name: DokumentNavn;
  type: SanityTyper.DOCUMENT;
  fields: Field[];
}

interface Field {
  name: string;
  title: string;
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
