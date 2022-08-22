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
      title: 'Alert',
      name: 'alert',
      type: 'alertBlock',
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn alert-melding'),
    },
    {
      title: 'Ident',
      name: 'ident',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn ident'),
    },
    {
      title: 'Statsborgerskap',
      name: 'statsborgerskap',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn statsborgerskap'),
    },
    {
      title: 'Sivilstatus',
      name: 'sivilstatus',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn sivilstatus'),
    },
    {
      title: 'Adresse',
      name: 'adresse',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn adresse'),
    },
  ],
};

export default personopplysninger;
