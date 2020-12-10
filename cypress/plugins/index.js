/**
 * Configure cypress react unit test
 * https://github.com/bahmutov/cypress-react-unit-test/tree/main/examples/nextjs
 */
import preprocessor from 'cypress-react-unit-test/plugins/next';

export default (on, config) => {
  preprocessor(on, config);
  return config;
};
