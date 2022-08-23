import { ReactNode } from 'react';

import { Rule } from '@sanity/types';

export interface DokumentBase {
  title: string;
  type: SanityTyper.DOCUMENT;
  fields: Field[];
  name: DokumentNavn;
}

export interface SpørsmålDokumentBase {
  type: SanityTyper.DOCUMENT;
  fields: Field[];
}

export interface StegDokument extends DokumentBase {
  steg: Steg;
}

export type Field = FieldBase &
  (
    | {
        type: SanityTyper.OBJECT;
        description?: string;
        validation?: (rule: Rule) => Rule;
      }
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
  FRITTSTAENDEORD_YTELSE = 'FRITTSTAENDEORD_YTELSE',
  FRITTSTAENDEORD_GEOGRAFISK_OMRADE = 'FRITTSTAENDEORD_GEOGRAFISK_OMRADE',
  FORSIDE_VEILEDERHILSEN = 'FORSIDE_VEILEDERHILSEN',
  FORSIDE_TITTEL = 'FORSIDE_TITTEL',
  FORSIDE_SPRAKVELGER = 'FORSIDE_SPRAKVELGER',
  FORSIDE_BEKREFTELSESBOKS = 'FORSIDE_BEKREFTELSESBOKS',
  FORSIDE_PUNKTLISTE = 'FORSIDE_PUNKTLISTE',
  FORSIDE_PERSONOPPLYSNINGSLENKE = 'FORSIDE_PERSONOPPLYSNINGSLENKE',
  OM_DEG_TITTEL = 'OM_DEG_TITTEL',
  OM_DEG_PERSONOPPLYSNINGER = 'OM_DEG_PERSONOPPLYSNINGER',
  OM_DEG_SPORSMAL = 'OM_DEG_SPORSMAL',
  DIN_LIVSSITUASJON_TITTEL = 'DIN_LIVSSITUASJON_TITTEL',
  DIN_LIVSSITUASJON_SPORSMAL = 'DIN_LIVSSITUASJON_SPORSMAL',
  VELG_BARN_TITTEL = 'VELG_BARN_TITTEL',
  VELG_BARN_LENKER = 'VELG_BARN_LENKER',
  VELG_BARN_KORT = 'VELG_BARN_KORT',
  OM_BARNA_TITTEL = 'OM_BARNA_TITTEL',
  OM_BARNA_SPORSMAL = 'OM_BARNA_SPORSMAL',
  MODAL_UTENLANDSOPPHOLD_SOKER = 'MODAL_UTENLANDSOPPHOLD_SOKER',
  MODAL_UTENLANDSOPPHOLD_BARN = 'MODAL_UTENLANDSOPPHOLD_BARN',
  MODAL_BARNEHAGEPLASS = 'MODAL_BARNEHAGEPLASS',
  MODAL_PENSJON = 'MODAL_PENSJON',
  MODAL_LEGG_TIL_BARN = 'MODAL_LEGG_TIL_BARN',
  MODAL_ARBEIDSPERIODE = 'MODAL_ARBEIDSPERIODE',
  MODAL_EOS_YTELSE = 'MODAL_EOS_YTELSE',
  MODAL_ANDRE_UTBETALINGER = 'MODAL_ANDRE_UTBETALINGER',
}

export const dokumentTittel: Record<DokumentNavn, string> = {
  NAVIGASJON: 'Navigasjon',
  MODAL_UTENLANDSOPPHOLD_SOKER: 'Utenlandsopphold søker',
  MODAL_UTENLANDSOPPHOLD_BARN: 'Utenlandsopphold barn',
  MODAL_BARNEHAGEPLASS: 'Barnehageplass',
  MODAL_PENSJON: 'Pensjon',
  MODAL_ARBEIDSPERIODE: 'Arbeidsperiode',
  MODAL_LEGG_TIL_BARN: 'Legg til barn',
  MODAL_EOS_YTELSE: 'EØS ytelse',
  MODAL_ANDRE_UTBETALINGER: 'Andre utbetalinger',
  FRITTSTAENDEORD_YTELSE: 'Ytelse',
  FRITTSTAENDEORD_GEOGRAFISK_OMRADE: 'Geografisk område',
  FORSIDE_VEILEDERHILSEN: 'Veilederhilsen',
  FORSIDE_TITTEL: 'Søknadstittel',
  FORSIDE_SPRAKVELGER: 'Språkvelger',
  FORSIDE_BEKREFTELSESBOKS: 'Bekreftelsesboks',
  FORSIDE_PUNKTLISTE: 'Punktliste',
  FORSIDE_PERSONOPPLYSNINGSLENKE: 'Personopplysningslenke',
  OM_DEG_TITTEL: 'Stegtittel',
  OM_DEG_PERSONOPPLYSNINGER: 'Personopplysninger',
  OM_DEG_SPORSMAL: 'Spørsmål',
  DIN_LIVSSITUASJON_TITTEL: 'Stegtittel',
  DIN_LIVSSITUASJON_SPORSMAL: 'Spørsmål',
  VELG_BARN_TITTEL: 'Stegtittel',
  VELG_BARN_LENKER: 'Lenker',
  VELG_BARN_KORT: 'Barnekort',
  OM_BARNA_SPORSMAL: 'Spørsmål',
  OM_BARNA_TITTEL: 'Stegtittel',
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

export enum EFlettefelt {
  BARN_NAVN = 'BARN_NAVN',
  SØKER_NAVN = 'SØKER_NAVN',
  YTELSE = 'YTELSE',
  UTLANDET_NORGE = 'UTLANDET_NORGE',
  PERSONTYPE = 'PERSONTYPE',
  I_UTENFOR = 'I_UTENFOR',
}
