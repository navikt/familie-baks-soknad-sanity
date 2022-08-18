import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../typer';

const ytelse: DokumentBase = {
  title: dokumentTittel.FRITTSTAENDEORD_YTELSE,
  name: DokumentNavn.FRITTSTAENDEORD_YTELSE,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Kontantstøtte',
      name: 'kontantstotte',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn kontantstøtte'),
    },
    {
      title: 'Ordinær barnetrygd',
      name: 'ordinaerBarnetrygd',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn ordinær barnetrygd'),
    },
    {
      title: 'Utvidet barnetrygd',
      name: 'utvidetBarnetrygd',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn utvidet barnetrygd'),
    },
  ],
};

export default ytelse;
