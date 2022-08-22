import React from 'react';

import FileContentIcon from '../../../images/FileContentIcon';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const spørsmål: StegDokument = {
  steg: Steg.OM_BARNA,
  title: dokumentTittel.OM_BARNA_SPORSMAL,
  name: DokumentNavn.OM_BARNA_SPORSMAL,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'sporsmal',
      title: 'Spørsmål',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
    },
    {
      name: 'feilmelding',
      title: 'Feilmelding',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
    },
    {
      name: 'hvemAvBarna',
      title: 'Hvem av barna spørsmål',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule =>
        Rule.required().error('Du må fylle inn oppfølgningspørsmålet "Hvem av barna.."'),
    },
    {
      name: 'vedleggsnotis',
      title: (
        <span>
          <FileContentIcon /> Vedleggsnotis
        </span>
      ),
      description: 'Beskjed om at vedlegg må lastes opp. (frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      name: 'alert',
      title: 'Alert',
      description: '(frivillig)',
      type: CustomSanityTyper.ALERT_BLOCK,
    },
  ],
};

export default spørsmål;
