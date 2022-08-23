import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const andreForelder: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_ANDRE_FORELDER,
  name: DokumentNavn.OM_BARNET_ANDRE_FORELDER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'tittel',
      title: 'Tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tittel for andre forelder'),
    },
    {
      name: 'kanIkkeGiOpplysninger',
      title: 'Kan ikke gi opplysninger checkbox',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule =>
        Rule.required().error('Du må fylle inn checkboxlabel for kan ikke gi opplysninger'),
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'navn',
      title: 'Navn',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
    {
      name: 'ident',
      title: 'Ident',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
        {
          name: 'ukjentLabel',
          title: 'Ukjent ident checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'fodselsdato',
      title: 'Fødselsdato',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_STRING,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
        {
          name: 'ukjentLabel',
          title: 'Ukjent fødselsdato checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'yrkesaktiv',
      title: 'Yrkesaktiv',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
    {
      name: 'arbeidIUtland',
      title: 'Arbeid i utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
    {
      name: 'arbeidIUtlandGjenlevende',
      title: 'Arbeid i utlandet gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
    {
      name: 'pensjonFraUtland',
      title: 'Pensjon fra utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
    {
      name: 'pensjonFraUtlandGjenlevende',
      title: 'Pensjon fra utlandet gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        {
          name: 'sporsmal',
          title: 'Spørsmål',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
        },
        {
          name: 'feilmelding',
          title: 'Feilmelding',
          description: '(obligatorisk)',
          type: CustomSanityTyper.LOCALE_BLOCK,
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
        },
      ],
    },
  ],
};

export default andreForelder;
