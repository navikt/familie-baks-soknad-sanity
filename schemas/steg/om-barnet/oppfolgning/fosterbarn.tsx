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
import opplysningspaminnelse from './opplysningspaminnelse';

const fosterbarn: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_FOSTERBARN,
  name: DokumentNavn.OM_BARNET_FOSTERBARN,
  type: SanityTyper.DOCUMENT,
  fields: [
    opplysningspaminnelse,
    {
      name: 'vedleggsnotis',
      title: (
        <span>
          <FileContentIcon /> Vedleggsnotis
        </span>
      ),
      options: {
        collapsable: true,
        collapsed: true,
      },
      description: 'Beskjed om at vedlegg må lastes opp. (obligatorisk)',
      type: CustomSanityTyper.LOCALE_STRING,
      validation: Rule => Rule.required().error('Du må fylle inn vedleggsnotis'),
    },
    {
      name: 'bekreftelseBeskrivelse',
      title: 'Beskrivelse av hva som må være med i bekreftelse',
      description: '(obligatorisk)',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule =>
        Rule.required().error('Du må fylle inn tekst for beskrivelse av bekreftelse'),
    },
  ],
};

export default fosterbarn;
