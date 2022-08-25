import {
  DokumentNavn,
  dokumentTittel,
  StegDokument,
  Steg,
  SanityTyper,
  CustomSanityTyper,
} from '../../typer';

const knapperOgCheckbox: StegDokument = {
  steg: Steg.DOKUMENTASJON,
  title: dokumentTittel.DOKUMENTASJON_KNAPPER_OG_CHECKBOX,
  name: DokumentNavn.DOKUMENTASJON_KNAPPER_OG_CHECKBOX,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Legg til dokumentasjon-knapp',
      name: 'leggTil',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn knappetekst'),
    },
    {
      title: 'Fjern opplastet dokument-knapp',
      name: 'fjern',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn knappetekst'),
    },
    {
      title: 'Lastet opp fra før - checkbox label',
      name: 'checkboxLabel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn label tekst'),
    },
  ],
};

export default knapperOgCheckbox;
