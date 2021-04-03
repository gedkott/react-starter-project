import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App.js'

test('loads and displays greeting', function () {
  render(<App />)

  let component = screen.getByText(/hello/i)
  expect(component).toHaveTextContent('Hello');
})