import React from 'react';
import * as rtl from '@testing-library/React';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

afterEach(rtl.cleanup);

test('Render the app', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.getByText('The Dog Website')
    expect(element).toBeVisible()
})

test('Render count input', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.queryByPlaceholderText('Image Count')
    expect(element).toHaveValue(1)
})