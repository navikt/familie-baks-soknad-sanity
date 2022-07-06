export interface StegDokument {
  steg: StegTittel;
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

export enum StegTittel { //Todo: fiks denne
  FORSIDE = 'Forside',
  OM_DEG = 'Om deg',
  DIN_LIVSSITUASJON = 'Din livssituasjon',
  VELG_BARN = 'VELG_BARN',
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
