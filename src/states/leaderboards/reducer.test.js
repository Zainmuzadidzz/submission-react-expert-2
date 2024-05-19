/**
 * Test scenarios for leaderboardsReducer:
 *
 * - leaderboardsReducer function
 *  - should return the initial state when no action is provided
 *  - should return the leaderboards when receiving RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer', () => {
  it('should return the initial state when no action is provided', () => {
    // Arrange
    const initialState = [];

    // Act
    const state = leaderboardsReducer(initialState);

    // Assert
    expect(state).toEqual(initialState);
  });

  it('should return the leaderboards when receiving RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
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
        ],
      },
    };

    // Act
    const state = leaderboardsReducer(initialState, action);

    // Assert
    expect(state).toEqual(action.payload.leaderboards);
  });
});
