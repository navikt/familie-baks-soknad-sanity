import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  StegDokument,
  Steg,
} from '../../typer';

const personopplysninger: StegDokument = {
  steg: Steg.OM_DEG,
  title: dokumentTittel.OM_DEG_PERSONOPPLYSNINGER,
  name: DokumentNavn.OM_DEG_PERSONOPPLYSNINGER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Ident',
      name: 'ident',
      type: 'localeString',
      description: '(frivillig)',
    },
    {
      title: 'Statsborgerskap',
      name: 'statsborgerskap',
      type: 'localeString',
      description: '(frivillig)',
    },
    {
      title: 'Sivilstatus',
      name: 'sivilstatus',
      type: 'localeString',
      description: '(frivillig)',
    },
    {
      title: 'Adresse',
      name: 'adresse',
      type: 'localeString',
      description: '(frivillig)',
    },
  ],
};

export default personopplysninger;
