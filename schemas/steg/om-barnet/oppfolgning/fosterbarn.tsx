import React from 'react';

import FileContentIcon from '../../../../images/FileContentIcon';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';

const fosterbarn: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_FOSTERBARN,
  name: DokumentNavn.OM_BARNET_FOSTERBARN,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'opplysningsPaminnelse',
      title: 'Påminnelse om hva som er opplyst i om barna',
      description: 'F.eks. "Du har opplyst at..." (obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn tekst for opplysningspåminnelse'),
    },
    {
      name: 'vedleggsnotis',
      title: (
        <span>
          <FileContentIcon /> Vedleggsnotis
        </span>
      ),
      description: 'Beskjed om at vedlegg må lastes opp. (obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn vedleggsnotis'),
    },
    {
      name: 'bekreftelseBeskrivelse',
      title: 'Beskrivelse av hva som må være med i bekreftelse',
      description: '(obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule =>
        Rule.required().error('Du må fylle inn tekst for beskrivelse av bekreftelse'),
    },
  ],
};

export default fosterbarn;
