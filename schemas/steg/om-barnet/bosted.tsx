import React from 'react';

import FileContentIcon from '../../../images/FileContentIcon';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  Field,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';
import sporsmalMedFeilmeldingBlock from './sporsmalMedFeilmeldingBlock';

const spørsmålMedVedlegg: Field[] = [
  ...sporsmalMedFeilmeldingBlock,
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
];

const bosted: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_BOSTED,
  name: DokumentNavn.OM_BARNET_BOSTED,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'tittel',
      title: 'Tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tittel for bosted'),
    },
    {
      name: 'brodtekst',
      title: 'Brødtekst',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn brødtekst for bosted'),
    },
    {
      name: 'borFastMedSoker',
      title: 'Bor barn fast med søker',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...spørsmålMedVedlegg],
    },
    {
      name: 'skriftligAvtaleDeltBosted',
      title: 'Skriftlig avtale om delt bosted',
      options: {
        collapsable: true,
        collapsed: true,
      },
      type: SanityTyper.OBJECT,
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...spørsmålMedVedlegg],
    },
  ],
};

export default bosted;
