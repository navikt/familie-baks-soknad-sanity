import defaultResolve  from 'part:@sanity/base/document-actions'
import { getExtendedPublishAction } from "./customPublishAction";

export default function resolveDocumentActions(props) {
  return [getExtendedPublishAction(), ...defaultResolve(props)].filter(value => value.name != "PublishAction");
}