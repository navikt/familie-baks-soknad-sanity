import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import { DokumentNavn, Steg } from '../../typer';

const velgBarnDokumenter = [
  localeblock(Steg.VELG_BARN, DokumentNavn.VELG_BARN_TITTEL),
  localeblock(Steg.VELG_BARN, DokumentNavn.VELG_BARN_LENKER),
  localestring(Steg.VELG_BARN, DokumentNavn.VELG_BARN_ANDRE_TEKSTER),
];

export default velgBarnDokumenter;
