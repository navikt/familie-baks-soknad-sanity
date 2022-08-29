import React from 'react';

import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import FileIcon from '../images/FileIcon';
import { DokumentNavn, dokumentTittel, Steg, stegTittel } from '../schemas/typer';

export default () =>
  S.list()
    .title('Søknadsdialog')
    .items([
      steglisteItem,
      modalerlisteItem,
      frittstaendeOrdlisteItem,
      documentListItem(DokumentNavn.NAVIGASJON),
      documentListItem(DokumentNavn.TEKSTER_FOR_DATO),
    ]);

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

const mappeMedEnTypeDokument = (dokumentNavn: DokumentNavn) =>
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
          documentListItem(DokumentNavn.FORSIDE_SPRAKVELGER),
          documentListItem(DokumentNavn.FORSIDE_PUNKTLISTE),
          documentListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
          mappeMedEnTypeDokument(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
          documentListItem(DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
          documentListItem(DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
        ]),
        stegMappe(Steg.OM_DEG, [
          documentListItem(DokumentNavn.OM_DEG_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
          mappeMedEnTypeDokument(DokumentNavn.OM_DEG_SPORSMAL),
        ]),
        stegMappe(Steg.DIN_LIVSSITUASJON, [
          documentListItem(DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
        ]),
        stegMappe(Steg.VELG_BARN, [
          documentListItem(DokumentNavn.VELG_BARN_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.VELG_BARN_LENKER),
          mappeMedEnTypeDokument(DokumentNavn.VELG_BARN_ANDRE_TEKSTER),
        ]),
        stegMappe(Steg.OM_BARNA, [
          documentListItem(DokumentNavn.OM_BARNA_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.OM_BARNA_SPORSMAL),
        ]),
        stegMappe(Steg.OM_BARNET, [
          documentListItem(DokumentNavn.OM_BARNET_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_SUBTITLER),
          mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_SPORSMAL),
          mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE),
          mappeMedEnTypeDokument(DokumentNavn.OM_BARNET_ANDRE_TEKSTER),
        ]),
        stegMappe(Steg.EØS_FOR_SØKER, [
          documentListItem(DokumentNavn.EOS_FOR_SOKER_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
        ]),
        stegMappe(Steg.EØS_FOR_BARN, [
          documentListItem(DokumentNavn.EOS_FOR_BARN_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_BARN),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_ANDRE_FORELDER),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SPORSMAL_OM_OMSORGSPERSON),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER),
          mappeMedEnTypeDokument(DokumentNavn.EOS_FOR_BARN_ANDRE_TEKSTER),
        ]),
        stegMappe(Steg.OPPSUMMERING, [
          documentListItem(DokumentNavn.OPPSUMMERING_TITTEL),
          mappeMedEnTypeDokument(DokumentNavn.OPPSUMMERING_ANDRE_TEKSTER),
        ]),
        stegMappe(Steg.DOKUMENTASJON, [
          documentListItem(DokumentNavn.DOKUMENTASJON_TITTEL),
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

const frittstaendeOrdlisteItem = S.listItem()
  .title('Frittstående ord')
  .child(
    S.list()
      .title('Frittstående ord')
      .items([
        documentListItem(DokumentNavn.FRITTSTAENDEORD_YTELSE),
        documentListItem(DokumentNavn.FRITTSTAENDEORD_GEOGRAFISK_OMRADE),
        documentListItem(DokumentNavn.FRITTSTAENDEORD_SVARALTERNATIVER),
        documentListItem(DokumentNavn.FRITTSTAENDEORD_PREPOSISJONER),
      ]),
  );

const modalerlisteItem = S.listItem()
  .title('Modaler')
  .child(
    S.list()
      .title('Modaler')
      .items([
        mappeMedForskjelligTypeDokument('Utenlandsopphold søker', [
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_SOKER),
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_SOKER),
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_SOKER),
        ]),
        mappeMedForskjelligTypeDokument('Utenlandsopphold barn', [
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_TITTEL_BARN),
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SPORSMAL_BARN),
          mappeMedEnTypeDokument(DokumentNavn.MODAL_UTENLANDSOPPHOLD_ARSAK_VALGALTERNATIVER_BARN),
        ]),
        documentListItem(DokumentNavn.MODAL_BARNEHAGEPLASS),
        documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_SOKER),
        documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_ANDRE_FORELDER),
        documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE_OMSORGSPERSON),
        documentListItem(DokumentNavn.MODAL_PENSJON_SOKER),
        documentListItem(DokumentNavn.MODAL_PENSJON_ANDRE_FORELDER),
        documentListItem(DokumentNavn.MODAL_PENSJON_OMSORGSPERSON),
        documentListItem(DokumentNavn.MODAL_LEGG_TIL_BARN),
        documentListItem(DokumentNavn.MODAL_EOS_YTELSE),
        documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_SOKER),
        documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_ANDRE_FORELDER),
        documentListItem(DokumentNavn.MODAL_ANDRE_UTBETALINGER_OMSORGSPERSON),
      ]),
  );
