export class TestDataManager {
  static generateRandomEmail() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `test.user.${timestamp}.${random}@example.com`;
  }

  static generateRandomUser() {
    const timestamp = Date.now();
    return {
      firstName: `TestUser${timestamp}`,
      lastName: `LastName${timestamp}`,
      email: this.generateRandomEmail(),
      password: 'TestPassword123!',
      phone: '+1234567890',
      address: {
        street: '123 Test Street',
        city: 'Test City',
        state: 'Test State',
        zipCode: '12345',
        country: 'United States'
      }
    };
  }

  static getTestProducts() {
    return [
      {
        name: 'Test Product 1',
        price: '$29.99',
        category: 'Electronics',
        id: 'test-product-1'
      },
      {
        name: 'Test Product 2',
        price: '$49.99',
        category: 'Clothing',
        id: 'test-product-2'
      }
    ];
  }

  static getInvalidFormData() {
    return {
      invalidEmails: [
        'invalid-email',
        'test@',
        '@example.com',
        'test..test@example.com',
        ''
      ],
      invalidPasswords: [
        '123',
        'password',
        'PASSWORD',
        'Pass1',
        ''
      ],
      invalidPhones: [
        '123',
        'abc-def-ghij',
        '123-456-78901',
        ''
      ]
    };
  }
}