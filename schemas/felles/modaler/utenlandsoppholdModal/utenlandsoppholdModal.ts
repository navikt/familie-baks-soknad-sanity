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
  title: dokumentTittel.MODAL_UTENLANDSOPPHOLD_SOKER,
  name: DokumentNavn.MODAL_UTENLANDSOPPHOLD_SOKER,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      title: 'Modal tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn en tittel'),
    },
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
    {
      title: 'Knapper',
      name: 'knapper',
      type: SanityTyper.OBJECT,
      options: {
        collapsable: true,
        collapsed: true,
      },
      validation: Rule => Rule.required().error('Du må fylle inn knapper'),
      fields: [
        {
          title: 'Legg til-knapp',
          name: 'leggTil',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn tekst for legg til-knappen'),
        },
        {
          title: 'Fjern-knapp',
          name: 'fjern',
          type: CustomSanityTyper.LOCALE_STRING,
          description: '(obligatorisk)',
          validation: Rule => Rule.required().error('Du må fylle inn tekst for fjern-knappen'),
        },
      ],
    },
    ...arsak,
    ...hvilketLand,
    ...datoer,
  ],
};

export default utenlandsoppholdModal;
