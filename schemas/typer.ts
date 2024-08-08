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
  FLETTEFELT = 'flettefelt',
}

export enum DokumentNavn {
  NAVIGASJON = 'NAVIGASJON',
  FORMATERINGSFEILMELDINGER = 'FORMATERINGSFEILMELDINGER',
  FRITTSTAENDEORD = 'FRITTSTAENDEORD',
  FORSIDE_VEILEDERHILSEN = 'FORSIDE_VEILEDERHILSEN',
  FORSIDE_VEILEDERINTRO = 'FORSIDE_VEILEDERINTRO',
  FORSIDE_VEILEDER_HEI = 'FORSIDE_VEILEDER_HEI',
  FORSIDE_TITTEL = 'FORSIDE_TITTEL',
  FORSIDE_TITTEL_BARNETRYGD = 'FORSIDE_TITTEL_BARNETRYGD',
  FORSIDE_SPRAKVELGER = 'FORSIDE_SPRAKVELGER',
  FORSIDE_BEKREFTELSESBOKS_BRODTEKST = 'FORSIDE_BEKREFTELSESBOKS_BRODTEKST',
  FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER = 'FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER',
  FORSIDE_INFO_PLIKTER_TITTEL = 'FORSIDE_INFO_PLIKTER_TITTEL',
  FORSIDE_INFO_PLIKTER = 'FORSIDE_INFO_PLIKTER',
  FORSIDE_INFO_PERSONOPPLYSNINGER_TITTEL = 'FORSIDE_INFO_PERSONOPPLYSNINGER_TITTEL',
  FORSIDE_INFO_PERSONOPPLYSNINGER = 'FORSIDE_INFO_PERSONOPPLYSNINGER',
  FORSIDE_INFO_LAGRING_AV_SVAR_TITTEL = 'FORSIDE_INFO_LAGRING_AV_SVAR_TITTEL',
  FORSIDE_INFO_LAGRING_AV_SVAR = 'FORSIDE_INFO_LAGRING_AV_SVAR',
  FORSIDE_PUNKTLISTE = 'FORSIDE_PUNKTLISTE',
  FORSIDE_FOR_DU_SOKER_TITTEL = 'FORSIDE_FOR_DU_SOKER_TITTEL',
  FORSIDE_FOR_DU_SOKER = 'FORSIDE_FOR_DU_SOKER',
  FORSIDE_PERSONOPPLYSNINGSLENKE = 'FORSIDE_PERSONOPPLYSNINGSLENKE',
  FORSIDE_MELLOMLAGRET_ALERT = 'FORSIDE_MELLOMLAGRET_ALERT',
  FORSIDE_UTVIDET_BARNETRYGD_ALERT = 'FORSIDE_UTVIDET_BARNETRYGD_ALERT',
  FORSIDE_SPORSMAL = 'FORSIDE_SPORSMAL',
  OM_DEG_TITTEL = 'OM_DEG_TITTEL',
  OM_DEG_GUIDE = 'OM_DEG_GUIDE',
  OM_DEG_PERSONOPPLYSNINGER = 'OM_DEG_PERSONOPPLYSNINGER',
  OM_DEG_SPORSMAL = 'OM_DEG_SPORSMAL',
  OM_DEG_ANDRE_TEKSTER = 'OM_DEG_ANDRE_TEKSTER',
  DIN_LIVSSITUASJON_TITTEL = 'DIN_LIVSSITUASJON_TITTEL',
  DIN_LIVSSITUASJON_GUIDE = 'DIN_LIVSSITUASJON_GUIDE',
  DIN_LIVSSITUASJON_SPORSMAL = 'DIN_LIVSSITUASJON_SPORSMAL',
  VELG_BARN_TITTEL = 'VELG_BARN_TITTEL',
  VELG_BARN_GUIDE = 'VELG_BARN_GUIDE',
  VELG_BARN_ANDRE_TEKSTER = 'VELG_BARN_ANDRE_TEKSTER',
  OM_BARNA_TITTEL = 'OM_BARNA_TITTEL',
  OM_BARNA_GUIDE = 'OM_BARNA_GUIDE',
  OM_BARNA_SPORSMAL = 'OM_BARNA_SPORSMAL',
  OM_BARNET_TITTEL = 'OM_BARNET_TITTEL',
  OM_BARNET_TITTEL_UTEN_FLETTEFELT = 'OM_BARNET_TITTEL_UTEN_FLETTEFELT',
  OM_BARNET_GUIDE = 'OM_BARNET_GUIDE',
  OM_BARNET_SUBTITLER = 'OM_BARNET_SUBTITLER',
  OM_BARNET_SPORSMAL = 'OM_BARNET_SPORSMAL',
  OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE = 'OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE',
  OM_BARNET_ANDRE_TEKSTER = 'OM_BARNET_ANDRE_TEKSTER',
  EOS_FOR_SOKER_TITTEL = 'EOS_FOR_SOKER_TITTEL',
  EOS_FOR_SOKER_GUIDE = 'EOS_FOR_SOKER_GUIDE',
  EOS_FOR_SOKER_SPORSMAL = 'EOS_FOR_SOKER_SPORSMAL',
  EOS_FOR_BARN_TITTEL = 'EOS_FOR_BARN_TITTEL',
  EOS_FOR_BARN_TITTEL_UTEN_FLETTEFELT = 'EOS_FOR_BARN_TITTEL_UTEN_FLETTEFELT',
  EOS_FOR_BARN_GUIDE = 'EOS_FOR_BARN_GUIDE',
  EOS_FOR_BARN_SPORSMAL_OM_BARN = 'EOS_FOR_BARN_SPORSMAL_OM_BARN',
  EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER = 'EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER',
  EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON = 'EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON',
  EOS_FOR_BARN_ANDRE_TEKSTER = 'EOS_FOR_BARN_ANDRE_TEKSTER',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER = 'EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER',
  DOKUMENTASJON_TITTEL = 'DOKUMENTASJON_TITTEL',
  DOKUMENTASJON_GUIDE = 'DOKUMENTASJON_GUIDE',
  OPPSUMMERING_TITTEL = 'OPPSUMMERING_TITTEL',
  OPPSUMMERING_GUIDE = 'OPPSUMMERING_GUIDE',
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
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_ANDRE_FORELDER = 'MODAL_UTENLANDSOPPHOLD_SPORSMAL_ANDRE_FORELDER',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_ANDRE_FORELDER = 'MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_ANDRE_FORELDER',
  MODAL_UTENLANDSOPPHOLD_TITTEL_ANDRE_FORELDER = 'MODAL_UTENLANDSOPPHOLD_TITTEL_ANDRE_FORELDER',
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
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER = 'MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER',
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER = 'MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER',
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON = 'MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON',
  MODAL_TIDLIGERE_SAMBOERE_ANDRE_TEKSTER_SOKER = 'MODAL_TIDLIGERE_SAMBOERE_ANDRE_TEKSTER_SOKER',
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
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER: 'Spørsmål',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER: 'Årsak valgalternativer',
  MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER: 'Tittel',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_ANDRE_FORELDER: 'Spørsmål',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_ANDRE_FORELDER: 'Årsak valgalternativer',
  MODAL_UTENLANDSOPPHOLD_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN: 'Andre tekster',
  MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN: 'Spørsmål',
  MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN: 'Årsak valgalternativer',
  MODAL_UTENLANDSOPPHOLD_TITTEL_BARN: 'Tittel',
  MODAL_BARNEHAGEPLASS_TITTEL: 'Tittel',
  MODAL_BARNEHAGEPLASS_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_BARNEHAGEPLASS_SPORSMAL: 'Spørsmål',
  MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER: 'Beskrivelse valgalternativer',
  MODAL_LEGG_TIL_BARN_TITTEL: 'Tittel',
  MODAL_LEGG_TIL_BARN_SPORSMAL: 'Spørsmål',
  MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER: 'Spørsmål',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER: 'Spørsmål',
  MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON: 'Spørsmål',
  MODAL_ARBEIDSPERIODE_TITTEL_SOKER: 'Tittel',
  MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER: 'Spørsmål',
  MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER: 'Spørsmål',
  MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON: 'Spørsmål',
  MODAL_EOS_YTELSE_TITTEL_SOKER: 'Tittel',
  MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_EOS_YTELSE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_EOS_YTELSE_SPORSMAL_SOKER: 'Spørsmål',
  MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER: 'Spørsmål',
  MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON: 'Spørsmål',
  MODAL_PENSJONSPERIODE_TITTEL_SOKER: 'Tittel',
  MODAL_PENSJONSPERIODE_TITTEL_ANDRE_FORELDER: 'Tittel',
  MODAL_PENSJONSPERIODE_TITTEL_OMSORGSPERSON: 'Tittel',
  MODAL_PENSJONSPERIODE_SPORSMAL_SOKER: 'Spørsmål',
  MODAL_PENSJONSPERIODE_SPORSMAL_ANDRE_FORELDER: 'Spørsmål',
  MODAL_PENSJONSPERIODE_SPORSMAL_OMSORGSPERSON: 'Spørsmål',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER: 'Andre tekster',
  MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON: 'Andre tekster',
  MODAL_TIDLIGERE_SAMBOERE_ANDRE_TEKSTER_SOKER: 'Andre tekster',
  MODAL_START_PAA_NYTT_TITTEL: 'Tittel',
  MODAL_START_PAA_NYTT_ANDRE_TEKSTER: 'Andre tekster',
  MODAL_MISTET_INFORMASJONEN_DIN_TITTEL: 'Tittel',
  MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER: 'Andre tekster',
  FRITTSTAENDEORD: 'Frittstående ord',
  FORSIDE_VEILEDERHILSEN: 'Veilederhilsen',
  FORSIDE_TITTEL: 'Søknadstittel',
  FORSIDE_SPRAKVELGER: 'Språkvelger',
  FORSIDE_BEKREFTELSESBOKS_BRODTEKST: 'Bekreftelsesboks brødtekst',
  FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER: 'Bekreftelsesboks andre tekster',
  FORSIDE_PUNKTLISTE: 'Punktliste',
  FORSIDE_FOR_DU_SOKER_TITTEL: 'Før du søker tittel',
  FORSIDE_FOR_DU_SOKER: 'Før du søker',
  FORSIDE_PERSONOPPLYSNINGSLENKE: 'Personopplysningslenke',
  FORSIDE_MELLOMLAGRET_ALERT: 'Mellomlagret alert',
  FORSIDE_SPORSMAL: 'Spørsmål',
  FORSIDE_TITTEL_BARNETRYGD: 'Søknadstittel barnetrygd',
  FORSIDE_VEILEDERINTRO: 'Veilederintro',
  FORSIDE_VEILEDER_HEI: 'Veileder hei',
  FORSIDE_INFO_PLIKTER: 'Informasjon om plikter',
  FORSIDE_INFO_PLIKTER_TITTEL: 'Informasjon om plikter - tittel',
  FORSIDE_INFO_PERSONOPPLYSNINGER_TITTEL: 'Informasjon om personopplysninger - tittel',
  FORSIDE_INFO_PERSONOPPLYSNINGER: 'Informasjon om personopplysninger',
  FORSIDE_INFO_LAGRING_AV_SVAR_TITTEL: 'Informasjon om lagring av svar - tittel',
  FORSIDE_INFO_LAGRING_AV_SVAR: 'Informasjon om lagring av svar',
  FORSIDE_UTVIDET_BARNETRYGD_ALERT: 'Utvidet barnetrygd alert',
  OM_DEG_TITTEL: 'Stegtittel',
  OM_DEG_GUIDE: 'Guide',
  OM_DEG_PERSONOPPLYSNINGER: 'Personopplysninger',
  OM_DEG_SPORSMAL: 'Spørsmål',
  OM_DEG_ANDRE_TEKSTER: 'Andre tekster',
  DIN_LIVSSITUASJON_TITTEL: 'Stegtittel',
  DIN_LIVSSITUASJON_GUIDE: 'Guide',
  DIN_LIVSSITUASJON_SPORSMAL: 'Spørsmål',
  VELG_BARN_TITTEL: 'Stegtittel',
  VELG_BARN_GUIDE: 'Guide',
  VELG_BARN_ANDRE_TEKSTER: 'Andre tekster',
  OM_BARNA_SPORSMAL: 'Spørsmål',
  OM_BARNA_TITTEL: 'Stegtittel',
  OM_BARNA_GUIDE: 'Guide',
  OM_BARNET_TITTEL: 'Stegtittel',
  OM_BARNET_TITTEL_UTEN_FLETTEFELT: 'Stegtittel uten flettefelt',
  OM_BARNET_GUIDE: 'Guide',
  OM_BARNET_SUBTITLER: 'Subtitler',
  OM_BARNET_SPORSMAL: 'Spørsmål',
  OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE: 'Oppfølgning opplysningspåminnelse',
  OM_BARNET_ANDRE_TEKSTER: 'Andre tekster',
  EOS_FOR_SOKER_TITTEL: 'Stegtittel',
  EOS_FOR_SOKER_GUIDE: 'Guide',
  EOS_FOR_SOKER_SPORSMAL: 'Spørsmål',
  EOS_FOR_BARN_TITTEL: 'Stegtittel',
  EOS_FOR_BARN_TITTEL_UTEN_FLETTEFELT: 'Stegtittel uten flettefelt',
  EOS_FOR_BARN_GUIDE: 'Guide',
  EOS_FOR_BARN_SPORSMAL_OM_BARN: 'Spørsmål om barnet',
  EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER: 'Spørsmål om andre forelder',
  EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON: 'Spørsmål om omsorgsperson',
  EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER: 'Slektsforhold valgalternativer',
  EOS_FOR_BARN_ANDRE_TEKSTER: 'Andre tekster',
  OPPSUMMERING_TITTEL: 'Stegtittel',
  OPPSUMMERING_GUIDE: 'Guide',
  OPPSUMMERING_ANDRE_TEKSTER: 'Andre tekster',
  DOKUMENTASJON_TITTEL: 'Stegtittel',
  DOKUMENTASJON_GUIDE: 'Guide',
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
  KAN_IKKE_BRUKE_SOKNAD: 'Kan ikke bruke søknad',
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
  EØS_FOR_SØKER = 'EØS_FOR_SØKER',
  EØS_FOR_BARN = 'EØS_FOR_BARN',
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
  EØS_FOR_SØKER: 'Eøs for søker',
  EØS_FOR_BARN: 'Eøs for barn',
  OPPSUMMERING: 'Oppsummering',
  DOKUMENTASJON: 'Dokumentasjon',
  KVITTERING: 'Kvittering',
  FELLES: 'Felles',
};

export enum Ytelse {
  BARNETRYGD = 'BARNETRYGD',
  KONTANTSTØTTE = 'KONTANTSTØTTE',
}

export enum EFlettefelt {
  BARN_NAVN = 'BARN_NAVN',
  SØKER_NAVN = 'SØKER_NAVN',
  YTELSE = 'YTELSE',
  YTELSE_BESTEMT_FORM = 'YTELSE_BESTEMT_FORM',
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
