import S from '@sanity/desk-tool/structure-builder';
import { ListItem, ListItemBuilder } from '@sanity/structure/dist/dts/ListItem';
import { Divider } from '@sanity/structure/dist/dts/StructureNodes';

import { Steg } from '../schemas/typer';

export default () =>
  S.list()
    .title('Steg')
    .items([
      stegListItem('Forside', [
        S.listItem()
          .title('Bekreftelsesboks')
          .child(S.documentWithInitialValueTemplate('forside-bekreftelsesboks')),
        S.listItem()
          .title('Punktliste')
          .child(S.documentWithInitialValueTemplate('forside-punktliste')),
      ]),
      stegListItem('Om Deg', [
        S.listItem()
          .title('Personopplysninger')
          .child(S.documentWithInitialValueTemplate('om-deg-personopplysninger')),
        spørsmålListItem(Steg.OM_DEG),
      ]),
      stegListItem('Din livssituasjon', [spørsmålListItem(Steg.DIN_LIVSSITUASJON)]),
    ]);

const stegListItem = (title: string, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(title).child(S.list().title('Innhold').items(items));

const spørsmålListItem = (steg: Steg) =>
  S.listItem()
    .title('Spørsmål')
    .child(S.documentTypeList(`sporsmal_${steg}`).title('Spørsmål'));
