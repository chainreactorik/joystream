// Copyright 2017-2019 @polkadot/apps authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Routes } from '../types';

import Accounts from '@polkadot/app-accounts/index';

export default ([
  {
    Component: Accounts,
    display: {
      needsApi: []
    },
    i18n: {
      defaultValue: 'My Accounts'
    },
    icon: 'users',
    name: 'accounts'
  }
] as Routes);
