import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../typer';

const svaralternativer: DokumentBase = {
  title: dokumentTittel.FRITTSTAENDEORD_SVARALTERNATIVER,
  name: DokumentNavn.FRITTSTAENDEORD_SVARALTERNATIVER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Ja',
      name: 'ja',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn svaralternativ for ja'),
    },
    {
      title: 'Nei',
      name: 'nei',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn svaralternativ for nei'),
    },
    {
      title: 'Vet ikke',
      name: 'vetikke',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn svaralternativ for vet ikke'),
    },
  ],
};

export default svaralternativer;
