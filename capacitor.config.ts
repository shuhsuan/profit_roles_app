import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'come.galaxies.mycoolapp',
  appName: 'A-Choux',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
