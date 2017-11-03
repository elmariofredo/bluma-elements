import { Component, Element } from "@stencil/core";

// TODO create type definitions
import { MDCRipple } from "@material/ripple";

@Component({
  tag: 'md-button',
  styleUrl: 'md-button.scss'
})
export class MdButton {


  @Element() host: HTMLElement;

  componentDidLoad() {

    MDCRipple.attachTo(this.host.firstElementChild)
  }

  render() {
    return (
      <div class="mdc-button mdc-button--raised mdc-ripple-surface">
        <slot />
      </div>
    )
  }

}
