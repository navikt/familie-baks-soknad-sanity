import { DokumentNavn, dokumentTittel, SanityTyper, StegDokument, Steg } from '../typer';

const localestring = (steg: Steg, dokumentNavn: DokumentNavn): StegDokument => ({
  steg: steg,
  title: dokumentTittel[dokumentNavn],
  name: dokumentNavn,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Bokmål',
      name: 'nb',
      type: SanityTyper.STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn bokmål'),
    },
    {
      title: 'Nynorsk',
      name: 'nn',
      type: SanityTyper.STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn nynorsk'),
    },
    {
      title: 'Engelsk',
      name: 'en',
      type: SanityTyper.STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn engelsk'),
    },
  ],
});

export default localestring;
