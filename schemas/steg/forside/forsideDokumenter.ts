import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import { DokumentNavn, Steg } from '../../typer';

const forsideDokumenter = [
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_VEILEDERHILSEN),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_TITTEL),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_SPRAKVELGER),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_PUNKTLISTE),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_BRODTEKST),
  localestring(Steg.FORSIDE, DokumentNavn.FORSIDE_BEKREFTELSESBOKS_ANDRE_TEKSTER),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_PERSONOPPLYSNINGSLENKE),
  localeblock(Steg.FORSIDE, DokumentNavn.FORSIDE_MELLOMLAGRET_ALERT),
];

export default forsideDokumenter;
