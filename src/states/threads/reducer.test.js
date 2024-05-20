/* eslint-disable max-len */
/**
 * Test scenarios for threadsReducer:
 *
 * - threadsReducer function
 *  - should return the initial state when given an unknown action
 *  - should return the threads when given the RECEIVE_THREADS action
 *  - should return the threads with the new thread when given the ADD_THREAD action
 *  - should return the threads with the updated upVotesBy array when given the UP_VOTE_THREAD action
 *  - should return the threads with the updated downVotesBy array when given the DOWN_VOTE_THREAD action
 *  - should return the threads with the neutralized votes when given the NEUTRALIZE_VOTE_THREAD action
 *
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadsReducer', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    const state = threadsReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return the threads when given the RECEIVE_THREADS action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };
    const state = threadsReducer(initialState, action);
    expect(state).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given the ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };
    const state = threadsReducer(initialState, action);
    expect(state).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the upvoted thread when given by UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // Action: Upvote thread
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the updated downVotesBy array when given the DOWN_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };
    const nextState = threadsReducer(initialState, action);

    // Assert: Verify downvote
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the neutralized votes when given the NEUTRALIZE_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD,
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };
    // Action: Neutralize vote thread
    const nextState = threadsReducer(initialState, action);

    // Assert: Verify neutralize vote
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});
