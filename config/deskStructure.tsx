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

const stegItem = (steg: Steg, items: (ListItemBuilder | ListItem | Divider)[]) =>
  S.listItem().title(stegTittel[steg]).child(S.list().title(stegTittel[steg]).items(items));

const documentListItem = (dokumentNavn: DokumentNavn) => {
  return S.listItem()
    .title(dokumentTittel[dokumentNavn])
    .icon(() => <FileIcon />)
    .child(S.defaultDocument({ documentId: dokumentNavn, schemaType: dokumentNavn }));
};

const mappeListItem = (dokumentNavn: DokumentNavn) =>
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
          documentListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
          mappeListItem(DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
          documentListItem(DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
          documentListItem(DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
        ]),
        stegItem(Steg.OM_DEG, [
          documentListItem(DokumentNavn.OM_DEG_TITTEL),
          mappeListItem(DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
          mappeListItem(DokumentNavn.OM_DEG_SPORSMAL),
        ]),
        stegItem(Steg.DIN_LIVSSITUASJON, [
          documentListItem(DokumentNavn.DIN_LIVSSITUASJON_TITTEL),
          mappeListItem(DokumentNavn.DIN_LIVSSITUASJON_SPORSMAL),
        ]),
        stegItem(Steg.VELG_BARN, [
          documentListItem(DokumentNavn.VELG_BARN_TITTEL),
          documentListItem(DokumentNavn.VELG_BARN_LENKER),
          documentListItem(DokumentNavn.VELG_BARN_KORT),
        ]),
        stegItem(Steg.OM_BARNA, [
          documentListItem(DokumentNavn.OM_BARNA_TITTEL),
          mappeListItem(DokumentNavn.OM_BARNA_SPORSMAL),
        ]),
        stegItem(Steg.OM_BARNET, [
          documentListItem(DokumentNavn.OM_BARNET_TITTEL),
          mappeListItem(DokumentNavn.OM_BARNET_SUBTITLER),
          mappeListItem(DokumentNavn.OM_BARNET_SPORSMAL),
          mappeListItem(DokumentNavn.OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE),
          mappeListItem(DokumentNavn.OM_BARNET_ANDRE_TEKSTER),
        ]),
        stegItem(Steg.EØS_FOR_SØKER, [
          documentListItem(DokumentNavn.EOS_FOR_SOKER_TITTEL),
          mappeListItem(DokumentNavn.EOS_FOR_SOKER_SPORSMAL),
        ]),
        stegItem(Steg.EØS_FOR_BARN, [
          documentListItem(DokumentNavn.EOS_FOR_BARN_TITTEL),
          documentListItem(DokumentNavn.EOS_FOR_BARN_BARNET),
          documentListItem(DokumentNavn.EOS_FOR_BARN_ANDRE_FORELDER),
          documentListItem(DokumentNavn.EOS_FOR_BARN_OMSORGSPERSON),
          documentListItem(DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER),
        ]),
        documentListItem(DokumentNavn.OPPSUMMERING),
        stegItem(Steg.DOKUMENTASJON, [
          documentListItem(DokumentNavn.DOKUMENTASJON_TITTEL),
          documentListItem(DokumentNavn.DOKUMENTASJON_INFO),
          documentListItem(DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE),
          documentListItem(DokumentNavn.DOKUMENTASJON_KNAPPER_OG_CHECKBOX),
          documentListItem(DokumentNavn.DOKUMENTASJON_VEDLEGG),
        ]),
        documentListItem(DokumentNavn.KVITTERING),
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
