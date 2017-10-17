import { Component, Prop } from "@stencil/core";
import { addStyles } from "../../helpers";

@Component({
  tag: 'bu-button',
  styleUrl: 'bu-button.sass'
})
export class BuButton {

  @Prop() type: string
  @Prop() value: string
  @Prop() disabled: boolean = false

  @Prop() color: string
  @Prop() size: string
  @Prop() outlined: boolean
  @Prop() inverted: boolean
  @Prop() hovered: boolean
  @Prop() focused: boolean
  @Prop() active: boolean
  @Prop() loading: boolean

  render() {

    const modifiers = [
      this.color,
      this.size,
      this.outlined ? 'outlined' : undefined,
      this.inverted ? 'inverted' : undefined,
      this.hovered ? 'hovered' : undefined,
      this.focused ? 'focused' : undefined,
      this.active ? 'active' : undefined,
      this.loading ? 'loading' : undefined,
    ]

    return (
      <button
        type={this.type}
        value={this.value}
        disabled={this.disabled}
        class={addStyles('button', modifiers)}
      >
        <slot />
      </button>
    )
  }
}
