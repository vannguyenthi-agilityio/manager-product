export const asPopupError = `
import Popup from '@components/Popup';

// Constants
import { POPUP_STATUS } from '@constants';

/**
 * The used to render Error popup component.
 *
 */

<Popup
  status= POPUP_STATUS.ERROR,
  content = 'Lorem ipsum dolor sit amet'
  onClick={onClosePopup} />
`;

export const asPopupWarning = `
import Popup from '@components/Popup';

// Constants
import { POPUP_STATUS } from '@constants';

/**
 * The used to render Warning popup component.
 *
 */

<Popup
  status= POPUP_STATUS.WARNING,
  content = 'Lorem ipsum dolor sit amet'
  onClick={onClosePopup} />
`;

export const asPopupSuccess = `
import Popup from '@components/Popup';

// Constants
import { POPUP_STATUS } from '@constants';

/**
 * The used to render Success popup component.
 *
 */

<Popup
  status= POPUP_STATUS.SUCCESS,
  content = 'Lorem ipsum dolor sit amet'
  onClick={onClosePopup} />
`;
