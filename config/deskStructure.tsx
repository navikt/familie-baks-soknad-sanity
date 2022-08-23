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
        documentListItem(DokumentNavn.MODAL_ARBEIDSPERIODE),
        documentListItem(DokumentNavn.MODAL_LEGG_TIL_BARN),
        documentListItem(DokumentNavn.MODAL_PENSJON),
        documentListItem(DokumentNavn.MODAL_EOS_YTELSE),
      ]),
  );
