import {
  CustomSanityTyper,
  DokumentNavn,
  dokumentTittel,
  SanityTyper,
  Steg,
  StegDokument,
} from '../../../typer';

const utenlandsopphold: StegDokument = {
  steg: Steg.OM_BARNET,
  title: dokumentTittel.OM_BARNET_UTENLANDSOPPHOLD,
  name: DokumentNavn.OM_BARNET_UTENLANDSOPPHOLD,
  type: SanityTyper.DOCUMENT,
  fields: [
    {
      name: 'opplysningsPaminnelse',
      title: 'Påminnelse om hva som er opplyst i om barna',
      description: 'F.eks. "Du har opplyst at..." (obligatorisk)',
      type: CustomSanityTyper.LOCALE_BLOCK,
      validation: Rule => Rule.required().error('Du må fylle inn tekst for opplysningspåminnelse'),
    },
  ],
};

export default utenlandsopphold;
