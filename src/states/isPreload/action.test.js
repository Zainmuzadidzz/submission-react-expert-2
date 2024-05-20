/* eslint-disable no-underscore-dangle */
/**
 * Skenario Test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch actions correctly when preload process succeeds
 *  - should dispatch actions correctly when preload process fails
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';

const fakeAuthUser = {
  id: 'user-id-123',
  username: 'testuser',
  email: 'testuser@example.com',
};

const fakeErrorResponse = new Error('Failed to preload data');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    delete api._getOwnProfile;
  });

  it('should dispatch actions correctly when preload process succeeds', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser);

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeAuthUser),
    );
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch actions correctly when preload process fails', async () => {
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    // window.alert = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());

    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    // expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
