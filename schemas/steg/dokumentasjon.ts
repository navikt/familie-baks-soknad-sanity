import localeblock from '../felles/localeblock';
import localestring from '../felles/localestring';
import { DokumentNavn, Steg } from '../typer';

const dokumentasjon = [
  localeblock(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_TITTEL),
  localeblock(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_INFO),
  localeblock(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_TEKST_BLOKKER),
  localestring(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_SCANNING_GUIDE_ENKLE_TEKSTER),
  localestring(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_KNAPPER_OG_CHECKBOX),
  localeblock(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_VEDLEGG_TITTEL),
  localeblock(Steg.DOKUMENTASJON, DokumentNavn.DOKUMENTASJON_VEDLEGG_BESKRIVELSE),
];

export default dokumentasjon;
