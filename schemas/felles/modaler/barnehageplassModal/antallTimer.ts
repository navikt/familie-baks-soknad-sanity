import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const antallTimer: Field[] = [
  {
    title: 'Antall timer',
    name: 'antallTimer',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om antall timer'),
    fields: [
      {
        title: 'Hvor mange timer i uken har x fått tildelt i barnehagen',
        name: 'harAntallTimer',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om timer i barnehagen',
              ),
          },
        ],
      },
      {
        title: 'Hvor mange timer i uken fikk x tildelt i barnehagen',
        name: 'fikkTildeltAntallTimer',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om timer i barnehagen',
              ),
          },
        ],
      },
      {
        title: 'Hvor mange timer i uken har x fått tildelt i barnehagen',
        name: 'fattTildeltAntallTimer',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om tildelte timer'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om tildelte timer'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error(
                'Du må fylle inn en feilmelding for spørsmål om tildelte timer',
              ),
          },
        ],
      },
    ],
  },
];

export default antallTimer;
