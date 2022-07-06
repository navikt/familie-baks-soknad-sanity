import React from 'react';

import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import { File } from '@navikt/ds-icons';

import { DokumentNavn, DokumentTittel, Steg, stegTittel } from '../schemas/typer';

export default () => S.list().title('Søknadsdialog').items([steglisteItem, navigasjonItem]);

const stegListItem = (steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(stegTittel[steg]).child(S.list().title(stegTittel[steg]).items(items));

const documentListItem = (tittel: DokumentTittel, template: DokumentNavn) => {
  return S.listItem()
    .title(tittel)
    .icon(() => <File />)
    .child(S.defaultDocument({ documentId: template, schemaType: template }));
};

const spørsmålListItem = (dokumentNavn: DokumentNavn) =>
  S.listItem()
    .title(DokumentTittel.SPØRSMÅL)
    .child(S.documentTypeList(dokumentNavn).title(DokumentTittel.SPØRSMÅL));

const steglisteItem = S.listItem()
  .title('Steg')
  .child(
    S.list()
      .title('Steg')
      .items([
        stegListItem(Steg.FORSIDE, [
          documentListItem(
            DokumentTittel.FORSIDE_BEKREFTELSESBOKS,
            DokumentNavn.FORSIDE_BEKREFTELSESBOKS,
          ),
          documentListItem(DokumentTittel.FORSIDE_PUNKTLISTE, DokumentNavn.FORSIDE_PUNKTLISTE),
        ]),
        stegListItem(Steg.OM_DEG, [
          documentListItem(
            DokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
            DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
          ),
          spørsmålListItem(DokumentNavn.OM_DEG_SPØRSMÅL),
        ]),
        stegListItem(Steg.DIN_LIVSSITUASJON, [
          spørsmålListItem(DokumentNavn.DIN_LIVSSITUASJON_SPØRSMÅL),
        ]),
      ]),
  );

const navigasjonItem = S.listItem()
  .title(DokumentTittel.NAVIGASJON)
  .child(
    S.defaultDocument({
      documentId: DokumentNavn.NAVIGASJON,
      schemaType: DokumentNavn.NAVIGASJON,
    }).title(DokumentTittel.NAVIGASJON),
  );
