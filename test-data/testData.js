const testData = {
  // Valid user data
  validUser: {
    username: 'testuser6655',
    firstName: 'John',
    lastName: 'Doe',
    email: 'testuser01@example.com',
    password: 'Test@1234',
    confirmPassword: 'Test@1234'
  },

  // Invalid user data for negative tests
  invalidUsers: {
    shortPassword: {
      username: 'shortpassuser',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'shortpass@example.com',
      password: 'short',
      confirmPassword: 'short'
    },
    passwordMismatch: {
      username: 'mismatchuser',
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'mismatch@example.com',
      password: 'Password123!',
      confirmPassword: 'Different123!'
    },
    invalidEmail: {
      username: 'invalidemailuser',
      firstName: 'Eve',
      lastName: 'Brown',
      email: 'invalid-email',
      password: 'ValidPass123!',
      confirmPassword: 'ValidPass123!'
    }
  },

  // Product search data
  products: {
    validSearch: 'laptop',
    invalidSearch: 'nonexistentproductxyz',
    filterCategory: 'electronics'
  },

  // Checkout data
  shippingInfo: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    address: '123 Main Street',
    city: 'Bangalore',
    zip: '560001'
  },

  paymentInfo: {
    validCard: '4111111111111111',   // common Visa test card
    invalidCard: '1234567812345678',
    expiryDate: '12/25',
    cvv: '123'
  }
};

module.exports = testData;
