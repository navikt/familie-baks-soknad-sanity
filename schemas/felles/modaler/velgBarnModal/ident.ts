import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const ident: Field[] = [
  {
    title: 'Ident',
    name: 'ident',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om ident'),
    fields: [
      {
        title: 'Spørsmål',
        name: 'sporsmal',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om ident'),
      },
      {
        title: 'Feilmelding',
        name: 'feilmelding',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn en feilmelding for spørsmål om ident'),
      },
      {
        title: 'Ikke fått ident checkbox label',
        name: 'ikkeFattIdentCheckboxLabel',
        description: '(obligatorisk)',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn label til ikke fått ident-checkbox'),
      },
      {
        title: 'Ikke fått ident alert',
        name: 'ikkeFattIdentAlert',
        description: '(obligatorisk)',
        type: CustomSanityTyper.ALERT_BLOCK,
        validation: Rule => Rule.required().error('Du må fylle inn alert til ikke fått ident'),
      },
    ],
  },
];

export default ident;
