import { DokumentNavn, dokumentTittel, SanityTyper, Steg, StegDokument } from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const adopsjon: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_ADOPSJON,
  name: DokumentNavn.OM_BARNET_ADOPSJON,
  type: SanityTyper.DOCUMENT,
  fields: [opplysningspaminnelse],
};

export default adopsjon;
