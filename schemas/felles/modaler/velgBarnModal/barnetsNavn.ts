import { CustomSanityTyper, Field, SanityTyper } from '../../../typer';

const barnetsNavn: Field[] = [
  {
    title: 'Barnets navn',
    name: 'barnetsNavn',
    type: SanityTyper.OBJECT,
    options: {
      collapsable: true,
      collapsed: true,
    },
    validation: Rule => Rule.required().error('Du må fylle inn spørsmål om barnets navn'),
    fields: [
      {
        title: 'Tittel',
        name: 'tittel',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule => Rule.required().error('Du må fylle inn tittel om navn'),
      },
      {
        title: 'Fornavn',
        name: 'fornavn',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om fornavn'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om fornavn'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om fornavn'),
          },
        ],
      },
      {
        title: 'Etternavn',
        name: 'etternavn',
        type: SanityTyper.OBJECT,
        description: '(obligatorisk)',
        validation: Rule => Rule.required().error('Du må fylle inn spørsmål om etternavn'),
        fields: [
          {
            title: 'Spørsmål',
            name: 'sporsmal',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule => Rule.required().error('Du må fylle inn spørsmål om etternavn'),
          },
          {
            title: 'Feilmelding',
            name: 'feilmelding',
            type: CustomSanityTyper.LOCALE_STRING,
            validation: Rule =>
              Rule.required().error('Du må fylle inn en feilmelding for spørsmål om etternavn'),
          },
        ],
      },
      {
        title: 'Navn ikke bestemt checkbox label',
        description: '(obligatorisk)',
        name: 'ikkeBestemtCheckboxLabel',
        type: CustomSanityTyper.LOCALE_STRING,
        validation: Rule =>
          Rule.required().error('Du må fylle inn label til navn ikke bestemt-checkbox'),
      },
    ],
  },
];

export default barnetsNavn;
