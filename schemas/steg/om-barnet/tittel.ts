import stegTittelDokument from '../../felles/stegTittelDokument';
import { DokumentNavn, dokumentTittel, StegDokument, Steg, CustomSanityTyper } from '../../typer';

const tittel: StegDokument = {
  ...stegTittelDokument,
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_TITTEL,
  name: DokumentNavn.OM_BARNET_TITTEL,
  type: stegTittelDokument.type,
  fields: [
    ...stegTittelDokument.fields,
    {
      title: 'Subtittel',
      name: 'subtittel',
      type: CustomSanityTyper.LOCALE_BLOCK,
      description: '"Barn 1 av 2" (obligatorisk)',
      validation: rule => rule.required().error('Du må fylle inn subtittel til steget'),
    },
  ],
};

export default tittel;
