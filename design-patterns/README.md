## 🔧 Creational Patterns
How objects are created

| Pattern | Description | Example Use Case |
|:-------------|:-------------|:-------------|
| Singleton	| Ensures a class has only one instance	| Database connection, logging service
| Factory Method | A method creates objects without exposing instantiation logic	| Dynamic object creation based on type
| Abstract Factory | A factory of factories; creates related objects without specifying their classes	| UI themes (light/dark mode components)
| Builder	| Constructs complex objects step by step	| Creating a complex user profile
| Prototype	| Clones an existing object instead of creating a new one	| Game characters with similar properties

## 🔧 Structural Patterns
How objects are structured & related

| Pattern | Description | Example Use Case |
|:-------------|:-------------|:-------------|
| Adapter	| Converts an interface into another one that clients expect | Connecting an old API with a new system
| Bridge | Decouples abstraction from implementation | Supporting multiple UI platforms
Composite | Treats individual objects and compositions uniformly | File system hierarchy (files & folders)
| Decorator | Dynamically adds new behavior to objects without modifying their code | Adding logging to API requests
| Facade | Provides a simplified interface to a complex system | Wrapping multiple API calls in a single function
| Flyweight | Reduces memory usage by sharing objects | Caching UI elements
| Proxy | Controls access to another object (e.g., lazy loading, access control) | Virtual proxies for lazy-loading images

## 🔧 Behavioral Patterns
How objects interact

| Pattern | Description | Example Use Case |
|:-------------|:-------------|:-------------|
| Chain of Responsibility	| Passes a request through handlers until one handles it | Logging levels, middleware in Express.js
| Command	| Encapsulates a request as an object | Undo/redo operations
| Iterator | Provides a way to traverse a collection | Browsing a list of items
| Mediator | Centralizes communication between objects | Chatroom managing users
| Memento | Saves/restores an object's state | Undo functionality in editors
| Observer | Defines a dependency where objects notify subscribers | Event listeners, WebSockets
| State | Changes behavior based on state | Traffic light system
| Strategy | Allows interchangeable algorithms at runtime | Payment methods (credit card, PayPal)
| Template Method | Defines the skeleton of an algorithm, allowing subclasses to override steps | Sorting algorithms
| Visitor | Separates algorithms from object structures | Code analysis tools
