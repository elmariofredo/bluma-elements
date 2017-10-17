import { Component } from "@stencil/core";

@Component({
  tag: 'bu-box',
  styleUrl: 'bu-box.sass'
})
export class BuBox {
  render() {
    return (
      <div class="box">
        <slot />
      </div>
    )
  }
}
