export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@pages/(.*)': '<rootDir>/src/pages/index',
    '^@themes/(.*)': '<rootDir>/src/themes/$1',
    '^@constants': '<rootDir>/src/constants/index',
    '^@contexts/(.*)': '<rootDir>/src/contexts/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@assets': '<rootDir>/src/assets',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@stores/(.*)': '<rootDir>/src/stores/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: ['<rootDir>/src/**/*.test.{tsx,ts}', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}'],
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/**/index.tsx', '<rootDir>/src/**/__tests__/*.test.{tsx,ts}', '!src/**/*.d.ts']
};
