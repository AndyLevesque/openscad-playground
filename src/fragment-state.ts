// Portions of this file are Copyright 2021 Google LLC, and licensed under GPL2+. See COPYING.

import { State } from "./app-state";
import { validateArray, validateBoolean, validateString, validateStringEnum } from "./utils";

export function writeStateInFragment(state: State) {
  window.location.hash = encodeURIComponent(JSON.stringify({
    params: state.params,
    view: state.view
  }));
}
export function readStateFromFragment(): State | null {
  if (window.location.hash.startsWith('#') && window.location.hash.length > 1) {
    try {
      const {params, view} = JSON.parse(decodeURIComponent(window.location.hash.substring(1)));
      return {
        params: {
          sourcePath: validateString(params?.sourcePath),
          source: validateString(params?.source),
          features: validateArray(params?.features, validateString),
        },
        view: {
          layout: {
            mode: validateStringEnum(view?.layout?.mode, ['multi', 'single']),
            focus: validateStringEnum(view?.layout?.focus, ['editor', 'viewer', 'customizer'], s => false),
            editor: validateBoolean(view?.layout['editor']),
            viewer: validateBoolean(view?.layout['viewer']),
            customizer: validateBoolean(view?.layout['customizer']),
          }
        }
      };
    } catch (e) {
      console.error(e);
    }
  }
  return null;
}
