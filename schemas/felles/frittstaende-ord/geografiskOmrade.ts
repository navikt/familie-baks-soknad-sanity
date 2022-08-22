import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../typer';

const geografiskOmrade: DokumentBase = {
  title: dokumentTittel.FRITTSTAENDEORD_GEOGRAFISK_OMRADE,
  name: DokumentNavn.FRITTSTAENDEORD_GEOGRAFISK_OMRADE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Utlandet',
      name: 'utlandet',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn fra utlandet tekst'),
    },
    {
      title: 'Norge',
      name: 'norge',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn fra Norge tekst'),
    },
  ],
};

export default geografiskOmrade;
