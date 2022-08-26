import localeblock from '../felles/localeblock';
import localestring from '../felles/localestring';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const omBarnet = [
  localeblock(Steg.OM_BARNET, DokumentNavn.OM_BARNET_TITTEL),
  localestring(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SUBTITLER),
  sporsmalDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SPORSMAL),
  localeblock(Steg.OM_BARNET, DokumentNavn.OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE),
  localeblock(Steg.OM_BARNET, DokumentNavn.OM_BARNET_ANDRE_TEKSTER),
];

export default omBarnet;
