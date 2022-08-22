import { DokumentBase, DokumentNavn, dokumentTittel, SanityTyper } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';
import barnetsNavn from './barnetsNavn';
import erBarnFodt from './erBarnFodt';
import ident from './ident';

const leggTilBarnModal: DokumentBase = {
  name: DokumentNavn.MODAL_LEGG_TIL_BARN,
  title: dokumentTittel.MODAL_LEGG_TIL_BARN,
  type: SanityTyper.DOCUMENT,
  fields: [...fellesFelterModal, ...erBarnFodt, ...barnetsNavn, ...ident],
};

export default leggTilBarnModal;
