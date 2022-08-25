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
    {
      title: 'Alert',
      name: 'alert',
      type: CustomSanityTyper.ALERT_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn alert'),
    },
    {
      title: 'Generell info',
      name: 'generellInfo',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn generell info'),
    },
    {
      title: 'Kontonummer',
      name: 'kontonummer',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn kontonummer'),
    },
    {
      title: 'Ettersending',
      name: 'ettersending',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn ettersending'),
    },
  ],
};

export default kvitteringsdokument;
