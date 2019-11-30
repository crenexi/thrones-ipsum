import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faListUl,
  faListOl,
  faCode,
  faCopy,
  faSkullCrossbones,
  faIcycles,
  faSackDollar,
  faFireAlt,
  faDagger,
  faDragon,
} from '@fortawesome/pro-duotone-svg-icons';

const buildIconLibrary = () => {
  library.add(
    faListUl,
    faListOl,
    faCode,
    faCopy,
    faSkullCrossbones,
    faIcycles,
    faSackDollar,
    faFireAlt,
    faDagger,
    faDragon,
  );
};

export default { buildIconLibrary };
