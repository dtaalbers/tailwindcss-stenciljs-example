import { newSpecPage } from '@stencil/core/testing';
import { ComponentWithoutTwClasses } from './component-without-tw-classes';

describe('component-without-tw-classes', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ComponentWithoutTwClasses],
      html: '<component-without-tw-classes></component-without-tw-classes>',
    });
    expect(root).toEqualHtml(`
      <component-without-tw-classes>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </component-without-tw-classes>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ComponentWithoutTwClasses],
      html: `<component-without-tw-classes first="Stencil" last="'Don't call me a framework' JS"></component-without-tw-classes>`,
    });
    expect(root).toEqualHtml(`
      <component-without-tw-classes first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </component-without-tw-classes>
    `);
  });
});
