import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const arsak: Field[] = [
  {
    title: 'Årsak',
    name: 'arsak',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle årsak'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om beskrivelse av perioden'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error(
            'Du må fylle inn en feilmelding for spørsmål om beskrivelse av perioden',
          ),
      },
      {
        title: 'Dropdown valgalternativer',
        name: 'valgalternativer',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        fields: [
          {
            title: 'Flyttet permanent til Norge',
            name: 'permanentTilNorge',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
          {
            title: 'Flyttet permanent fra Norge',
            name: 'permanentFraNorge',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
          {
            title: 'Opphold utenfor Norge nå',
            name: 'oppholdUtenforNorgeNa',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
          {
            title: 'Opphold utenfor Norge tidligere',
            name: 'oppholdUtenforNorgeTidligere',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
        ],
        validation: Rule =>
          Rule.required().error('Du må fylle inn valgalternativer for beskrivelse av perioden'),
      },
    ],
  },
];

export default arsak;
