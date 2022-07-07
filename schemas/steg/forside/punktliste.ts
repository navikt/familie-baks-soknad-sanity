import {
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  StegDokument,
  Steg,
  CustomSanityTyper,
} from '../../typer';

const punktliste: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_PUNKTLISTE,
  name: DokumentNavn.FORSIDE_PUNKTLISTE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'tekst',
      title: 'Tekst',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule =>
        Rule.required().error('Du må fylle inn teksten som skal være i punktlisten'),
    },
  ],
};

export default punktliste;
