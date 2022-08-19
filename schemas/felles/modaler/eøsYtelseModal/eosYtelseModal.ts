import {
  CustomSanityTyper,
  DokumentBase,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
} from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import belop from './belop';
import datoer from './datoer';
import farEosYtelseNa from './farYtelseNa';
import hvilketLand from './hvilketLand';

const eosYtelseModal: DokumentBase = {
  name: DokumentNavn.MODAL_EOS_YTELSE,
  title: dokumentTittel.MODAL_EOS_YTELSE,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...farEosYtelseNa,
    ...hvilketLand,
    ...datoer,
    ...belop,
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_STRING,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
  ],
};

export default eosYtelseModal;
