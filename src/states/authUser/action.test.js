/* eslint-disable no-alert */
/**
 * Test scenarios for asyncSetAuthUser and asyncUnsetAuthUser thunks:
 *
 * - asyncSetAuthUser function
 *  - should handle successful login and set authenticated user
 *  - should handle login failure
 * - asyncUnsetAuthUser function
 *  - should handle unset authenticated user
 */

import {
  describe, it, vi, expect,
} from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
} from './action';

const mockCredentials = {
  email: 'testuser@example.com',
  password: 'password123',
};

const fakeToken = 'fakeToken';
const fakeAuthUser = {
  id: 'user-id-123',
  username: 'testuser',
  email: 'testuser@example.com',
};

const fakeErrorResponse = new Error('Failed to login');

describe('asyncSetAuthUser and asyncUnsetAuthUser thunks', () => {
  it('should handle successful login and set authenticated user', async () => {
    // Mocking successful login and user profile retrieval
    api.login = () => Promise.resolve(fakeToken);
    api.putAccessToken = vi.fn();
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser);

    const dispatch = vi.fn();

    await asyncSetAuthUser(mockCredentials)(dispatch);

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeToken);
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeAuthUser),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle login failure', async () => {
    // Mocking failed login
    api.login = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncSetAuthUser(mockCredentials)(dispatch);

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle unset authenticated user', async () => {
    // Mocking successful unset of authenticated user
    api.putAccessToken = vi.fn();

    const dispatch = vi.fn();

    await asyncUnsetAuthUser()(dispatch);

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    expect(api.putAccessToken).toHaveBeenCalledWith('');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
