import { CustomSanityTyper, Field } from '../../../typer';

const opplysningspaminnelse: Field = {
  name: 'opplysningsPaminnelse',
  title: 'Påminnelse om hva som er opplyst i om barna',
  description: 'F.eks. "Du har opplyst at..." (obligatorisk)',
  type: CustomSanityTyper.LOCALE_BLOCK,
  options: {
    collapsable: true,
    collapsed: true,
  },
  validation: Rule => Rule.required().error('Du må fylle inn tekst for opplysningspåminnelse'),
};

export default opplysningspaminnelse;
