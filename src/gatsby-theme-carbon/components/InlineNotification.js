/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

const InlineNotification = ({text}) => (
  <div data-notification class="inline-notification inline-notification--info" role="alert" style="">
    <div class="inline-notification__details" >
      <svg class="inline-notification__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
      </svg>
      <div class="inline-notification__text-wrapper">`
        <p class="inline-notification__text"> ${this.text}</p>
      </div>
    </div>
  </div>
)

export default InlineNotification
