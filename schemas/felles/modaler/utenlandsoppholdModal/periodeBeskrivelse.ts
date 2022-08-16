import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const periodeBeskrivelse: Field[] = [
  {
    title: 'Beskrivelse av periode - feilmelding',
    name: 'periodeBeskrivelseFeilmelding',
    type: CustomSanityTyper.LOCALE_STRING,
    fieldset: 'periodeBeskrivelse',
    description: '(obligatorisk)',
    validation: Rule =>
      Rule.required().error(
        'Du må fylle inn en feilmelding for spørsmål om beskrivelse av perioden',
      ),
  },
  {
    title: 'Beskrivelse av periode - valgalternativer',
    name: 'periodeBeskrivelseValgalternativer',
    type: SanityTyper.OBJECT,
    fieldset: 'periodeBeskrivelse',
    description: '(obligatorisk)',
    fields: [
      {
        title: 'Flyttet permanent til Norge',
        name: 'permanentTilNorge',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
      },
      {
        title: 'Flyttet permanent fra Norge',
        name: 'permanentFraNorge',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
      },
      {
        title: 'Opphold utenfor Norge nå',
        name: 'oppholdUtenforNorgeNa',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
      },
      {
        title: 'Opphold utenfor Norge tidligere',
        name: 'oppholdUtenforNorgeTidligere',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
      },
    ],
    validation: Rule =>
      Rule.required().error('Du må fylle inn valgalternativer for beskrivelse av perioden'),
  },
];

export default periodeBeskrivelse;
