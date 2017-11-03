import { Component, Element } from "@stencil/core";

import { MDCRipple } from "@material/ripple";

@Component({
  tag: 'md-button',
  styleUrl: 'md-button.scss',
  shadow: true
})
export class MdButton {


  @Element() host: HTMLElement;

  ripple: any

  componentDidLoad() {
    this.ripple = MDCRipple.attachTo(this.host.shadowRoot!.querySelector('.mdc-button'))
  }

  componentDidUnload() {
    this.ripple.destroy()
  }

  render() {
    return (
      <div class="mdc-button mdc-button--raised mdc-ripple-surface">
        <slot />
      </div>
    )
  }

}
