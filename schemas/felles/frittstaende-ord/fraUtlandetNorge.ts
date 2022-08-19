import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../typer';

const fraUtlandetNorge: DokumentBase = {
  title: dokumentTittel.FRITTSTAENDEORD_FRA_UTLANDET_NORGE,
  name: DokumentNavn.FRITTSTAENDEORD_FRA_UTLANDET_NORGE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Fra utlandet',
      name: 'fraUtlandet',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn fra utlandet tekst'),
    },
    {
      title: 'Fra Norge',
      name: 'fraNorge',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn fra Norge tekst'),
    },
  ],
};

export default fraUtlandetNorge;
