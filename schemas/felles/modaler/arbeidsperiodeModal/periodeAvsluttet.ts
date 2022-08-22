import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const periodeAvsluttet: Field[] = [
  {
    title: 'Periode avsluttet',
    name: 'periodeAvsluttet',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn perioden er avsluttet'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error('Du må fylle inn spørsmål om perioden er avsluttet'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        type: CustomSanityTyper.LOCALE_STRING,
        description: '(obligatorisk)',
        validation: Rule =>
          Rule.required().error(
            'Du må fylle inn en feilmelding for spørsmål om perioden er avsluttet',
          ),
      },
    ],
  },
];

export default periodeAvsluttet;
