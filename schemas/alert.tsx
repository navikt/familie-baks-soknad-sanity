import React from 'react';

import { ErrorColored, InformationColored, SuccessColored, WarningColored } from '@navikt/ds-icons';

import { CustomSanityTyper, SanityTyper } from './typer';

const alertVariant = {
  name: 'alertVariant',
  title: 'Alertvariant',
  type: SanityTyper.STRING,
  validation: rule => rule.required().error('Du må velge alertvariant'),
  description: (
    <span>
      Suksess = <SuccessColored /> <br />
      Informasjon = <InformationColored /> <br />
      Advarsel = <WarningColored /> <br />
      Feil = <ErrorColored /> <br />
    </span>
  ),
  options: {
    list: [
      {
        title: 'Suksess',
        value: 'success',
      },
      {
        title: 'Informasjon',
        value: 'info',
      },
      {
        title: 'Advarsel',
        value: 'warning',
      },
      {
        title: 'Feil',
        value: 'error',
      },
    ],
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
      validation: rule => rule.required().error('Du må fylle inn alert-tekst'),
    },
  ],
};
