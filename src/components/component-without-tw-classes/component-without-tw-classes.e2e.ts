import { newE2EPage } from '@stencil/core/testing';

describe('component-without-tw-classes', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<component-without-tw-classes></component-without-tw-classes>');
    const element = await page.find('component-without-tw-classes');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<component-without-tw-classes></component-without-tw-classes>');
    const component = await page.find('component-without-tw-classes');
    const element = await page.find('component-without-tw-classes >>> div');
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
