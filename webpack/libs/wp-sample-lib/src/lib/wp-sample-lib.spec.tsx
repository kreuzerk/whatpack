import { render } from '@testing-library/react';

import WpSampleLib from './wp-sample-lib';

describe('WpSampleLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WpSampleLib />);
    expect(baseElement).toBeTruthy();
  });
});
