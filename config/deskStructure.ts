import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import { DokumentNavn, DokumentTittel, StegTittel } from '../schemas/typer';

export default () => S.list().title('Søknadsdialog').items([steglisteItem, navigasjonItem]);

const stegListItem = (title: string, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(title).child(S.list().title('Innhold').items(items));

const documentListItem = (tittel: DokumentTittel, template: DokumentNavn) => {
  return S.listItem()
    .title(tittel)
    .child(S.defaultDocument({ documentId: template, schemaType: template }).title(tittel));
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
        stegListItem(StegTittel.FORSIDE, [
          documentListItem(
            DokumentTittel.FORSIDE_BEKREFTELSESBOKS,
            DokumentNavn.FORSIDE_BEKREFTELSESBOKS,
          ),
          documentListItem(DokumentTittel.FORSIDE_PUNKTLISTE, DokumentNavn.FORSIDE_PUNKTLISTE),
        ]),
        stegListItem(StegTittel.OM_DEG, [
          documentListItem(
            DokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
            DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
          ),
          spørsmålListItem(DokumentNavn.OM_DEG_SPØRSMÅL),
        ]),
        stegListItem(StegTittel.DIN_LIVSSITUASJON, [
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
