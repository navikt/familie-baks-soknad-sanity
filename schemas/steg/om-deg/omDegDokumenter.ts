import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import sporsmalDokument from '../../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../../typer';

const omDegDokumenter = [
  localeblock(Steg.OM_DEG, DokumentNavn.OM_DEG_TITTEL),
  localestring(Steg.OM_DEG, DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
  sporsmalDokument(Steg.OM_DEG, DokumentNavn.OM_DEG_SPORSMAL),
];

export default omDegDokumenter;
