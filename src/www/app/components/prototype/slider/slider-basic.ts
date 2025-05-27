import { Div, h } from '@/www/utils/dom';
import { DocCode, HighlightRule } from '@/www/components/doc-component';

export default class SliderBasic extends DocCode {
  protected _code = `<prototype-slider default-value="50" min="0" max="100" step="1">
  <prototype-slider-track>
    <prototype-slider-range />
    <prototype-slider-thumb />
  </prototype-slider-track>
</prototype-slider>`;

  protected _highlightRules: HighlightRule[] = [];

  protected _preview = () => {
    const slider = h(
      'prototype-slider',
      {
        'default-value': '50',
        'min': '0',
        'max': '100',
        'step': '1',
        'class': 'block',
      },
      [
        h(
          'prototype-slider-track',
          {
            'style':
              'position: relative; width: 300px; height: 0.5rem; overflow: hidden; border-radius: 9999px; background: var(--secondary);',
          },
          [
            h('prototype-slider-range', {
              'class': 'absolute h-full bg-primary',
            }),
            h('prototype-slider-thumb', {
              'class':
                'block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            }),
          ]
        ),
      ]
    );

    return Div({ class: 'flex flex-col items-center justify-center p-10 gap-4' }, [slider]);
  };
}

customElements.define('slider-basic', SliderBasic);
