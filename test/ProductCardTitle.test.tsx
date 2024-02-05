import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../src/components/ProductCard';
import {product} from '../src/data/product'
import { ProductTitle } from '../src/components/ProductTitle';


describe('it', () => {
  test('render ProductCard', () => {
      const wrapper = renderer.create(
        <ProductCard  product={product}>
          {
            () => {
              return (
                <ProductTitle />
              )
            }
          }
        </ProductCard>
      )

      expect(wrapper).toMatchSnapshot();
  });
});
