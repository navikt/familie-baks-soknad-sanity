import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import { DocumentTittel, Steg } from '../schemas/typer';

export default () => S.list().title('Søknadsdialog').items([stegliste, navigasjonsliste]);

const stegListItem = (title: string, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(title).child(S.list().title('Innhold').items(items));

const documentListItem = (tittel: DocumentTittel, template: string) => {
  return S.listItem()
    .title(tittel)
    .child(S.defaultDocument({ documentId: template, schemaType: template }).title(tittel));
};

const spørsmålListItem = (steg: Steg) =>
  S.listItem()
    .title('Spørsmål')
    .child(S.documentTypeList(`sporsmal_${steg}`).title('Spørsmål'));

const stegliste = S.listItem()
  .title('Steg')
  .child(
    S.list()
      .title('Steg')
      .items([
        stegListItem('Forside', [
          documentListItem(DocumentTittel.BEKREFTELSESBOKS, 'forside-bekreftelsesboks'),
          documentListItem(DocumentTittel.PUNKTLISTE, 'forside-punktliste'),
        ]),
        stegListItem('Om Deg', [
          documentListItem(DocumentTittel.PERSONOPPLYSNINGER, 'om-deg-personopplysninger'),
          spørsmålListItem(Steg.OM_DEG),
        ]),
        stegListItem('Din livssituasjon', [spørsmålListItem(Steg.DIN_LIVSSITUASJON)]),
      ]),
  );

const navigasjonsliste = S.listItem()
  .title('Navigasjon')
  .child(S.documentWithInitialValueTemplate('navigasjon').title('Navigasjon'));
