import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import periodeBeskrivelse from './periodeBeskrivelse';

const utenlandsoppholdModal: DokumentBase = {
  title: dokumentTittel.MODAL_UTENLANDSOPPHOLD,
  name: DokumentNavn.MODAL_UTENLANDSOPPHOLD,
  type: SanityTyper.DOCUMENT,
  fieldsets: [
    {
      name: 'periodeBeskrivelse',
      title: 'Beskrivelse av periode',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: 'Legg til-knapp',
      name: 'leggTilKnapp',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn tekst for legg til-knappen'),
    },
    {
      title: 'Tittel',
      name: 'tittel',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn en tittel'),
    },
    ...periodeBeskrivelse,
  ],
};

export default utenlandsoppholdModal;
