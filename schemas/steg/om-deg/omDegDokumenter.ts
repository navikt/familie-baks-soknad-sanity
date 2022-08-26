import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import { DokumentNavn, Steg } from '../../typer';
import spørsmål from './spørsmål';

const omDegDokumenter = [
  localeblock(Steg.OM_DEG, DokumentNavn.OM_DEG_TITTEL),
  localestring(Steg.OM_DEG, DokumentNavn.OM_DEG_PERSONOPPLYSNINGER),
  spørsmål,
];

export default omDegDokumenter;
