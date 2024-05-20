/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/**
 * Skenario Testing
 *
 * - ThreadsCommentInput component
 *   - should handle comment typing correctly
 *   - should call addComment function when submit button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadsCommentInput from './ThreadsCommentInput';

expect.extend(matchers);

describe('ThreadsCommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // Arrange
    const mockAddComment = vi.fn();
    render(<ThreadsCommentInput addComment={mockAddComment} />);
    const commentInput = await screen.getByRole('textbox');

    // Action
    await userEvent.type(commentInput, 'This is a test comment');

    // Assert
    expect(commentInput).toHaveValue('This is a test comment');
  });

  it('should call addComment function when submit button is clicked', async () => {
    // Arrange
    const mockAddComment = vi.fn();
    render(<ThreadsCommentInput addComment={mockAddComment} />);
    const commentInput = await screen.getByRole('textbox');
    const submitButton = await screen.getByRole('button', { name: 'Submit' });

    // Action
    await userEvent.type(commentInput, 'This is a test comment');
    await userEvent.click(submitButton);

    // Assert
    expect(mockAddComment).toHaveBeenCalledWith('This is a test comment');
  });
});
