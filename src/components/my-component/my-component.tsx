import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
})
export class MyComponent {
  render() {
    return (
      <div class="bg-red-400 rounded-sm flex justify-center items-center w-36 h-[100px]">
        <p class="text-red-900">Hello, World!</p>
      </div>
    );
  }
}
