import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import datoer from './datoer';
import hvilketLand from './hvilketLand';
import mottarNå from './mottarNå';

const andreUtbetalingerModal: DokumentBase = {
  name: DokumentNavn.MODAL_ANDRE_UTBETALINGER,
  title: dokumentTittel.MODAL_ANDRE_UTBETALINGER,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...mottarNå,
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

export default andreUtbetalingerModal;
