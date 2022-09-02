import { newSpecPage } from '@stencil/core/testing';
import { MyPage } from './my-page';

describe('my-page', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyPage],
      html: '<my-page></my-page>',
    });
    expect(root).toEqualHtml(`
      <my-page>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-page>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyPage],
      html: `<my-page first="Stencil" last="'Don't call me a framework' JS"></my-page>`,
    });
    expect(root).toEqualHtml(`
      <my-page first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-page>
    `);
  });
});
