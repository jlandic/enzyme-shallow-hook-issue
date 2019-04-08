import React from 'react';
import { shallow, mount } from 'enzyme';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  describe('shallow render', () => {
    it('should call callback when shallow rendered', () => {
      const callback = jest.fn();
      shallow(<MyComponent callback={callback} />);
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('mount', () => {
    it('should call callback when mounted', () => {
      const callback = jest.fn();
      mount(<MyComponent callback={callback} />);
      expect(callback).toHaveBeenCalled();
    });
  });
});
