const testContext = require.context('../src', true, /\.spec\.js/);
testContext.keys().forEach(testContext);

const srcContext = require.context('../src', true, /\.vue/);
srcContext.keys().forEach(srcContext);
