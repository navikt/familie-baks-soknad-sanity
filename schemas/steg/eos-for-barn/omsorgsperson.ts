import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import sporsmalMedFeilmeldingString from '../../felles/sporsmalMedFeilmeldingString';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const omsorgsperson: StegDokument = {
  steg: Steg.EØS_FOR_BARN,
  title: dokumentTittel.EOS_FOR_BARN_OMSORGSPERSON,
  name: DokumentNavn.EOS_FOR_BARN_OMSORGSPERSON,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'navn',
      title: 'Navn',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'slektsforhold',
      title: 'Slektsforhold',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
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
        ...sporsmalMedFeilmeldingString,
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
        ...sporsmalMedFeilmeldingString,
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
      name: 'arbeidIUtland',
      title: 'Arbeid i utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
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
      name: 'pensjonFraUtland',
      title: 'Pensjon fra utlandet',
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
  ],
};

export default omsorgsperson;
