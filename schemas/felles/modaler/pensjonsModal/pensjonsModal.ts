import { CustomSanityTyper, SanityTyper, SpørsmålDokumentBase } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import datoer from './datoer';
import farPensjonNa from './farPensjonNa';
import hvilketLand from './hvilketLand';

const pensjonsModal: SpørsmålDokumentBase = {
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...farPensjonNa,
    ...hvilketLand,
    ...datoer,
    {
      title: 'Legg til flere perioder spørsmål',
      name: 'flerePerioderSporsmal',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '(obligatorisk)',
      validation: Rule => Rule.required().error('Du må fylle inn spørsmål for flere perioder'),
    },
  ],
};

export default pensjonsModal;
