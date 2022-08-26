import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import { DokumentNavn, Steg } from '../../typer';

const oppsummeringDokumenter = [
  localeblock(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_TITTEL),
  localestring(Steg.OPPSUMMERING, DokumentNavn.OPPSUMMERING_ANDRE_TEKSTER),
];

export default oppsummeringDokumenter;
