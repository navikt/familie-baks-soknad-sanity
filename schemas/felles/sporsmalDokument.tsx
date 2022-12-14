import React from 'react';

import FileContentIcon from '../../images/FileContentIcon';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../typer';

const sporsmalDokument = (steg: Steg, dokumentNavn: DokumentNavn): StegDokument => ({
  steg: steg,
  title: dokumentTittel[dokumentNavn],
  name: dokumentNavn,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'sporsmal',
      title: 'Spørsmål',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
    },
    {
      name: 'feilmelding',
      title: 'Feilmelding',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn feilmelding'),
    },
    {
      name: 'beskrivelse',
      title: 'Beskrivelse av spørsmål',
      description: 'F.eks. dd.mm.åååå under spørsmål om dato. (frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
    {
      name: 'checkboxLabel',
      title: 'Checkbox label',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(frivillig)',
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
      type: CustomSanityTyper.LOCALE_BLOCK,
    },
  ],
});

export default sporsmalDokument;
