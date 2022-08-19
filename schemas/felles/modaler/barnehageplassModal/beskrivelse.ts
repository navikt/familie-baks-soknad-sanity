import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const beskrivelse: Field[] = [
  {
    title: 'Beskrivelse',
    name: 'beskrivelse',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle beskrivelse'),
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
            title: 'Barnet har barnehageplass nå',
            name: 'barnehageplassNa',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
          {
            title: 'Barnet har hatt barnehageplass tidligere',
            name: 'barnehageplassTidligere',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
          },
          {
            title: 'Barnet har fått tildelt barnehageplass i fremtiden',
            name: 'barnehageplassFremtiden',
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

export default beskrivelse;
