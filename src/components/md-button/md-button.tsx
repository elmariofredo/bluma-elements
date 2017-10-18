import { Component } from "@stencil/core";

@Component({
  tag: 'md-button',
  styleUrl: 'md-button.scss'
})
export class MdButton {

  render() {
    return (
      <div class="mdc-button mdc-button--raised">
        <slot />
      </div>
    )
  }

}
