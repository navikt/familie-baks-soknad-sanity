import React from 'react';

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
import sporsmalMedFeilmeldingString from './sporsmalMedFeilmeldingString';

const spørsmålMedAlert: Field[] = [
  ...sporsmalMedFeilmeldingBlock,
  {
    name: 'alert',
    title: 'Alert',
    type: CustomSanityTyper.ALERT_STRING,
    description: '(obligatorisk)',
    validation: Rule => Rule.required().error('Du må fylle inn alert'),
  },
];

const andreForelder: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_ANDRE_FORELDER,
  name: DokumentNavn.OM_BARNET_ANDRE_FORELDER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'tittel',
      title: 'Tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tittel for andre forelder'),
    },
    {
      name: 'kanIkkeGiOpplysninger',
      title: 'Kan ikke gi opplysninger checkbox',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule =>
        Rule.required().error('Du må fylle inn checkboxlabel for kan ikke gi opplysninger'),
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'navn',
      title: 'Navn',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingString],
    },
    {
      name: 'ident',
      title: 'Ident',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        ...sporsmalMedFeilmeldingString,
        {
          name: 'ukjentLabel',
          title: 'Ukjent ident checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'fodselsdato',
      title: 'Fødselsdato',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [
        ...sporsmalMedFeilmeldingString,
        {
          name: 'ukjentLabel',
          title: 'Ukjent fødselsdato checkbox',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn label'),
        },
      ],
    },
    {
      name: 'yrkesaktiv',
      title: 'Yrkesaktiv',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...spørsmålMedAlert],
    },
    {
      name: 'oppholdIUtland',
      title: 'Opphold i utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...spørsmålMedAlert],
    },
    {
      name: 'arbeidIUtland',
      title: 'Arbeid i utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'arbeidIUtlandGjenlevende',
      title: 'Arbeid i utlandet gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pensjonFraUtland',
      title: 'Pensjon fra utlandet',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
    {
      name: 'pensjonFraUtlandGjenlevende',
      title: 'Pensjon fra utlandet gjenlevende',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn spørsmålsteksten'),
      fields: [...sporsmalMedFeilmeldingBlock],
    },
  ],
};

export default andreForelder;
