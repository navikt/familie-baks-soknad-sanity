import { CustomSanityTyper, SanityTyper, SpørsmålDokumentBase } from '../typer';

const stegTittelDokument: SpørsmålDokumentBase = {
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn tittel til steget'),
    },
  ],
};

export default stegTittelDokument;
