import localeblock from '../../felles/localeblock';
import localestring from '../../felles/localestring';
import sporsmalDokument from '../../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../../typer';
import adopsjon from './oppfolgning/adopsjon';
import barnehageplass from './oppfolgning/barnehageplass';
import fosterbarn from './oppfolgning/fosterbarn';
import institusjon from './oppfolgning/institusjon';
import utenlandsopphold from './oppfolgning/utenlandsopphold';
import ytelseFraEos from './oppfolgning/ytelseFraEos';

const omBarnetDokumenter = [
  localeblock(Steg.OM_BARNET, DokumentNavn.OM_BARNET_TITTEL),
  localestring(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SUBTITLER),
  sporsmalDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SPORSMAL),
  adopsjon,
  barnehageplass,
  fosterbarn,
  institusjon,
  utenlandsopphold,
  ytelseFraEos,
];

export default omBarnetDokumenter;
