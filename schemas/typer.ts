import { ReactNode } from 'react';

import { Rule } from '@sanity/types';

export interface DokumentBase {
  title: string;
  type: SanityTyper.DOCUMENT;
  fields: Field[];
  name: DokumentNavn;
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
}

export enum DokumentNavn {
  NAVIGASJON = 'NAVIGASJON',
  FORMATERINGSFEILMELDINGER = 'FORMATERINGSFEILMELDINGER',
  FRITTSTAENDEORD = 'FRITTSTAENDEORD',
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
  OM_DEG_ANDRE_TEKSTER = 'OM_DEG_ANDRE_TEKSTER',
  DIN_LIVSSITUASJON_TITTEL = 'DIN_LIVSSITUASJON_TITTEL',
  DIN_LIVSSITUASJON_SPORSMAL = 'DIN_LIVSSITUASJON_SPORSMAL',
  VELG_BARN_TITTEL = 'VELG_BARN_TITTEL',
  VELG_BARN_ANDRE_TEKSTER = 'VELG_BARN_ANDRE_TEKSTER',
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
  EOS_FOR_BARN_SPORSMAL_OM_BARN = 'EOS_FOR_BARN_SPORSMAL_OM_BARN',
  EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER = 'EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER',
  EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON = 'EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON',
  EOS_FOR_BARN_ANDRE_TEKSTER = 'EOS_FOR_BARN_ANDRE_TEKSTER',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER = 'EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER',
  DOKUMENTASJON_TITTEL = 'DOKUMENTASJON_TITTEL',
  OPPSUMMERING_TITTEL = 'OPPSUMMERING_TITTEL',
  OPPSUMMERING_ANDRE_TEKSTER = 'OPPSUMMERING_ANDRE_TEKSTER',
  DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER = 'DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER',
  DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER = 'DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER',
  DOKUMENTASJON_INFO = 'DOKUMENTASJON_INFO',
  DOKUMENTASJON_KNAPPER_OG_CHECKBOX = 'DOKUMENTASJON_KNAPPER_OG_CHECKBOX',
  DOKUMENTASJON_VEDLEGG_TITTEL = 'DOKUMENTASJON_VEDLEGG_TITTEL',
  DOKUMENTASJON_VEDLEGG_BESKRIVELSE = 'DOKUMENTASJON_VEDLEGG_BESKRIVELSE',
  KVITTERING_TITTEL = 'KVITTERING_TITTEL',
  KVITTERING_ANDRE_TEKSTER = 'KVITTERING_ANDRE_TEKSTER',
  VEDLIKEHOLDSARBEID = 'VEDLIKEHOLDSARBEID',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN = 'MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN = 'MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN',
  MODAL_UTENLANDSOPPHOLD_TITTEL_BARN = 'MODAL_UTENLANDSOPPHOLD_TITTEL_BARN',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN = 'MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER = 'MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER = 'MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER = 'MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER',
  MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER = 'MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER',
  MODAL_BARNEHAGEPLASS_TITTEL = 'MODAL_BARNEHAGEPLASS_TITTEL',
  MODAL_BARNEHAGEPLASS_SPORSMAL = 'MODAL_BARNEHAGEPLASS_SPORSMAL',
  MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER = 'MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER',
  MODAL_BARNEHAGEPLASS_ANDRE_TEKSTER = 'MODAL_BARNEHAGEPLASS_ANDRE_TEKSTER',
  MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER = 'MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER',
  MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER = 'MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER',
  MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON = 'MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_SOKER = 'MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_SOKER',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_OMSORGSPERSON = 'MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_OMSORGSPERSON',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER = 'MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER = 'MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON = 'MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON',
  MODAL_ARBEIDSPERIODE_TITTEL_SOKER = 'MODAL_ARBEIDSPERIODE_TITTEL_SOKER',
  MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER = 'MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER',
  MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON = 'MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_SOKER = 'MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_SOKER',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON = 'MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON',
  MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER = 'MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER',
  MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER = 'MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER',
  MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON = 'MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON',
  MODAL_EOS_YTELSE_TITTEL_SOKER = 'MODAL_EOS_YTELSE_TITTEL_SOKER',
  MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER = 'MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER',
  MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON = 'MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_SOKER = 'MODAL_EOS_YTELSE_ANDRE_TEKSTER_SOKER',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_EOS_YTELSE_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_OMSORGSPERSON = 'MODAL_EOS_YTELSE_ANDRE_TEKSTER_OMSORGSPERSON',
  MODAL_EOS_YTELSE_SPORSMAL_SOKER = 'MODAL_EOS_YTELSE_SPORSMAL_SOKER',
  MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER = 'MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER',
  MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON = 'MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON',
  MODAL_PENSJONSPERIODE_TITTEL_SOKER = 'MODAL_PENSJONSPERIODE_TITTEL_SOKER',
  MODAL_PENSJONSPERIODE_TITTEL_ANDRE_FORELDER = 'MODAL_PENSJONSPERIODE_TITTEL_ANDRE_FORELDER',
  MODAL_PENSJONSPERIODE_TITTEL_OMSORGSPERSON = 'MODAL_PENSJONSPERIODE_TITTEL_OMSORGSPERSON',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_SOKER = 'MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_SOKER',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON = 'MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON',
  MODAL_PENSJONSPERIODE_SPORSMAL_SOKER = 'MODAL_PENSJONSPERIODE_SPORSMAL_SOKER',
  MODAL_PENSJONSPERIODE_SPORSMAL_ANDRE_FORELDER = 'MODAL_PENSJONSPERIODE_SPORSMAL_ANDRE_FORELDER',
  MODAL_PENSJONSPERIODE_SPORSMAL_OMSORGSPERSON = 'MODAL_PENSJONSPERIODE_SPORSMAL_OMSORGSPERSON',
  MODAL_LEGG_TIL_BARN_TITTEL = 'MODAL_LEGG_TIL_BARN_TITTEL',
  MODAL_LEGG_TIL_BARN_SPORSMAL = 'MODAL_LEGG_TIL_BARN_SPORSMAL',
  MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER = 'MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER',
  MODAL_START_PAA_NYTT_TITTEL = 'MODAL_START_PAA_NYTT_TITTEL',
  MODAL_START_PAA_NYTT_ANDRE_TEKSTER = 'MODAL_START_PAA_NYTT_ANDRE_TEKSTER',
  MODAL_MISTET_INFORMASJONEN_DIN_TITTEL = 'MODAL_MISTET_INFORMASJONEN_DIN_TITTEL',
  MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER = 'MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER',
  MODAL_BLOKKER_TILBAKE_KNAPP_TITTEL = 'MODAL_BLOKKER_TILBAKE_KNAPP_TITTEL',
  MODAL_BLOKKER_TILBAKE_KNAPP_TEKST = 'MODAL_BLOKKER_TILBAKE_KNAPP_TEKST',
  MODAL_BLOKKER_TILBAKE_KNAPP_TIL_DITT_NAV = 'MODAL_BLOKKER_TILBAKE_KNAPP_TIL_DITT_NAV',
  MODAL_BLOKKER_TILBAKE_KNAPP_AVBRYT = 'MODAL_BLOKKER_TILBAKE_KNAPP_AVBRYT',
  BANNER = 'BANNER',
  KAN_IKKE_BRUKE_SOKNAD = 'KAN_IKKE_BRUKE_SOKNAD',
  ALTERNATIVE_TEKSTER = 'ALTERNATIVE_TEKSTER',
  HJELPETEKSTER_FOR_INPUT = 'HJELPETEKSTER_FOR_INPUT',
}

export const dokumentTittel: Record<DokumentNavn, string> = {
  MODAL_BLOKKER_TILBAKE_KNAPP_AVBRYT: 'Avbryt',
  MODAL_BLOKKER_TILBAKE_KNAPP_TEKST: 'Tekst',
  MODAL_BLOKKER_TILBAKE_KNAPP_TIL_DITT_NAV: 'Til ditt NAV',
  MODAL_BLOKKER_TILBAKE_KNAPP_TITTEL: 'Tittel',
  NAVIGASJON: 'Navigasjon',
  FORMATERINGSFEILMELDINGER: 'Formateringsfeilmeldinger',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER: 'Sp??rsm??l',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER: '??rsak valgalternativer',
  MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER: 'Tittel',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN: 'Andre tekster',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN: 'Sp??rsm??l',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN: '??rsak valgalternativer',
  MODAL_UTENLANDSOPPHOLD_TITTEL_BARN: 'Tittel',
  MODAL_BARNEHAGEPLASS_TITTEL: 'Tittel',
  MODAL_BARNEHAGEPLASS_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_BARNEHAGEPLASS_SPORSMAL: 'Sp??rsm??l',
  MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER: 'Beskrivelse valgalternativer',
  MODAL_LEGG_TIL_BARN_TITTEL: 'Tittel',
  MODAL_LEGG_TIL_BARN_SPORSMAL: 'Sp??rsm??l',
  MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER: 'Sp??rsm??l',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER: 'Sp??rsm??l',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON: 'Sp??rsm??l',
  MODAL_ARBEIDSPERIODE_TITTEL_SOKER: 'Tittel',
  MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER: 'Sp??rsm??l',
  MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER: 'Sp??rsm??l',
  MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON: 'Sp??rsm??l',
  MODAL_EOS_YTELSE_TITTEL_SOKER: 'Tittel',
  MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_EOS_YTELSE_SPORSMAL_SOKER: 'Sp??rsm??l',
  MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER: 'Sp??rsm??l',
  MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON: 'Sp??rsm??l',
  MODAL_PENSJONSPERIODE_TITTEL_SOKER: 'Tittel',
  MODAL_PENSJONSPERIODE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_PENSJONSPERIODE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_PENSJONSPERIODE_SPORSMAL_SOKER: 'Sp??rsm??l',
  MODAL_PENSJONSPERIODE_SPORSMAL_ANDRE_FORELDER: 'Sp??rsm??l',
  MODAL_PENSJONSPERIODE_SPORSMAL_OMSORGSPERSON: 'Sp??rsm??l',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_START_PAA_NYTT_TITTEL: 'Tittel',
  MODAL_START_PAA_NYTT_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_MISTET_INFORMASJONEN_DIN_TITTEL: 'Tittel',
  MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER: 'Andre tekster',
  FRITTSTAENDEORD: 'Frittst??ende ord',
  FORSIDE_VEILEDERHILSEN: 'Veilederhilsen',
  FORSIDE_TITTEL: 'S??knadstittel',
  FORSIDE_SPRAKVELGER: 'Spr??kvelger',
  FORSIDE_BEKREFTELSESBOKS_BRODTEKST: 'Bekreftelsesboks br??dtekst',
  FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER: 'Bekreftelsesboks andre tekster',
  FORSIDE_PUNKTLISTE: 'Punktliste',
  FORSIDE_PERSONOPPLYSNINGSLENKE: 'Personopplysningslenke',
  FORSIDE_MELLOMLAGRET_ALERT: 'Mellomlagret alert',
  OM_DEG_TITTEL: 'Stegtittel',
  OM_DEG_PERSONOPPLYSNINGER: 'Personopplysninger',
  OM_DEG_SPORSMAL: 'Sp??rsm??l',
  OM_DEG_ANDRE_TEKSTER: 'Andre tekster',
  DIN_LIVSSITUASJON_TITTEL: 'Stegtittel',
  DIN_LIVSSITUASJON_SPORSMAL: 'Sp??rsm??l',
  VELG_BARN_TITTEL: 'Stegtittel',
  VELG_BARN_ANDRE_TEKSTER: 'Andre tekster',
  OM_BARNA_SPORSMAL: 'Sp??rsm??l',
  OM_BARNA_TITTEL: 'Stegtittel',
  OM_BARNET_TITTEL: 'Stegtittel',
  OM_BARNET_SUBTITLER: 'Subtitler',
  OM_BARNET_SPORSMAL: 'Sp??rsm??l',
  OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE: 'Oppf??lgning opplysningsp??minnelse',
  OM_BARNET_ANDRE_TEKSTER: 'Andre tekster',
  EOS_FOR_SOKER_TITTEL: 'Stegtittel',
  EOS_FOR_SOKER_SPORSMAL: 'Sp??rsm??l',
  EOS_FOR_BARN_TITTEL: 'Stegtittel',
  EOS_FOR_BARN_SPORSMAL_OM_BARN: 'Sp??rsm??l om barnet',
  EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER: 'Sp??rsm??l om andre forelder',
  EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON: 'Sp??rsm??l om omsorgsperson',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER: 'Slektsforhold valgalternativer',
  EOS_FOR_BARN_ANDRE_TEKSTER: 'Andre tekster',
  OPPSUMMERING_TITTEL: 'Stegtittel',
  OPPSUMMERING_ANDRE_TEKSTER: 'Andre tekster',
  DOKUMENTASJON_TITTEL: 'Stegtittel',
  DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER: 'Blokker med info',
  DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER: 'Enkelte andre tekster',
  DOKUMENTASJON_INFO: 'Info innledning',
  DOKUMENTASJON_KNAPPER_OG_CHECKBOX: 'Knapper og checkbox',
  DOKUMENTASJON_VEDLEGG_BESKRIVELSE: 'Titler',
  DOKUMENTASJON_VEDLEGG_TITTEL: 'Beskrivelser',
  KVITTERING_TITTEL: 'Stegtittel',
  KVITTERING_ANDRE_TEKSTER: 'Andre tekster',
  VEDLIKEHOLDSARBEID: 'Vedlikeholdsarbeid',
  BANNER: 'Banner',
  KAN_IKKE_BRUKE_SOKNAD: 'Kan ikke bruke s??knad',
  ALTERNATIVE_TEKSTER: 'Alternative tekster',
  HJELPETEKSTER_FOR_INPUT: 'Hjelpetekster for inputfelt',
};

export enum Steg {
  FORSIDE = 'FORSIDE',
  OM_DEG = 'OM_DEG',
  DIN_LIVSSITUASJON = 'DIN_LIVSSITUASJON',
  VELG_BARN = 'VELG_BARN',
  OM_BARNA = 'OM_BARNA',
  OM_BARNET = 'OM_BARNET',
  E??S_FOR_S??KER = 'E??S_FOR_S??KER',
  E??S_FOR_BARN = 'E??S_FOR_BARN',
  OPPSUMMERING = 'OPPSUMMERING',
  DOKUMENTASJON = 'DOKUMENTASJON',
  KVITTERING = 'KVITTERING',
  FELLES = 'FELLES',
}

export const stegTittel: Record<Steg, string> = {
  FORSIDE: 'Forside',
  OM_DEG: 'Om deg',
  DIN_LIVSSITUASJON: 'Din livssituasjon',
  VELG_BARN: 'Velg barn',
  OM_BARNA: 'Om barna',
  OM_BARNET: 'Om barnet',
  E??S_FOR_S??KER: 'E??s for s??ker',
  E??S_FOR_BARN: 'E??s for barn',
  OPPSUMMERING: 'Oppsummering',
  DOKUMENTASJON: 'Dokumentasjon',
  KVITTERING: 'Kvittering',
  FELLES: 'Felles',
};

export enum Ytelse {
  ORDIN??R_BARNETRYGD = 'ORDIN??R_BARNETRYGD',
  UTVIDET_BARNETRYGD = 'UTVIDET_BARNETRYGD',
  KONTANTST??TTE = 'KONTANTST??TTE',
}

export enum EFlettefelt {
  BARN_NAVN = 'BARN_NAVN',
  S??KER_NAVN = 'S??KER_NAVN',
  YTELSE = 'YTELSE',
  UTLANDET_NORGE = 'UTLANDET_NORGE',
  PERSONTYPE = 'PERSONTYPE',
  I_UTENFOR = 'I_UTENFOR',
  ANTALL = 'ANTALL',
  TOTAL_ANTALL = 'TOTAL_ANTALL',
  DATO = 'DATO',
  KLOKKESLETT = 'KLOKKESLETT',
  LAND = 'LAND',
}

export const modalPrefix = 'MODAL';
