import { it, vi } from 'vitest'
import { ContextRender } from '../../__tests__/renderTest'
import TestOfTest from '.'
import { screen } from '@testing-library/dom'
import { expect } from 'vitest'

const oi = vi.fn()

it('should first', () => { 
  ContextRender(<TestOfTest click={oi}/>)
  const button = screen.getByRole('button')
  button.click()
  expect(oi).toHaveBeenCalledTimes(1)
})