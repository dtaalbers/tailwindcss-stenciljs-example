import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-page',
  styleUrl: 'my-page.scss',
})
export class MyPage {
  render() {
    return (
      <div class="flex h-full w-full flex-col justify-center items-center">
        <my-component></my-component>
        <my-second-component></my-second-component>
        <my-third-component></my-third-component>
      </div>
    );
  }
}
