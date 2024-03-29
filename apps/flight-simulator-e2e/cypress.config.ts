import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run flight-simulator:start' },
      ciWebServerCommand: 'nx run flight-simulator:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
