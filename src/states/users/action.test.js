/* eslint-disable no-alert */
/**
 * Test scenarios for asyncRegisterUser thunk:
 *
 * - asyncRegisterUser function
 *  - should handle user registration successfully
 *  - should handle user registration failure
 */

import {
  describe, it, vi, expect,
} from 'vitest';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
};

const fakeErrorResponse = new Error('Failed to register user');

describe('asyncRegisterUser thunk', () => {
  it('should handle user registration successfully', async () => {
    // Mocking successful registration
    api.register = () => Promise.resolve();

    await asyncRegisterUser(mockUser)();

    // No error should be thrown
  });

  it('should handle user registration failure', async () => {
    // Mocking failed registration
    api.register = () => Promise.reject(fakeErrorResponse);
    window.alert = vi.fn();

    await asyncRegisterUser(mockUser)();

    // Assertion
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
