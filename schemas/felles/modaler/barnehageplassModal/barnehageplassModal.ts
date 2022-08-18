import { DokumentBase, DokumentNavn, dokumentTittel, SanityTyper } from '../../../typer';
import fellesFelterModal from '../fellesFelterModal';

const barnehageplassModal: DokumentBase = {
  name: DokumentNavn.MODAL_BARNEHAGEPLASS,
  title: dokumentTittel.MODAL_BARNEHAGEPLASS,
  type: SanityTyper.DOCUMENT,
  fields: [...fellesFelterModal],
};

export default barnehageplassModal;
