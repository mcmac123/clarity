/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/select/register.js';
import { html } from 'lit';
import { getElementStorybookArgs, spreadProps } from '@cds/core/internal';

export default {
  title: 'Stories/Select',
  component: 'cds-select',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A891',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-select ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>textarea</label>
      <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-select>
  `;
}

/** @website */
export function select() {
  return html`
    <cds-select control-width="shrink">
      <label>textarea</label>
      <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
      <cds-control-message>message text</cds-control-message>
    </cds-select>
  `;
}

/** @website */
export function vertical() {
  return html`
    <cds-form-group layout="vertical">
      <cds-select layout="vertical">
        <label>label</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>

      <cds-select layout="vertical">
        <label>disabled</label>
        <select disabled>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>disabled message</cds-control-message>
      </cds-select>

      <cds-select layout="vertical" status="error">
        <label>error</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-select>

      <cds-select layout="vertical" status="success">
        <label>success</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-select>
    </cds-form-group>
  `;
}

/** @website */
export function horizontal() {
  return html`
    <cds-form-group layout="horizontal">
      <cds-select layout="horizontal">
        <label>label</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal">
        <label>disabled</label>
        <select disabled>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>disabled message</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal" status="error">
        <label>error</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal" status="success">
        <label>success</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-select>
    </cds-form-group>
  `;
}

/** @website */
export function compact() {
  return html`
    <cds-form-group layout="compact">
      <cds-select layout="compact">
        <label>label</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>

      <cds-select layout="compact">
        <label>disabled</label>
        <select disabled>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>disabled message</cds-control-message>
      </cds-select>

      <cds-select layout="compact" status="error">
        <label>error</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-select>

      <cds-select layout="compact" status="success">
        <label>success</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-select>
    </cds-form-group>
  `;
}

/** @website */
export function multiple() {
  return html`
    <cds-select>
      <label>label</label>
      <select multiple>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        <option>Option Four</option>
        <option>Option Five</option>
      </select>
      <cds-control-message>message text</cds-control-message>
    </cds-select>
  `;
}

/** @website */
export function size() {
  return html`
    <cds-select>
      <label>label</label>
      <select size="5">
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        <option>Option Four</option>
        <option>Option Five</option>
        <option>Option Six</option>
      </select>
      <cds-control-message>message text</cds-control-message>
    </cds-select>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-select layout="horizontal">
        <label>label</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal">
        <label>disabled</label>
        <select disabled>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>disabled message</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal" status="error">
        <label>error</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-select>

      <cds-select layout="horizontal" status="success">
        <label>success</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-select>
    </cds-form-group>
  `;
}
