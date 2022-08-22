import {
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  StegDokument,
  Steg,
  CustomSanityTyper,
} from '../../typer';

const lenker: StegDokument = {
  steg: Steg.VELG_BARN,
  title: dokumentTittel.VELG_BARN_LENKER,
  name: DokumentNavn.VELG_BARN_LENKER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Endre opplysninger i folkeregister alert+lenke',
      name: 'alert',
      type: 'alertBlock',
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn alert-melding'),
    },
    {
      title: 'Regler for ytelse-lenke',
      name: 'ytelseRegler',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn lenke for ytelsesregler'),
    },
  ],
};

export default lenker;
