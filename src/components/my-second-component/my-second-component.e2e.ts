import { newE2EPage } from '@stencil/core/testing';

describe('my-second-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-second-component></my-second-component>');
    const element = await page.find('my-second-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-second-component></my-second-component>');
    const component = await page.find('my-second-component');
    const element = await page.find('my-second-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
