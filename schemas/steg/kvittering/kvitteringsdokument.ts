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
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tittel til steget'),
    },
    {
      title: 'Alert',
      name: 'alert',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.ALERT_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn alert'),
    },
    {
      title: 'Generell info',
      name: 'generellInfo',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn generell info'),
    },
    {
      title: 'Kontonummer',
      name: 'kontonummer',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn kontonummer'),
    },
    {
      title: 'Ettersending',
      name: 'ettersending',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn ettersending'),
    },
  ],
};

export default kvitteringsdokument;
