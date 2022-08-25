import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../typer';

const teksterForDato: DokumentBase = {
  title: dokumentTittel.TEKSTER_FOR_DATO,
  name: DokumentNavn.TEKSTER_FOR_DATO,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Format hjelpetekst',
      name: 'formatHjelpetekst',
      type: CustomSanityTyper.LOCALE_STRING,
      description: 'F.eks "Format dd.mm.åååå" (obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn hjelpetekst for dato'),
    },
    {
      title: 'Format placeholder',
      name: 'formatPlaceholder',
      type: CustomSanityTyper.LOCALE_STRING,
      description: 'F.eks. "DD.MM.ÅÅÅÅ" (obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn placeholder for dato'),
    },
    {
      title: 'Feilmeldinger',
      name: 'feilmelding',
      type: SanityTyper.OBJECT,
      validation: Rule => Rule.required().error('Du må fylle inn feilmedlinger for dato'),
      fields: [
        {
          title: 'Ugyldig format',
          name: 'ugyldigFormat',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule =>
            Rule.required().error('Du må fylle inn feilmelding for ugyldig format'),
        },
        {
          title: 'Ugyldig dato: dagens dato eller frem i tid',
          name: 'dagensDatoEllerFremtid',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding for ugyldig dato'),
        },
        {
          title: 'Ugyldig dato: frem i tid',
          name: 'fremITid',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding for ugyldig dato'),
        },
        {
          title: 'Ugyldig dato: tilbake i tid',
          name: 'tilbakeITid',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding for ugyldig dato'),
        },
        {
          title: 'Ugyldig periodedato: periode avsluttes før den startet',
          name: 'avsluttetForStartet',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding for ugyldig dato'),
        },
        {
          title: 'Ugyldig periodedato: startdato mer enn tolv mnd tilbake',
          name: 'merEnn12MndTilbake',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn feilmelding for ugyldig dato'),
        },
      ],
    },
  ],
};

export default teksterForDato;
