import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../typer';

const preposisjoner: DokumentBase = {
  title: dokumentTittel.FRITTSTAENDEORD_PREPOSISJONER,
  name: DokumentNavn.FRITTSTAENDEORD_PREPOSISJONER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'i',
      name: 'i',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn tekst for preposisjonen "i"'),
    },
    {
      title: 'utenfor',
      name: 'utenfor',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule =>
        Rule.required().error('Du må fylle inn tekst for preposisjonen "utenfor"'),
    },
  ],
};

export default preposisjoner;
