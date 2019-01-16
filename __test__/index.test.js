
describe('dataLayer', () => {
  describe('Standard safe dataLayer manipulation', () => {
    beforeEach(() => {
      delete window.dataLayer;
    });

    function safeInitialization() {
      window.dataLayer = window.dataLayer || [];
    }

    test('Initializes when it does not yet exist', () => {
      
    });

    test('Maintains previous data ', () => {
      
    });
  });
  describe('Unsafe dataLayer manipulation', () => {
    test('Overwriting the dataLayer adds to current dataLayer', () => {
      
    });
  });
});