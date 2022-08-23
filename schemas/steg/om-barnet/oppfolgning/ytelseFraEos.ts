import { DokumentNavn, dokumentTittel, SanityTyper, Steg, StegDokument } from '../../../typer';
import opplysningspaminnelse from './opplysningspaminnelse';

const ytelseFraEos: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_YTELSE_FRA_EOS,
  name: DokumentNavn.OM_BARNET_YTELSE_FRA_EOS,
  type: SanityTyper.DOCUMENT,
  fields: [opplysningspaminnelse],
};

export default ytelseFraEos;
