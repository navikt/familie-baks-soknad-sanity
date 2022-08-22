import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import datoer from './datoer';
import farPensjonNa from './farPensjonNa';
import hvilketLand from './hvilketLand';

const pensjonsModal: DokumentBase = {
  name: DokumentNavn.MODAL_PENSJON,
  title: dokumentTittel.MODAL_PENSJON,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...farPensjonNa,
    ...hvilketLand,
    ...datoer,
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
  ],
};

export default pensjonsModal;
