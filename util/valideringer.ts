import groq from 'groq';
import client from 'part:@sanity/base/client';

const førsteTegnErLitenBokstav = (tekst: string): true | string =>
  RegExp(/^[a-zæøå].*/).test(tekst)
    ? true
    : 'Første tegn i feltet kan ikke være tall eller stor bokstav.';

const kunBokstaverOgTallUtenÆØÅ = (tekst: string): true | string =>
  RegExp(/^[a-z0-9]+$/i).test(tekst)
    ? true
    : 'Feltet kan kun bestå av tall eller boksaver (ikke æ, ø, å).';

const API_NAME_MAX_LENGTH = 70;

export const maskinnavnValideringer = Rule => [
  Rule.required().error('Feltet må settes'),
  Rule.required().custom(kunBokstaverOgTallUtenÆØÅ),
  Rule.required().custom(førsteTegnErLitenBokstav),
  Rule.required()
    .max(API_NAME_MAX_LENGTH)
    .error(`Feltet kan være på maksimalt ${API_NAME_MAX_LENGTH} tegn.`),
];

export const apiNavnValideringer = (Rule, type) => [
  ...maskinnavnValideringer(Rule),
  Rule.custom(async (value, context) => {
    const erUnik = await erUniktApiNavn(type, value, context);
    console.log(erUnik);
    if (!erUnik) return 'Apinavnet er ikke unikt.';
    return true;
  }),
];

const erUniktApiNavn = (type, apiNavn, context) => {
  const { document } = context;

  const id = document._id.replace(/^drafts\./, '');

  const params = {
    draft: `drafts.${id}`,
    published: id,
    type,
    apiNavn,
  };

  const query = groq`!defined(*[
    !(_id in [$draft, $published]) &&
    api_navn == $apiNavn
  ][0]._id)`;

  return client.withConfig({ apiVersion: '2022-07-04' }).fetch(query, params);
};
