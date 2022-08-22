import {
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  StegDokument,
  Steg,
  CustomSanityTyper,
} from '../../typer';

const barnekort: StegDokument = {
  steg: Steg.VELG_BARN,
  title: dokumentTittel.VELG_BARN_KORT,
  name: DokumentNavn.VELG_BARN_KORT,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Ident',
      name: 'ident',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn ident'),
    },
    {
      title: 'Alder',
      name: 'alder',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn alder'),
    },
    {
      title: 'Registrert bosted',
      name: 'registrertBosted',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn registrert bosted'),
    },
    {
      title: 'Søk for dette barnet - checkbox label',
      name: 'sokForBarnCheckboxLabel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn label for søk for barn-checkbox'),
    },
    {
      title: 'Søk for andre barn, tekstinnhold på kort',
      name: 'sokForAndreBarnKort',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule =>
        rule.required().error('Du må legge inn tekst for søk for andre barn-kort'),
    },
    {
      title: 'Legg til barn-knapp på kort for å søke om flere barn',
      name: 'leggTilBarnKnapp',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må legge inn knappetekst for legg til barn'),
    },
  ],
};

export default barnekort;
