import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const slektsforholdValgalternativer: StegDokument = {
  steg: Steg.EØS_FOR_BARN,
  title: dokumentTittel.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER,
  name: DokumentNavn.EOS_FOR_BARN_SLEKTSFORHOLD_ALTERNATIVER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Forelder',
      name: 'forelder',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
    },
    {
      title: 'Onkel/tante',
      name: 'onkelTante',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
    },
    {
      title: 'Besteforelder',
      name: 'besteforelder',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
    },
    {
      title: 'Annen familierelasjon',
      name: 'annenFamilierelasjon',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
    },
    {
      title: 'Annen relasjon',
      name: 'annenRelasjon',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for valgalternativ'),
    },
  ],
};

export default slektsforholdValgalternativer;
