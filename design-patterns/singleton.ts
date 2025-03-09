class Database {
  private static instance: Database | null = null;

  private constructor() { } // private constructor to prevent direct instantiation

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const connection1 = Database.getInstance();
const connection2 = Database.getInstance();

console.log(connection1 === connection2); // true
