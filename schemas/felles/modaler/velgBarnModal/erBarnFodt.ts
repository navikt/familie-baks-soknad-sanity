import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const erBarnFodt: Field[] = [
  {
    title: 'Er barn født',
    name: 'erBarnFodt',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om barnet er født'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om barnet er født'),
      },
      {
        title: 'Feilmelding ikke besvart',
        name: 'feilmeldingUbesvart',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for om barnet er født'),
      },
      {
        title: 'Feilmelding barn ikke født',
        name: 'feilmeldingIkkeFodt',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for om barnet er født'),
      },
      {
        title: 'Ikke født-alert',
        description: '(obligatorisk)',
        name: 'alert',
        type: CustomSanityTyper.ALERT_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en alert for spørsmål om barnet ikke er født'),
      },
    ],
  },
];

export default erBarnFodt;
