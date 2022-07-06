import React from 'react';

import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import { File } from '@navikt/ds-icons';

import { DokumentNavn, dokumentTittel, Steg, stegTittel } from '../schemas/typer';

export default () => S.list().title('Søknadsdialog').items([steglisteItem, navigasjonItem]);

const stegListItem = (steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(stegTittel[steg]).child(S.list().title(stegTittel[steg]).items(items));

const documentListItem = (dokumentNavn: DokumentNavn) => {
  return S.listItem()
    .title(dokumentTittel[dokumentNavn])
    .icon(() => <File />)
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
        stegListItem(Steg.FORSIDE, [
          documentListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS),
          documentListItem(DokumentNavn.FORSIDE_PUNKTLISTE),
        ]),
        stegListItem(Steg.OM_DEG, [
          documentListItem(DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
          spørsmålListItem(DokumentNavn.OM_DEG_SPORSMAL),
        ]),
        stegListItem(Steg.DIN_LIVSSITUASJON, [
          spørsmålListItem(DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
        ]),
      ]),
  );

const navigasjonItem = S.listItem()
  .title(dokumentTittel[DokumentNavn.NAVIGASJON])
  .child(
    S.defaultDocument({
      documentId: DokumentNavn.NAVIGASJON,
      schemaType: DokumentNavn.NAVIGASJON,
    }).title(dokumentTittel[DokumentNavn.NAVIGASJON]),
  );
