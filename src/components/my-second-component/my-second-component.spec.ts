import { newSpecPage } from '@stencil/core/testing';
import { MySecondComponent } from './my-second-component';

describe('my-second-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MySecondComponent],
      html: '<my-second-component></my-second-component>',
    });
    expect(root).toEqualHtml(`
      <my-second-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-second-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MySecondComponent],
      html: `<my-second-component first="Stencil" last="'Don't call me a framework' JS"></my-second-component>`,
    });
    expect(root).toEqualHtml(`
      <my-second-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-second-component>
    `);
  });
});
