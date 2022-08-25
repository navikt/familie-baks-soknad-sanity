import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const kvitteringsdokument: StegDokument = {
  title: dokumentTittel.KVITTERING,
  name: DokumentNavn.KVITTERING,
  steg: Steg.KVITTERING,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tittel til steget'),
    },
  ],
};

export default kvitteringsdokument;
