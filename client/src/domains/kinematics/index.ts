/**
 * Domínio: Cinemática (Kinematics)
 * 
 * Módulo educacional sobre o estudo do movimento sem considerar suas causas.
 * Inclui: velocidade, aceleração, MRU, MRUV, movimento circular, queda livre.
 */

import type { DomainModule } from '@/shared/types';

/**
 * Definição completa do domínio de Cinemática
 */
export const kinematicsDomain: DomainModule = {
  id: 'kinematics',
  name: 'Cinemática',
  description: 'Estudo do movimento: velocidade, aceleração e trajetórias',
  icon: 'Gauge', // lucide-react icon
  color: '#3B82F6', // blue-500
  
  theory: {
    topics: [
      // Tópicos serão importados de arquivos separados
    ],
  },
  
  // Módulos opcionais (serão adicionados progressivamente)
  exercises: undefined,
  simulators: undefined,
  calculators: undefined,
  graphs: undefined,
};

// Re-exportar submódulos para facilitar imports
export * from './theory';
export * from './simulators';
export * from './calculators';
export * from './exercises';
export * from './graphs';
