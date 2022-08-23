import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const barnehageplass: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_BARNEHAGEPLASS,
  name: DokumentNavn.OM_BARNET_BARNEHAGEPLASS,
  type: SanityTyper.DOCUMENT,
  fields: [opplysningspaminnelse],
};

export default barnehageplass;
