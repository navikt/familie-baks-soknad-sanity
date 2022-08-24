import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const andreForelder: StegDokument = {
  steg: Steg.EØS_FOR_BARN,
  title: dokumentTittel.EOS_FOR_BARN_ANDRE_FORELDER,
  name: DokumentNavn.EOS_FOR_BARN_ANDRE_FORELDER,
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
      name: 'idnummer',
      title: 'Idnummer',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        ...sporsmalMedFeilmeldingBlock,
        {
          name: 'ukjentLabel',
          title: 'Ukjent idnummer checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'adresse',
      title: 'Adresse',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        ...sporsmalMedFeilmeldingBlock,
        {
          name: 'ukjentLabel',
          title: 'Ukjent adresse checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'arbeidINorge',
      title: 'Arbeid i Norge',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'arbeidINorgeGjenlevende',
      title: 'Arbeid i Norge gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pensjonFraNorge',
      title: 'Pensjon fra Norge',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pensjonFraNorgeGjenlevende',
      title: 'Pensjon fra Norge gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'andreUtbetalinger',
      title: 'Andre utbetalinger',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'andreUtbetalingerGjenlevende',
      title: 'Andre utbetalinger gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pagaendeSoknadOmYtelseFraEos',
      title: 'Pågående søknad om ytelse fra eøs-land',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pagaendeSoknadHvilketLand',
      title: 'Pågående søknad fra hvilket land',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'ytelseFraEosLand',
      title: 'Får eller har fått ytelse fra annet eøs-land ',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'ytelseFraEosLandGjenlevende',
      title: 'Fått ytelse fra annet eøs-land gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
  ],
};

export default andreForelder;
