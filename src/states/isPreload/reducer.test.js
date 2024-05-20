/**
 * Test scenarios for isPreloadReducer:
 *
 * - isPreloadReducer function
 *  - should return the initial state when no action is provided
 *  - should set isPreload to true when receiving SET_IS_PRELOAD action with true payload
 *  - should set isPreload to false when receiving SET_IS_PRELOAD action with false payload
 *  - should return current state for unknown action types
 */

import { describe, it, expect } from 'vitest';
import isPreloadReducer from './reducer';
import { ActionType } from './action';

describe('isPreloadReducer', () => {
  it('should return the initial state when no action is provided', () => {
    // Arrange
    const initialState = true;

    // Act
    const state = isPreloadReducer(initialState);

    // Assert
    expect(state).toEqual(initialState);
  });

  it('should set isPreload to true when receiving SET_IS_PRELOAD action with true payload', () => {
    // Arrange
    const initialState = false;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: true,
      },
    };

    // Act
    const state = isPreloadReducer(initialState, action);

    // Assert
    expect(state).toEqual(true);
  });

  it('should set isPreload to false when receiving SET_IS_PRELOAD action with false payload', () => {
    // Arrange
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    // Act
    const state = isPreloadReducer(initialState, action);

    // Assert
    expect(state).toEqual(false);
  });

  it('should return current state for unknown action types', () => {
    // Arrange
    const initialState = true;
    const action = {
      type: 'UNKNOWN_ACTION',
    };

    // Act
    const state = isPreloadReducer(initialState, action);

    // Assert
    expect(state).toEqual(initialState);
  });
});
