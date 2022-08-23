import { DokumentNavn, dokumentTittel, SanityTyper, Steg, StegDokument } from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const utenlandsopphold: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_UTENLANDSOPPHOLD,
  name: DokumentNavn.OM_BARNET_UTENLANDSOPPHOLD,
  type: SanityTyper.DOCUMENT,
  fields: [opplysningspaminnelse],
};

export default utenlandsopphold;
