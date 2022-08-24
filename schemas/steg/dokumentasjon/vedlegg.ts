import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const vedlegg: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_VEDLEGG,
  name: DokumentNavn.DOKUMENTASJON_VEDLEGG,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Avtale om delt bosted',
      name: 'avtaleDeltBosted',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: rule => rule.required().error('Du må fylle inn vedlegg'),
      fields: [
        {
          title: 'Tittel',
          name: 'tittel',
          type: CustomSanityTyper.LOCALE_BLOCK,
          description: '(obligatorisk)',
          validation: rule => rule.required().error('Du må fylle inn tittel til vedlegget'),
        },
      ],
    },
  ],
};

export default vedlegg;
