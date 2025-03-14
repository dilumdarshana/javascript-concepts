// Create classes/modules that handle one specific concern
// Example: Separate data fetching logic from UI rendering components in React
// In TypeScript: UserService class handles only user operations, while AuthService handles only authentication


// Bad way
type Database = string
type User = { name: string; email: string };

class UserManager {
  constructor(private database: Database) {}
  
  async getUser(id: string) { /* database logic */ }
  async saveUser(user: User) { /* database logic */ }
  validateUserData(user: User) { /* validation logic */ }
  formatUserForAPI(user: User) { /* formatting logic */ }
  notifyUserChanged(user: User) { /* notification logic */ }
}

// Good way
class UserRepository {
  constructor(private database: Database) {}

  async getUser(id: string) { /* database logic */ }

  async saveUser(user: User) { /* database logic */ }
}

class UserValidator {
  validateUserData(user: User) { /* validation logic */ }
}

class UserFormatter {
  formatUserForAPI(user: User) { /* formatting logic */ }
}

class UserNotifier {
  notifyUserChanged(user: User) { /* notification logic */ }
}
