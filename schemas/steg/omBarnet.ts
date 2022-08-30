import localeBlockForStegDokument from '../felles/localeBlockForStegDokument';
import localeStringForStegDokument from '../felles/localeStringForStegDokument';
import sporsmalDokument from '../felles/sporsmalDokument';
import { DokumentNavn, Steg } from '../typer';

const omBarnet = [
  localeBlockForStegDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_TITTEL),
  localeStringForStegDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SUBTITLER),
  sporsmalDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_SPORSMAL),
  localeBlockForStegDokument(
    Steg.OM_BARNET,
    DokumentNavn.OM_BARNET_OPPFOLGNING_OPPLYSNINGSPAMINNELSE,
  ),
  localeBlockForStegDokument(Steg.OM_BARNET, DokumentNavn.OM_BARNET_ANDRE_TEKSTER),
];

export default omBarnet;
