// Depend on abstractions, not concrete implementations

//// Example 01
class DatabaseConnection {
  connect(): void {
    console.log('Connecting to database');
  }
}

// Bad way
class UserRepository {
  private databaseConnection = new DatabaseConnection();

  getAllUsers(): void {
    this.databaseConnection.connect();
    // ...
  }
}

// Good way
class MyUserRepository {
  constructor(private connection: DatabaseConnection) {}
  getAllUsers(): void {
    this.connection.connect();
    // ...
  }
  getUserById(id: number): void {
    this.connection.connect();
    // ...
  }
}

const myDatabase = new DatabaseConnection();

// Bad way
const userRepository = new UserRepository();
userRepository.getAllUsers();

// Good way
const myRepository = new MyUserRepository(myDatabase);
myRepository.getAllUsers();


//// Example 02

// Good way
interface MessageService {
  sendMessage(message: string, to: string): void;
}

class EmailService implements MessageService {
  sendMessage(message: string, to: string): void {
    console.log(`Sending email: ${message} to ${to}`);
  }
}

class SMSService implements MessageService {
  sendMessage(message: string, to: string): void {
    console.log(`Sending SMS: ${message} to ${to}`);
  }
}

class UserNotifire {
  constructor(private messageService: MessageService) {}

  notifyUser(user: { contact: string; name: string }, message: string): void {
    this.messageService.sendMessage(message, user.contact)
  }
}

// usage
const emailNotifire = new UserNotifire(new EmailService());
emailNotifire.notifyUser({ contact: 'user@example.com', name: 'John Doe' }, 'Hello, John!');

const smsNotifire = new UserNotifire(new SMSService());
smsNotifire.notifyUser({ contact: '1234567890', name: 'John Doe' }, 'Hello, John!');
