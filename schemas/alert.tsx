import React from 'react';

import { ErrorColored, InformationColored, SuccessColored, WarningColored } from '@navikt/ds-icons';

import { CustomSanityTyper, SanityTyper } from './typer';

const alertVariant = {
  name: 'alertVariant',
  title: 'Alertvariant',
  type: SanityTyper.STRING,
  options: {
    list: [
      {
        title: (
          <span>
            <SuccessColored /> Suksess
          </span>
        ),
        value: 'success',
      },
      {
        title: (
          <span>
            <InformationColored /> Informasjon
          </span>
        ),
        value: 'info',
      },
      {
        title: (
          <span>
            <WarningColored /> Advarsel
          </span>
        ),
        value: 'warning',
      },
      {
        title: (
          <span>
            <ErrorColored /> Feil
          </span>
        ),
        value: 'error',
      },
    ],
    layout: 'radio',
  },
};

export const alertString = {
  title: 'Alert',
  name: CustomSanityTyper.ALERT_STRING,
  type: SanityTyper.OBJECT,
  fields: [
    alertVariant,
    {
      name: 'alertTekst',
      title: 'Alert-tekst',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export const alertBlock = {
  title: 'Alert',
  name: CustomSanityTyper.ALERT_BLOCK,
  type: SanityTyper.OBJECT,
  fields: [
    alertVariant,
    {
      name: 'alertTekst',
      title: 'Alert-tekst',
      type: CustomSanityTyper.LOCALE_BLOCK,
    },
  ],
};
