import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const info: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_INFO,
  name: DokumentNavn.DOKUMENTASJON_INFO,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Info i alert',
      name: 'infoAlert',
      type: CustomSanityTyper.ALERT_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn alert info'),
    },
    {
      title: 'Annen info',
      name: 'info',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn info'),
    },
  ],
};

export default info;
