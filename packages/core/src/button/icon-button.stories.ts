/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit';

ClarityIcons.addIcons(userIcon);

export default {
  title: 'Stories/Icon Button',
  component: 'cds-icon-button',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A0',
    },
  },
};

export function API(args: any) {
  // const invertBackground = boolean('invertBackground', false);
  return html`
    <cds-demo ?inverse=${false} inline-block>
      <cds-icon-button ...="${spreadProps(getElementStorybookArgs(args))}" @click=${() => console.log('click')}>
        <cds-icon shape="user"></cds-icon>
      </cds-icon-button>
    </cds-demo>
  `;
}

/** @website */
export function actions() {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
}

/** @website */
export function status() {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="success"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="warning"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="danger"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button status="danger" disabled><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
}

/** @website */
export function statusOutline() {
  return html`
    <div cds-layout="horizontal gap:sm">
      <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" status="success"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" status="danger"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" disabled><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
}

/** @website */
export function sizes() {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal align-items:left gap:sm">
        <div cds-layout="p-r:sm align:vertical-center"><span cds-text="subsection">Default ('md')</span></div>
        <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
        <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </div>
      <div cds-layout="horizontal align-items:left gap:sm">
        <div cds-layout="p-r:sm align:vertical-center"><span cds-text="subsection">Compact ('sm')</span></div>
        <cds-icon-button size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
        <cds-icon-button action="outline" size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </div>
    </div>
  `;
}

/** @website */
export function block() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-icon-button block><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button block action="outline" size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
}

/** @website */
export function links() {
  return html`
    <div cds-layout="horizontal gap:xs">
      <a href="javascript:void(0)">
        <cds-icon-button><cds-icon shape="user"></cds-icon></cds-icon-button>
      </a>
      <a href="javascript:void(0)">
        <cds-icon-button action="outline"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </a>
      <a href="javascript:void(0)">
        <cds-icon-button size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </a>
      <a href="javascript:void(0)">
        <cds-icon-button action="outline" size="sm"><cds-icon shape="user"></cds-icon></cds-icon-button>
      </a>
    </div>
  `;
}

/** @website */
export function loading() {
  return html`
    <div cds-layout="horizontal gap:sm align-items:bottom">
      <cds-icon-button loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button action="outline" loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
      <cds-icon-button size="sm" loading-state="loading"><cds-icon shape="user"></cds-icon></cds-icon-button>
    </div>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <div cds-layout="vertical gap:sm" cds-theme="dark">
      <div cds-layout="horizontal gap:sm">
        <cds-icon-button aria-label="icon button demo"><cds-icon shape="user"></cds-icon></cds-icon-button>
        <cds-icon-button status="success" aria-label="icon button success demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button status="warning" aria-label="icon button warning demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button status="danger" aria-label="icon button danger demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button status="danger" aria-label="icon button disabled demo" disabled
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-icon-button action="outline" aria-label="icon button outline demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button action="outline" status="success" aria-label="icon button outline success demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button action="outline" status="warning" aria-label="icon button outline warning demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button action="outline" status="danger" aria-label="icon button outline danger demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
        <cds-icon-button action="outline" disabled aria-label="icon button outline disabled demo"
          ><cds-icon shape="user"></cds-icon
        ></cds-icon-button>
      </div>
    </div>
  `;
}

/** @website */
export function customStyles() {
  return html`
    <style>
      .btn-branding {
        --background: #a447bb;
        --border-color: #74178b;
        --border-width: 0.15rem;
        --border-radius: 0.4rem;
        --padding-vertical: 0.9rem 1rem;
        --font-size: 0.9rem;
        --height: 2.4rem;
      }

      .btn-branding:hover {
        --background: #74178b;
      }

      .btn-branding:active {
        --border-color: #44005b;
        --box-shadow-color: #44005b;
      }
    </style>
    <cds-icon-button class="btn-branding"><cds-icon shape="user"></cds-icon></cds-icon-button>
  `;
}
