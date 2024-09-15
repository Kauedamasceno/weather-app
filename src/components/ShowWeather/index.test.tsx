import { act } from 'react';
import { screen} from '@testing-library/react';
import { describe, expect, it, Mock, vi } from 'vitest';
import ShowWeather from './'; // Ajuste o caminho conforme a sua estrutura de arquivos
import { DateNow } from '../../hooks/useDate';
import { ContextRender } from '../../__tests__/renderTest';

// Mock da função DateNow para retornar um valor previsível
vi.mock('../../hooks/useDate', () => ({

  DateNow: vi.fn(),
}));

// Configurar temporizadores falsos com Vitest
vi.useFakeTimers();

describe('ShowWeather Component', () => {
  it('deve atualizar a data a cada segundo', async () => {
     const mockDateNow = (DateNow as Mock).mockImplementation(() => '2024-09-12 10:00:00');
      
    // Renderizar o componente com o contexto mockado
    ContextRender(<ShowWeather />);

    // Verificar o valor inicial da data
    expect(screen.getByText('2024-09-12 10:00:00')).toBeInTheDocument();

    mockDateNow.mockImplementation(() => '2024-09-12 10:00:01');
    act(() => {
         // Alterar o retorno da função DateNow para simular a atualização da data
         // Esperar até que o componente re-renderize e verifique o novo valor de data
    vi.advanceTimersByTime(1000)
    })
    // Simular o avanço do tempo em 1 segundo
   expect(screen.getByText('2024-09-12 10:00:01')).toBeInTheDocument();
    
  });
});