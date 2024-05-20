/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * Test scenarios for ThreadInput component:
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle description typing correctly
 *   - should call addThread function when submit button is clicked with correct values
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

import ThreadInput from './ThreadInput';

expect.extend(matchers);

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByLabelText('Judul');

    // Action
    await userEvent.type(titleInput, 'Test Title');

    // Assert
    expect(titleInput).toHaveValue('Test Title');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByLabelText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'Test Category');

    // Assert
    expect(categoryInput).toHaveValue('Test Category');
  });

  it('should handle description typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const descriptionInput = await screen.getByLabelText('Deskripsi');

    // Action
    await userEvent.type(descriptionInput, 'Test Description');

    // Assert
    expect(descriptionInput).toHaveValue('Test Description');
  });

  it('should call addThread function when submit button is clicked with correct values', async () => {
    // Arrange
    const mockAddThread = vi.fn();
    render(<ThreadInput addThread={mockAddThread} />);
    const titleInput = await screen.getByLabelText('Judul');
    const categoryInput = await screen.getByLabelText('Kategori');
    const descriptionInput = await screen.getByLabelText('Deskripsi');

    // Action
    await userEvent.type(titleInput, 'Test Title');
    await userEvent.type(categoryInput, 'Test Category');
    await userEvent.type(descriptionInput, 'Test Description');
    const submitButton = await screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    // Assert
    expect(mockAddThread).toHaveBeenCalledWith(
      'Test Title',
      'Test Description',
      'Test Category',
    );
  });
});
