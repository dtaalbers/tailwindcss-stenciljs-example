import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-without-tw-classes',
  styleUrl: 'component-without-tw-classes.scss',
})
export class ComponentWithoutTwClasses {
  render() {
    return <div></div>;
  }
}
