import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Setup fetch mock
global.fetch = vi.fn();

// Setup matchMedia mock
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
