/* eslint-disable no-alert */
/**
 * Test scenarios for asyncreceiveLeaderboardsActionCreator thunk:
 *
 * - asyncreceiveLeaderboardsActionCreator function
 *  - should dispatch actions correctly when data fetching succeeds
 *  - should dispatch actions and call alert correctly when data fetching fails
 */

import {
  describe, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncreceiveLeaderboardsActionCreator,
  receiveLeaderboardsActionCreator,
} from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Failed to fetch leaderboards');

describe('asyncreceiveLeaderboardsActionCreator thunk', () => {
  it('should dispatch actions correctly when data fetching succeeds', async () => {
    // Mocking successful API call
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    const dispatch = vi.fn();

    await asyncreceiveLeaderboardsActionCreator()(dispatch);

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch actions and call alert correctly when data fetching fails', async () => {
    // Mocking failed API call
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncreceiveLeaderboardsActionCreator()(dispatch);

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
