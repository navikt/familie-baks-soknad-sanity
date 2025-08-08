import { DokumentNavn, Steg } from '../../typer';
import localeBlockForStegDokument from '../localeBlockForStegDokument';
import sporsmalDokument from '../sporsmalDokument';

const svalbardOppholdModal = [
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_TITTEL_SOKER),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_SPORSMAL_SOKER),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_ANDRE_TEKSTER_SOKER),

  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_TITTEL_BARN),
  sporsmalDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_SPORSMAL_BARN),
  localeBlockForStegDokument(Steg.FELLES, DokumentNavn.MODAL_SVALBARDOPPHOLD_ANDRE_TEKSTER_BARN),
];

export default svalbardOppholdModal;
