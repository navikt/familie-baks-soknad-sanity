import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import arsak from './arsak';
import datoer from './datoer';
import hvilketLand from './hvilketLand';

const utenlandsoppholdModal: DokumentBase = {
  title: dokumentTittel.MODAL_UTENLANDSOPPHOLD,
  name: DokumentNavn.MODAL_UTENLANDSOPPHOLD,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Legg til-knapp',
      name: 'leggTilKnapp',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for legg til-knappen'),
    },
    {
      title: 'Fjern-knapp',
      name: 'fjernKnapp',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for fjern-knappen'),
    },
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
    {
      title: 'Modal tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn en tittel'),
    },
    ...arsak,
    ...hvilketLand,
    ...datoer,
  ],
};

export default utenlandsoppholdModal;
