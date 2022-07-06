import React from 'react';

import { FileContent } from '@navikt/ds-icons';

import { CustomSanityTyper, DokumentTittel, SanityTyper } from './typer';

const sporsmalDokument = {
  title: DokumentTittel.SPØRSMÅL,
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
          <FileContent /> Vedleggsnotis
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
