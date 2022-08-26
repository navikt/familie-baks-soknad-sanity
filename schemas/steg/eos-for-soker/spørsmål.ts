import sporsmalDokument_old from '../../felles/sporsmalDokument_old';
import sporsmalMedFeilmeldingBlock from '../../felles/sporsmalMedFeilmeldingBlock';
import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../typer';

const spørsmål: StegDokument = {
  ...sporsmalDokument_old,
  steg: Steg.EØS_FOR_SØKER,
  title: dokumentTittel.EOS_FOR_SOKER_SPORSMAL,
  name: DokumentNavn.EOS_FOR_SOKER_SPORSMAL,
  type: SanityTyper.DOCUMENT,
  fields: [
    ...sporsmalMedFeilmeldingBlock,
    {
      name: 'beskrivelse',
      title: 'Beskrivelse av spørsmål',
      description: 'F.eks. dd.mm.åååå under spørsmål om dato. (frivillig)',
      type: CustomSanityTyper.LOCALE_STRING,
    },
  ],
};

export default spørsmål;
