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
    ]);

const stegItem = (steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(stegTittel[steg]).child(S.list().title(stegTittel[steg]).items(items));

const documentListItem = (dokumentNavn: DokumentNavn) => {
  return S.listItem()
    .title(dokumentTittel[dokumentNavn])
    .icon(() => <FileIcon />)
    .child(S.defaultDocument({ documentId: dokumentNavn, schemaType: dokumentNavn }));
};

const spørsmålListItem = (dokumentNavn: DokumentNavn) =>
  S.listItem()
    .title(dokumentTittel[dokumentNavn])
    .child(S.documentTypeList(dokumentNavn).title(dokumentTittel[dokumentNavn]));

const oppfølgningOmBarnetListeItem = S.listItem()
  .title('Oppfølgning fra om barna')
  .child(
    S.list()
      .title('Oppfølgning fra om barna')
      .items([
        documentListItem(DokumentNavn.OM_BARNET_FOSTERBARN),
        documentListItem(DokumentNavn.OM_BARNET_INSTITUSJON),
        documentListItem(DokumentNavn.OM_BARNET_UTENLANDSOPPHOLD),
        documentListItem(DokumentNavn.OM_BARNET_ADOPSJON),
        documentListItem(DokumentNavn.OM_BARNET_YTELSE_FRA_EOS),
        documentListItem(DokumentNavn.OM_BARNET_BARNEHAGEPLASS),
      ]),
  );

const steglisteItem = S.listItem()
  .title('Steg')
  .child(
    S.list()
      .title('Steg')
      .items([
        stegItem(Steg.FORSIDE, [
          documentListItem(DokumentNavn.FORSIDE_VEILEDERHILSEN),
          documentListItem(DokumentNavn.FORSIDE_TITTEL),
          documentListItem(DokumentNavn.FORSIDE_SPRAKVELGER),
          documentListItem(DokumentNavn.FORSIDE_PUNKTLISTE),
          documentListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS),
          documentListItem(DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
        ]),
        stegItem(Steg.OM_DEG, [
          documentListItem(DokumentNavn.OM_DEG_TITTEL),
          documentListItem(DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
          spørsmålListItem(DokumentNavn.OM_DEG_SPORSMAL),
        ]),
        stegItem(Steg.DIN_LIVSSITUASJON, [
          documentListItem(DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
          spørsmålListItem(DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
        ]),
        stegItem(Steg.VELG_BARN, [
          documentListItem(DokumentNavn.VELG_BARN_TITTEL),
          documentListItem(DokumentNavn.VELG_BARN_LENKER),
          documentListItem(DokumentNavn.VELG_BARN_KORT),
        ]),
        stegItem(Steg.OM_BARNA, [
          documentListItem(DokumentNavn.OM_BARNA_TITTEL),
          spørsmålListItem(DokumentNavn.OM_BARNA_SPORSMAL),
        ]),
        stegItem(Steg.OM_BARNET, [
          documentListItem(DokumentNavn.OM_BARNET_TITTEL),
          documentListItem(DokumentNavn.OM_BARNET_ANDRE_FORELDER),
          documentListItem(DokumentNavn.OM_BARNET_BOSTED),
          oppfølgningOmBarnetListeItem,
        ]),
        stegItem(Steg.EØS_FOR_SØKER, [
          documentListItem(DokumentNavn.EOS_FOR_SOKER_TITTEL),
          spørsmålListItem(DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
        ]),
        stegItem(Steg.EØS_FOR_BARN, [
          documentListItem(DokumentNavn.EOS_FOR_BARN_TITTEL),
          documentListItem(DokumentNavn.EOS_FOR_BARN_ANDRE_FORELDER),
          documentListItem(DokumentNavn.EOS_FOR_BARN_OMSORGSPERSON),
        ]),
        stegItem(Steg.OPPSUMMERING, [documentListItem(DokumentNavn.OPPSUMMERING_TITTEL)]),
        stegItem(Steg.DOKUMENTASJON, [documentListItem(DokumentNavn.DOKUMENTASJON_TITTEL)]),
        stegItem(Steg.KVITTERING, [documentListItem(DokumentNavn.KVITTERING_TITTEL)]),
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
      ]),
  );

const modalerlisteItem = S.listItem()
  .title('Modaler')
  .child(
    S.list()
      .title('Modaler')
      .items([
        documentListItem(DokumentNavn.MODAL_UTENLANDSOPPHOLD_SOKER),
        documentListItem(DokumentNavn.MODAL_UTENLANDSOPPHOLD_BARN),
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
