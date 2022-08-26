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
  TEKSTER_FOR_DATO = 'TEKSTER_FOR_DATO',
  FRITTSTAENDEORD_YTELSE = 'FRITTSTAENDEORD_YTELSE',
  FRITTSTAENDEORD_SVARALTERNATIVER = 'FRITTSTAENDEORD_SVARALTERNATIVER',
  FRITTSTAENDEORD_PREPOSISJONER = 'FRITTSTAENDEORD_PREPOSISJONER',
  FRITTSTAENDEORD_GEOGRAFISK_OMRADE = 'FRITTSTAENDEORD_GEOGRAFISK_OMRADE',
  FORSIDE_VEILEDERHILSEN = 'FORSIDE_VEILEDERHILSEN',
  FORSIDE_TITTEL = 'FORSIDE_TITTEL',
  FORSIDE_SPRAKVELGER = 'FORSIDE_SPRAKVELGER',
  FORSIDE_BEKREFTELSESBOKS_BRODTEKST = 'FORSIDE_BEKREFTELSESBOKS_BRODTEKST',
  FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER = 'FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER',
  FORSIDE_PUNKTLISTE = 'FORSIDE_PUNKTLISTE',
  FORSIDE_PERSONOPPLYSNINGSLENKE = 'FORSIDE_PERSONOPPLYSNINGSLENKE',
  FORSIDE_MELLOMLAGRET_ALERT = 'FORSIDE_MELLOMLAGRET_ALERT',
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
  OM_BARNET_TITTEL = 'OM_BARNET_TITTEL',
  OM_BARNET_SUBTITLER = 'OM_BARNET_SUBTITLER',
  OM_BARNET_SPORSMAL = 'OM_BARNET_SPORSMAL',
  OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE = 'OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE',
  OM_BARNET_ANDRE_TEKSTER = 'OM_BARNET_ANDRE_TEKSTER',
  EOS_FOR_SOKER_TITTEL = 'EOS_FOR_SOKER_TITTEL',
  EOS_FOR_SOKER_SPORSMAL = 'EOS_FOR_SOKER_SPORSMAL',
  EOS_FOR_BARN_TITTEL = 'EOS_FOR_BARN_TITTEL',
  EOS_FOR_BARN_ANDRE_FORELDER = 'EOS_FOR_BARN_ANDRE_FORELDER',
  EOS_FOR_BARN_OMSORGSPERSON = 'EOS_FOR_BARN_OMSORGSPERSON',
  EOS_FOR_BARN_BARNET = 'EOS_FOR_BARN_BARNET',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER = 'EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER',
  DOKUMENTASJON_TITTEL = 'DOKUMENTASJON_TITTEL',
  OPPSUMMERING = 'OPPSUMMERING',
  DOKUMENTASJON_SCANNING_GUIDE = 'DOKUMENTASJON_SCANNING_GUIDE',
  DOKUMENTASJON_INFO = 'DOKUMENTASJON_INFO',
  DOKUMENTASJON_KNAPPER_OG_CHECKBOX = 'DOKUMENTASJON_KNAPPER_OG_CHECKBOX',
  DOKUMENTASJON_VEDLEGG = 'DOKUMENTASJON_VEDLEGG',
  KVITTERING = 'KVITTERING',
  MODAL_UTENLANDSOPPHOLD_SOKER = 'MODAL_UTENLANDSOPPHOLD_SOKER',
  MODAL_UTENLANDSOPPHOLD_BARN = 'MODAL_UTENLANDSOPPHOLD_BARN',
  MODAL_BARNEHAGEPLASS = 'MODAL_BARNEHAGEPLASS',
  MODAL_PENSJON_SOKER = 'MODAL_PENSJON_SOKER',
  MODAL_PENSJON_ANDRE_FORELDER = 'MODAL_PENSJON_ANDRE_FORELDER',
  MODAL_PENSJON_OMSORGSPERSON = 'MODAL_PENSJON_OMSORGSPERSON',
  MODAL_LEGG_TIL_BARN = 'MODAL_LEGG_TIL_BARN',
  MODAL_ARBEIDSPERIODE_SOKER = 'MODAL_ARBEIDSPERIODE_SOKER',
  MODAL_ARBEIDSPERIODE_ANDRE_FORELDER = 'MODAL_ARBEIDSPERIODE_ANDRE_FORELDER',
  MODAL_ARBEIDSPERIODE_OMSORGSPERSON = 'MODAL_ARBEIDSPERIODE_OMSORGSPERSON',
  MODAL_EOS_YTELSE = 'MODAL_EOS_YTELSE',
  MODAL_ANDRE_UTBETALINGER_SOKER = 'MODAL_ANDRE_UTBETALINGER_SOKER',
  MODAL_ANDRE_UTBETALINGER_ANDRE_FORELDER = 'MODAL_ANDRE_UTBETALINGER_ANDRE_FORELDER',
  MODAL_ANDRE_UTBETALINGER_OMSORGSPERSON = 'MODAL_ANDRE_UTBETALINGER_OMSORGSPERSON',
}

export const dokumentTittel: Record<DokumentNavn, string> = {
  NAVIGASJON: 'Navigasjon',
  TEKSTER_FOR_DATO: 'Tekster for datofelt',
  MODAL_UTENLANDSOPPHOLD_SOKER: 'Utenlandsopphold søker',
  MODAL_UTENLANDSOPPHOLD_BARN: 'Utenlandsopphold barn',
  MODAL_BARNEHAGEPLASS: 'Barnehageplass',
  MODAL_PENSJON_SOKER: 'Pensjon søker',
  MODAL_PENSJON_ANDRE_FORELDER: 'Pensjon andre forelder',
  MODAL_PENSJON_OMSORGSPERSON: 'Pensjon omsorgsperson',
  MODAL_ARBEIDSPERIODE_SOKER: 'Arbeidsperiode søker',
  MODAL_ARBEIDSPERIODE_ANDRE_FORELDER: 'Arbeidsperiode andre forelder',
  MODAL_ARBEIDSPERIODE_OMSORGSPERSON: 'Arbeidsperiode omsorgsperson',
  MODAL_LEGG_TIL_BARN: 'Legg til barn',
  MODAL_EOS_YTELSE: 'EØS ytelse',
  MODAL_ANDRE_UTBETALINGER_SOKER: 'Andre utbetalinger søker',
  MODAL_ANDRE_UTBETALINGER_ANDRE_FORELDER: 'Andre utbetalinger andre forelder',
  MODAL_ANDRE_UTBETALINGER_OMSORGSPERSON: 'Andre utbetalinger omsorgsperson',
  FRITTSTAENDEORD_YTELSE: 'Ytelse',
  FRITTSTAENDEORD_GEOGRAFISK_OMRADE: 'Geografisk område',
  FRITTSTAENDEORD_SVARALTERNATIVER: 'Svaralternativer',
  FRITTSTAENDEORD_PREPOSISJONER: 'Preposisjoner',
  FORSIDE_VEILEDERHILSEN: 'Veilederhilsen',
  FORSIDE_TITTEL: 'Søknadstittel',
  FORSIDE_SPRAKVELGER: 'Språkvelger',
  FORSIDE_BEKREFTELSESBOKS_BRODTEKST: 'Bekreftelsesboks brødtekst',
  FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER: 'Bekreftelsesboks andre tekster',
  FORSIDE_PUNKTLISTE: 'Punktliste',
  FORSIDE_PERSONOPPLYSNINGSLENKE: 'Personopplysningslenke',
  FORSIDE_MELLOMLAGRET_ALERT: 'Mellomlagret alert',
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
  OM_BARNET_TITTEL: 'Stegtittel',
  OM_BARNET_SUBTITLER: 'Subtitler',
  OM_BARNET_SPORSMAL: 'Spørsmål',
  OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE: 'Oppfølgning opplysningspåminnelse',
  OM_BARNET_ANDRE_TEKSTER: 'Andre tekster',
  EOS_FOR_SOKER_TITTEL: 'Stegtittel',
  EOS_FOR_SOKER_SPORSMAL: 'Spørsmål',
  EOS_FOR_BARN_TITTEL: 'Stegtittel',
  EOS_FOR_BARN_ANDRE_FORELDER: 'Andre forelder',
  EOS_FOR_BARN_OMSORGSPERSON: 'Omsorgsperson',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER: 'Slektsforhold valgalternativer',
  EOS_FOR_BARN_BARNET: 'Barnet',
  OPPSUMMERING: 'Oppsummering',
  DOKUMENTASJON_TITTEL: 'Stegtittel',
  DOKUMENTASJON_SCANNING_GUIDE: 'Bilde scanning guide',
  DOKUMENTASJON_INFO: 'Info innledning',
  DOKUMENTASJON_KNAPPER_OG_CHECKBOX: 'Knapper og checkbox',
  DOKUMENTASJON_VEDLEGG: 'Vedlegg',
  KVITTERING: 'Kvittering',
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
  ANTALL = 'ANTALL',
  TOTAL_ANTALL = 'TOTAL_ANTALL',
  DATO = 'DATO',
  KLOKKESLETT = 'KLOKKESLETT',
}
