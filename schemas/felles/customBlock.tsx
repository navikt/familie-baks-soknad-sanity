import React from 'react';

import { rgba } from 'polished';
import { BlockAnnotationProps } from 'sanity';
import styled from 'styled-components';

import { CustomSanityTyper, EFlettefelt, SanityTyper } from '../typer';

interface FlettefeltProps extends BlockAnnotationProps {
  value: {
    flettefeltVerdi?: string;
    _type: string;
    _key: string;
  };
}

const FlettefeltGammel: React.FC<FlettefeltProps> = props => {
  return (
    <span
      style={{
        backgroundColor: rgba(30, 133, 209, 0.2),
        color: 'black',
        cursor: 'pointer',
      }}
    >
      {props.value.flettefeltVerdi ? props.value.flettefeltVerdi : props.renderDefault(props)}
    </span>
  );
};

const Flettefelt = styled.span`
  background-color: rgba(30, 133, 209, 0.2);
  text-overflow: ellipsis;
  line-height: normal;
  white-space: nowrap;
  max-inline-size: 160px;
  overflow: hidden;
  display: inline-block;
`;

const flettefelter = [
  { title: 'Barnets navn', value: EFlettefelt.BARN_NAVN },
  { title: 'Søkers navn', value: EFlettefelt.SØKER_NAVN },
  { title: 'Ytelse', value: EFlettefelt.YTELSE },
  { title: 'Ytelse i bestemt form', value: EFlettefelt.YTELSE_BESTEMT_FORM },
  { title: 'i/utenfor', value: EFlettefelt.I_UTENFOR },
  {
    title: 'du / den andre forelderen / omsorgspersonen',
    value: EFlettefelt.PERSONTYPE,
  },
  { title: 'Utlandet/Norge', value: EFlettefelt.UTLANDET_NORGE },
  { title: 'Utenlandsk/Norsk', value: EFlettefelt.UTENDLANDSK_NORSK },
  { title: 'Antall', value: EFlettefelt.ANTALL },
  { title: 'Total antall', value: EFlettefelt.TOTAL_ANTALL },
  { title: 'Klokkeslett', value: EFlettefelt.KLOKKESLETT },
  { title: 'Dato', value: EFlettefelt.DATO },
  { title: 'Land', value: EFlettefelt.LAND },
];

const flettefelt = {
  name: CustomSanityTyper.FLETTEFELT,
  type: SanityTyper.OBJECT,
  fields: [
    {
      name: CustomSanityTyper.FLETTEFELT,
      type: SanityTyper.STRING,
      options: {
        list: [...flettefelter],
      },
    },
  ],
  preview: {
    select: {
      flettefelt: CustomSanityTyper.FLETTEFELT,
    },
  },
  components: {
    preview: (props: { flettefelt: EFlettefelt }) => {
      const flettefelt = flettefelter.find(flettefelt => flettefelt.value === props.flettefelt);
      return <Flettefelt>{flettefelt?.title ?? 'Tomt flettefelt'}</Flettefelt>;
    },
  },
};

const customBlock = {
  title: 'Custom block',
  name: CustomSanityTyper.CUSTOM_BLOCK,
  type: SanityTyper.ARRAY,
  of: [
    {
      type: SanityTyper.BLOCK,
      of: [flettefelt],
      marks: {
        annotations: [
          {
            name: 'link',
            type: SanityTyper.OBJECT,
            title: 'Ekstern lenke',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Åpne i ny tab',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
          {
            name: 'flettefelt',
            type: SanityTyper.OBJECT,
            title: 'Flettefelt GAMMEL',
            icon: () => 'F',
            components: {
              annotation: FlettefeltGammel,
            },
            fields: [
              {
                name: 'flettefeltVerdi',
                type: SanityTyper.STRING,
                title: 'Flettefeltverdier',
                validation: Rule => Rule.required().error('Du må velge gyldig flettefelt!'),
                options: {
                  list: [...flettefelter],
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

export default customBlock;
