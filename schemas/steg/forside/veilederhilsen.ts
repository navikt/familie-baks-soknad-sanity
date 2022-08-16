import {
  CustomSanityTyper,
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const veilederhilsen: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_VEILEDERHILSEN,
  name: DokumentNavn.FORSIDE_VEILEDERHILSEN,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Veilederhilsen',
      name: 'veilederhilsen',
      description: 'Veilederhilsen (obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn en veilederhilsen'),
    },
  ],
};

export default veilederhilsen;
