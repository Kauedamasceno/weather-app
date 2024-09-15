import { describe, expect, it } from 'vitest';
import { ContextRender } from '../../__tests__/renderTest';
import Logo from '.';
import { getByRole,screen } from '@testing-library/react';

describe('<Logo/>', () => {
  it("should render logo", () => {
    // Teste de renderização
    ContextRender(<Logo nameLogo='test123'/>)
    const h1 = screen.getByRole('heading', {name: 'test123'})
    expect(h1).toBeInTheDocument()
  })
})