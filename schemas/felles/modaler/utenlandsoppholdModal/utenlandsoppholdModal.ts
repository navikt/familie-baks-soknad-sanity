import { CustomSanityTyper, SanityTyper, SpørsmålDokumentBase } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import arsak from './arsak';
import datoer from './datoer';
import hvilketLand from './hvilketLand';

const utenlandsoppholdModal: SpørsmålDokumentBase = {
  type: SanityTyper.DOCUMENT,
  fields: [
    ...fellesFelterModal,
    ...arsak,
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

export default utenlandsoppholdModal;
