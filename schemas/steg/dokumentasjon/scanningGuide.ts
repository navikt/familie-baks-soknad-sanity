import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const scanningGuide: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_SCANNING_GUIDE,
  name: DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Klikkbar tekst for å ekspandere guide',
      name: 'ekspanderbarTekst',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn ekspanderbar tekst'),
    },
  ],
};

export default scanningGuide;
