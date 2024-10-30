import React from 'react';

import { Divider, ListItem, ListItemBuilder, StructureBuilder } from 'sanity/structure';

import FileIcon from '../images/FileIcon';
import { DokumentNavn, dokumentTittel, Steg, stegTittel } from '../schemas/typer';

export const structure = (S: StructureBuilder) => {
  const mappeMedForskjelligTypeDokument = (
    tittel: string,
    items: (ListItemBuilder | ListItem | Divider)[],
  ) => S.listItem().title(tittel).child(S.list().title(tittel).items(items));

  const stegMappe = (steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
    mappeMedForskjelligTypeDokument(stegTittel[steg], items);

  const documentListItem = (dokumentNavn: DokumentNavn) => {
    return S.listItem()
      .title(dokumentTittel[dokumentNavn])
      .icon(() => <FileIcon />)
      .child(S.defaultDocument({ documentId: dokumentNavn, schemaType: dokumentNavn }));
  };

  const mappeMedEnTypeDokument = (dokumentNavn: DokumentNavn): ListItemBuilder =>
    S.listItem()
      .title(dokumentTittel[dokumentNavn])
      .child(S.documentTypeList(dokumentNavn).title(dokumentTittel[dokumentNavn]));

  const steglisteItem = S.listItem()
    .title('Steg')
    .child(
      S.list()
        .title('Steg')
        .items([
          stegMappe(Steg.FORSIDE, [
            documentListItem(DokumentNavn.FORSIDE_VEILEDERHILSEN),
            documentListItem(DokumentNavn.FORSIDE_TITTEL),
            documentListItem(DokumentNavn.FORSIDE_TITTEL_BARNETRYGD),
            documentListItem(DokumentNavn.FORSIDE_VEILEDERINTRO),
            documentListItem(DokumentNavn.FORSIDE_VEILEDER_HEI),
            documentListItem(DokumentNavn.FORSIDE_SPRAKVELGER),
            documentListItem(DokumentNavn.FORSIDE_INFO_PLIKTER),
            documentListItem(DokumentNavn.FORSIDE_INFO_PLIKTER_TITTEL),
            documentListItem(DokumentNavn.FORSIDE_INFO_PERSONOPPLYSNINGER),
            documentListItem(DokumentNavn.FORSIDE_INFO_PERSONOPPLYSNINGER_TITTEL),
            documentListItem(DokumentNavn.FORSIDE_INFO_LAGRING_AV_SVAR),
            documentListItem(DokumentNavn.FORSIDE_INFO_LAGRING_AV_SVAR_TITTEL),
            documentListItem(DokumentNavn.FORSIDE_PUNKTLISTE),
            documentListItem(DokumentNavn.FORSIDE_FOR_DU_SOKER_TITTEL),
            documentListItem(DokumentNavn.FORSIDE_FOR_DU_SOKER),
            documentListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
            mappeMedEnTypeDokument(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
            documentListItem(DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
            documentListItem(DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
            documentListItem(DokumentNavn.FORSIDE_UTVIDET_BARNETRYGD_ALERT),
            mappeMedEnTypeDokument(DokumentNavn.FORSIDE_SPORSMAL),
          ]),
          stegMappe(Steg.OM_DEG, [
            documentListItem(DokumentNavn.OM_DEG_TITTEL),
            documentListItem(DokumentNavn.OM_DEG_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
            mappeMedEnTypeDokument(DokumentNavn.OM_DEG_SPORSMAL),
            mappeMedEnTypeDokument(DokumentNavn.OM_DEG_ANDRE_TEKSTER),
          ]),
          stegMappe(Steg.DIN_LIVSSITUASJON, [
            documentListItem(DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
            documentListItem(DokumentNavn.DIN_LIVSSITUASJON_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
            mappeMedEnTypeDokument(DokumentNavn.DIN_LIVSSITUASJON_ARSAK_ALTERNATIVER),
          ]),
          stegMappe(Steg.VELG_BARN, [
            documentListItem(DokumentNavn.VELG_BARN_TITTEL),
            documentListItem(DokumentNavn.VELG_BARN_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.VELG_BARN_ANDRE_TEKSTER),
          ]),
          stegMappe(Steg.OM_BARNA, [
            documentListItem(DokumentNavn.OM_BARNA_TITTEL),
            documentListItem(DokumentNavn.OM_BARNA_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.OM_BARNA_SPORSMAL),
          ]),
          stegMappe(Steg.OM_BARNET, [
            documentListItem(DokumentNavn.OM_BARNET_TITTEL),
            documentListItem(DokumentNavn.OM_BARNET_TITTEL_UTEN_FLETTEFELT),
            documentListItem(DokumentNavn.OM_BARNET_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_SUBTITLER),
            mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_SPORSMAL),
            mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE),
            mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_ANDRE_TEKSTER),
          ]),
          stegMappe(Steg.EØS_FOR_SØKER, [
            documentListItem(DokumentNavn.EOS_FOR_SOKER_TITTEL),
            documentListItem(DokumentNavn.EOS_FOR_SOKER_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
          ]),
          stegMappe(Steg.EØS_FOR_BARN, [
            documentListItem(DokumentNavn.EOS_FOR_BARN_TITTEL),
            documentListItem(DokumentNavn.EOS_FOR_BARN_TITTEL_UTEN_FLETTEFELT),
            documentListItem(DokumentNavn.EOS_FOR_BARN_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_BARN),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER),
            mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_ANDRE_TEKSTER),
          ]),
          stegMappe(Steg.OPPSUMMERING, [
            documentListItem(DokumentNavn.OPPSUMMERING_TITTEL),
            documentListItem(DokumentNavn.OPPSUMMERING_GUIDE),
            mappeMedEnTypeDokument(DokumentNavn.OPPSUMMERING_ANDRE_TEKSTER),
          ]),
          stegMappe(Steg.DOKUMENTASJON, [
            documentListItem(DokumentNavn.DOKUMENTASJON_TITTEL),
            documentListItem(DokumentNavn.DOKUMENTASJON_GUIDE),
            documentListItem(DokumentNavn.DOKUMENTASJON_GUIDE_VEDLEGGSKRAV),
            documentListItem(DokumentNavn.DOKUMENTASJON_GUIDE_INGEN_VEDLEGGSKRAV),
            mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_INFO),
            mappeMedForskjelligTypeDokument('Bilde scanning guide', [
              mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER),
              mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER),
            ]),
            mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_KNAPPER_OG_CHECKBOX),
            mappeMedForskjelligTypeDokument('Vedlegg', [
              mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_VEDLEGG_TITTEL),
              mappeMedEnTypeDokument(DokumentNavn.DOKUMENTASJON_VEDLEGG_BESKRIVELSE),
            ]),
          ]),
          stegMappe(Steg.KVITTERING, [
            documentListItem(DokumentNavn.KVITTERING_TITTEL),
            mappeMedEnTypeDokument(DokumentNavn.KVITTERING_ANDRE_TEKSTER),
          ]),
        ]),
    );

  const modalerlisteItem = S.listItem()
    .title('Modaler')
    .child(
      S.list()
        .title('Modaler')
        .items([
          mappeMedForskjelligTypeDokument('Utenlandsopphold søker', [
            documentListItem(DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER,
            ),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Utenlandsopphold barn', [
            documentListItem(DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_BARN),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_BARN),
          ]),
          mappeMedForskjelligTypeDokument('Utenlandsopphold andre forelder', [
            documentListItem(DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_ANDRE_FORELDER,
            ),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_UTENLANDSOPPHOLD_ANDRE_TEKSTER_ANDRE_FORELDER,
            ),
          ]),
          mappeMedForskjelligTypeDokument('Barnehageplass', [
            documentListItem(DokumentNavn.MODAL_BARNEHAGEPLASS_TITTEL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_BARNEHAGEPLASS_SPORSMAL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_BARNEHAGEPLASS_BESKRIVELSE_VALGALTERNATIVER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_BARNEHAGEPLASS_ANDRE_TEKSTER),
          ]),
          mappeMedForskjelligTypeDokument('Andre utbetalinger søker', [
            documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Andre utbetalinger andre forelder', [
            documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_ANDRE_FORELDER,
            ),
          ]),
          mappeMedForskjelligTypeDokument('Andre utbetalinger omsorgsperson', [
            documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_TITTEL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ANDRE_UTBETALINGER_SPORSMAL_OMSORGSPERSON),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_ANDRE_UTBETALINGER_ANDRE_TEKSTER_OMSORGSPERSON,
            ),
          ]),
          mappeMedForskjelligTypeDokument('Arbeidsperiode søker', [
            documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Arbeidsperiode andre forelder', [
            documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER),
          ]),
          mappeMedForskjelligTypeDokument('Arbeidsperiode omsorgsperson', [
            documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_TITTEL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_SPORSMAL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_ARBEIDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON),
          ]),
          mappeMedForskjelligTypeDokument('EØS-ytelse søker', [
            documentListItem(DokumentNavn.MODAL_EOS_YTELSE_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('EØS-ytelse andre forelder', [
            documentListItem(DokumentNavn.MODAL_EOS_YTELSE_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_ANDRE_TEKSTER_ANDRE_FORELDER),
          ]),
          mappeMedForskjelligTypeDokument('EØS-ytelse omsorgsperson', [
            documentListItem(DokumentNavn.MODAL_EOS_YTELSE_TITTEL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_SPORSMAL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_EOS_YTELSE_ANDRE_TEKSTER_OMSORGSPERSON),
          ]),
          mappeMedForskjelligTypeDokument('Pensjonsperiode søker', [
            documentListItem(DokumentNavn.MODAL_PENSJONSPERIODE_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_SPORSMAL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Pensjonsperiode andre forelder', [
            documentListItem(DokumentNavn.MODAL_PENSJONSPERIODE_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_SPORSMAL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER),
          ]),
          mappeMedForskjelligTypeDokument('Pensjonsperiode omsorgsperson', [
            documentListItem(DokumentNavn.MODAL_PENSJONSPERIODE_TITTEL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_SPORSMAL_OMSORGSPERSON),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_PENSJONSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON),
          ]),
          mappeMedForskjelligTypeDokument('Barnetrygdsperiode søker', [
            documentListItem(DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_SOKER),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Barnetrygdsperiode andre forelder', [
            documentListItem(DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_ANDRE_FORELDER),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_ANDRE_FORELDER,
            ),
          ]),
          mappeMedForskjelligTypeDokument('Barnetrygdsperiode omsorgsperson', [
            documentListItem(DokumentNavn.MODAL_BARNETRYGDSPERIODE_TITTEL_OMSORGSPERSON),
            mappeMedEnTypeDokument(
              DokumentNavn.MODAL_BARNETRYGDSPERIODE_ANDRE_TEKSTER_OMSORGSPERSON,
            ),
          ]),
          mappeMedForskjelligTypeDokument('Tidligere samboere søker', [
            mappeMedEnTypeDokument(DokumentNavn.MODAL_TIDLIGERE_SAMBOERE_ANDRE_TEKSTER_SOKER),
          ]),
          mappeMedForskjelligTypeDokument('Legg til barn', [
            documentListItem(DokumentNavn.MODAL_LEGG_TIL_BARN_TITTEL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_LEGG_TIL_BARN_SPORSMAL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_LEGG_TIL_BARN_ANDRE_TEKSTER),
          ]),
          mappeMedForskjelligTypeDokument('Start på nytt', [
            documentListItem(DokumentNavn.MODAL_START_PAA_NYTT_TITTEL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_START_PAA_NYTT_ANDRE_TEKSTER),
          ]),
          mappeMedForskjelligTypeDokument('Mistet informasjonen din', [
            documentListItem(DokumentNavn.MODAL_MISTET_INFORMASJONEN_DIN_TITTEL),
            mappeMedEnTypeDokument(DokumentNavn.MODAL_MISTET_INFORMASJONEN_DIN_ANDRE_TEKSTER),
          ]),
          mappeMedForskjelligTypeDokument('Blokker tilbakeknapp', [
            documentListItem(DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TITTEL),
            documentListItem(DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TEKST),
            documentListItem(DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_TIL_DITT_NAV),
            documentListItem(DokumentNavn.MODAL_BLOKKER_TILBAKE_KNAPP_AVBRYT),
          ]),
        ]),
    );

  return S.list()
    .title('Søknadsdialog')
    .items([
      steglisteItem,
      modalerlisteItem,
      mappeMedEnTypeDokument(DokumentNavn.FRITTSTAENDEORD),
      mappeMedEnTypeDokument(DokumentNavn.NAVIGASJON),
      mappeMedEnTypeDokument(DokumentNavn.FORMATERINGSFEILMELDINGER),
      mappeMedEnTypeDokument(DokumentNavn.VEDLIKEHOLDSARBEID),
      documentListItem(DokumentNavn.BANNER),
      mappeMedEnTypeDokument(DokumentNavn.KAN_IKKE_BRUKE_SOKNAD),
      mappeMedEnTypeDokument(DokumentNavn.ALTERNATIVE_TEKSTER),
      mappeMedEnTypeDokument(DokumentNavn.HJELPETEKSTER_FOR_INPUT),
      mappeMedEnTypeDokument(DokumentNavn.MIDLERTIDIGE_TEKSTER),
    ]);
};
