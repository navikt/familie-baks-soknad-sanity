import React from 'react';

import FileContentIcon from '../../images/FileContentIcon';
import { CustomSanityTyper, SanityTyper, SpørsmålDokumentBase } from '../typer';

const sporsmalDokument: SpørsmålDokumentBase = {
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
      name: 'beskrivelse',
      title: 'Beskrivelse av spørsmål',
      description: 'F.eks. dd.mm.åååå under spørsmål om dato. (frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
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
      type: CustomSanityTyper.ALERT_STRING,
    },
  ],
};

export default sporsmalDokument;
