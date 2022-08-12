import {
  DokumentNavn,
  SanityTyper,
  StegDokument,
  Steg,
  dokumentTittel,
} from '../../typer';

const sprakVelger: StegDokument = {
  steg: Steg.FORSIDE,
  title: dokumentTittel.FORSIDE_SPRAKVELGER,
  name: DokumentNavn.FORSIDE_SPRAKVELGER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Bokmål',
      name: 'bokmal',
      description: 'Alternativ bokmål i språkvelgeren (obligatorisk)',
      type: SanityTyper.STRING,
      validation: Rule => Rule.required().error('Du må fylle inn bokmål'),
    },
    {
      title: 'Nynorsk',
      name: 'nynorsk',
      description: 'Alternativ nynorsk i språkvelgeren (obligatorisk)',
      type: SanityTyper.STRING,
      validation: Rule => Rule.required().error('Du må fylle inn nynorsk'),
    },
    {
      title: 'Engelsk',
      name: 'engelsk',
      description: 'Alternativ engelsk i språkvelgeren (obligatorisk)',
      type: SanityTyper.STRING,
      validation: Rule => Rule.required().error('Du må fylle inn engelsk'),
    },
  ],
};

export default sprakVelger;
