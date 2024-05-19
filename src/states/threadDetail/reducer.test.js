/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * Test scenarios for threadDetailReducer:
 *
 * - threadDetailReducer function
 *  - should return the initial state when given an unknown action
 *  - should return the thread detail when given the RECEIVE_THREAD_DETAIL action
 *  - should return the thread detail with the updated upVotesBy array when given the UP_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with the updated downVotesBy array when given the DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with the neutralized votes when given the NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return the thread detail with the new comment when given the CREATE_COMMENT action
 *  - should return the thread detail with the upvoted comment when given the UP_VOTE_COMMENT_DETAIL action
 *  - should return the thread detail with the downvoted comment when given the DOWN_VOTE_COMMENT_DETAIL action
 *  - should return the thread detail with the neutralized votes on comment when given the NEUTRALIZE_VOTE_COMMENT_DETAIL action
 *
 */

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('threadDetailReducer', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    const state = threadDetailReducer(initialState, action);
    expect(state).toEqual(initialState);
  });
  // Test for RECEIVE_THREAD_DETAIL action
  it('should return the thread detail when given the RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null;
    const threadDetail = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: { threadDetail },
    };
    const state = threadDetailReducer(initialState, action);
    expect(state).toEqual(threadDetail);
  });

  // Test for UP_VOTE_THREAD_DETAIL action
  it('should return the thread detail with the updated upVotesBy array when given the UP_VOTE_THREAD_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: { userId: 'user-1' }, // Example payload
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      upVotesBy: ['user-1'],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });

  it('should return the thread detail with the updated downVotesBy array when given the DOWN_VOTE_THREAD_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: { userId: 'user-1' }, // Example payload
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      downVotesBy: ['user-1'],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });

  // Test for NEUTRALIZE_VOTE_THREAD_DETAIL action
  it('should return the thread detail with the neutralized votes when given the NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['user-1', 'user-2'],
      downVotesBy: ['user-3'],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
      payload: { userId: 'user-1' }, // Example payload
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      upVotesBy: ['user-2'],
      downVotesBy: ['user-3'],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });
  it('should return the thread detail with the added comment when given the CREATE_COMMENT action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    // Define action
    const action = {
      type: ActionType.CREATE_COMMENT,
      payload: {
        comment: {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-22T07:00:00.000Z',
          owner: {
            id: 'users-2',
            name: 'Jane Doe',
            avatar: 'https://generated-image-url2.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      comments: [action.payload.comment],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });

  // Test for UP_VOTE_COMMENT_DETAIL action
  it('should return the thread detail with the upvoted comment when given the UP_VOTE_COMMENT_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.UP_VOTE_COMMENT_DETAIL,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
        },
      ],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });
  it('should return the thread detail with the downvoted comment when given the DOWN_VOTE_COMMENT_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.DOWN_VOTE_COMMENT_DETAIL,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [action.payload.userId],
        },
      ],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });

  // Test for NEUTRALIZE_VOTE_COMMENT_DETAIL action
  it('should return the thread detail with the neutralized votes for a comment when given the NEUTRALIZE_VOTE_COMMENT_DETAIL action', () => {
    // Define initial state
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['user-1', 'user-2'],
          downVotesBy: ['user-3'],
        },
      ],
    };

    // Define action
    const action = {
      type: ActionType.NEUTRALIZE_VOTE_COMMENT_DETAIL,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Execute the reducer
    const nextState = threadDetailReducer(initialState, action);

    // Define the expected state
    const expectedState = {
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: ['user-2'],
          downVotesBy: ['user-3'],
        },
      ],
    };

    // Verify the result
    expect(nextState).toEqual(expectedState);
  });
});
