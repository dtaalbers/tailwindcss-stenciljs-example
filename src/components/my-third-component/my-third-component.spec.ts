import { newSpecPage } from '@stencil/core/testing';
import { MyThirdComponent } from './my-third-component';

describe('my-third-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyThirdComponent],
      html: '<my-third-component></my-third-component>',
    });
    expect(root).toEqualHtml(`
      <my-third-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-third-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyThirdComponent],
      html: `<my-third-component first="Stencil" last="'Don't call me a framework' JS"></my-third-component>`,
    });
    expect(root).toEqualHtml(`
      <my-third-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-third-component>
    `);
  });
});
