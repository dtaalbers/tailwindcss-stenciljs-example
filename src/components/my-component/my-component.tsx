import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
})
export class MyComponent {
  render() {
    return (
      <div class="bg-purple-200 rounded flex justify-center items-center w-36 h-[100px]">
        <p class="text-gray-800">Hello world!</p>
      </div>
    );
  }
}
