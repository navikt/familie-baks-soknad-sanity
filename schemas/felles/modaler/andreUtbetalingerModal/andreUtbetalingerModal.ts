import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  SpørsmålDokumentBase,
} from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import datoer from './datoer';
import hvilketLand from './hvilketLand';
import mottarNå from './mottarNå';

const andreUtbetalingerModal: SpørsmålDokumentBase = {
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
