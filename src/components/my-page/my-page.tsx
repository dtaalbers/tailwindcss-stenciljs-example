import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-page',
  styleUrl: 'my-page.scss',
})
export class MyPage {
  render() {
    return (
      <div class="flex h-full w-full justify-center items-center">
        <my-component></my-component>
      </div>
    );
  }
}
