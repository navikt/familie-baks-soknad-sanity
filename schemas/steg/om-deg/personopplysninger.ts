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
    { title: 'Alert', name: 'alert', type: CustomSanityTyper.ALERT_BLOCK },
    {
      title: 'Ident',
      name: 'ident',
      type: 'localeString',
    },
    {
      title: 'Statsborgerskap',
      name: 'statsborgerskap',
      type: 'localeString',
    },
    {
      title: 'Sivilstatus',
      name: 'sivilstatus',
      type: 'localeString',
    },
    {
      title: 'Adresse',
      name: 'adresse',
      type: 'localeString',
    },
  ],
};

export default personopplysninger;
