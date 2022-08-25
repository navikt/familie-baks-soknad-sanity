import {
  CustomSanityTyper,
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const mellomlagretAlert: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_MELLOMLAGRET_ALERT,
  name: DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Alert',
      name: 'alert',
      description: '(obligatorisk)',
      type: CustomSanityTyper.ALERT_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn alert'),
    },
  ],
};

export default mellomlagretAlert;
