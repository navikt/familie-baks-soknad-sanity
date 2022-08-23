import React from 'react';

import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const andreForelder: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_ANDRE_FORELDER,
  name: DokumentNavn.OM_BARNET_ANDRE_FORELDER,
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
  ],
};

export default andreForelder;
