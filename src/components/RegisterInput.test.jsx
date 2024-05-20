/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/**
 * Skenario Testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import {
  describe, it, expect, vi, afterEach,
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByLabelText('Username');

    // Action
    await userEvent.type(nameInput, 'nametest');

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByLabelText('Email address');

    // Action
    await userEvent.type(emailInput, 'emailtest@example.com');

    // Assert
    expect(emailInput).toHaveValue('emailtest@example.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByLabelText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByLabelText('Username');
    const emailInput = await screen.getByLabelText('Email address');
    const passwordInput = await screen.getByLabelText('Password');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    await userEvent.type(nameInput, 'nametest');
    await userEvent.type(emailInput, 'emailtest@example.com');
    await userEvent.type(passwordInput, 'passwordtest');
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toHaveBeenCalledWith({
      name: 'nametest',
      email: 'emailtest@example.com',
      password: 'passwordtest',
    });
  });
});
