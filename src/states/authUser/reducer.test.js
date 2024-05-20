/**
 * Test scenarios for authUserReducer:
 *
 * - authUserReducer function
 *  - should return null as the initial state when no action is provided
 *  - should set authUser when receiving SET_AUTH_USER action
 *  - should unset authUser when receiving UNSET_AUTH_USER action
 *  - should return current state for unknown action types
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer', () => {
  it('should return null as the initial state when no action is provided', () => {
    // Arrange
    const initialState = null;

    // Act
    const state = authUserReducer();

    // Assert
    expect(state).toEqual(initialState);
  });

  it('should set authUser when receiving SET_AUTH_USER action', () => {
    // Arrange
    const initialState = null;
    const authUser = {
      id: 'user-id-123',
      username: 'testuser',
      email: 'testuser@example.com',
    };
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: authUser,
      },
    };

    // Act
    const state = authUserReducer(initialState, action);

    // Assert
    expect(state).toEqual(authUser);
  });

  it('should unset authUser when receiving UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = {
      id: 'user-id-123',
      username: 'testuser',
      email: 'testuser@example.com',
    };
    const action = {
      type: ActionType.UNSET_AUTH_USER,
    };

    // Act
    const state = authUserReducer(initialState, action);

    // Assert
    expect(state).toEqual(null);
  });

  it('should return current state for unknown action types', () => {
    // Arrange
    const initialState = {
      id: 'user-id-123',
      username: 'testuser',
      email: 'testuser@example.com',
    };
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // Act
    const state = authUserReducer(initialState, action);

    // Assert
    expect(state).toEqual(initialState);
  });
});
