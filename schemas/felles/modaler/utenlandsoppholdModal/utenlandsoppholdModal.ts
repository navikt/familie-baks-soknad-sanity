import { SanityTyper, SpørsmålDokumentBase } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import arsak from './arsak';
import datoer from './datoer';
import hvilketLand from './hvilketLand';

const utenlandsoppholdModal: SpørsmålDokumentBase = {
  type: SanityTyper.DOCUMENT,
  fields: [...fellesFelterModal, ...arsak, ...hvilketLand, ...datoer],
};

export default utenlandsoppholdModal;
