import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const antallTimer: Field[] = [
  {
    title: 'Hvor mange timer i uken har barnet fått tildelt barnehageplass?',
    name: 'antallTimer',
    type: SanityTyper.OBJECT,
    description: '(obligatorisk)',
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om timer i barnehagen'),
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
];

export default antallTimer;
