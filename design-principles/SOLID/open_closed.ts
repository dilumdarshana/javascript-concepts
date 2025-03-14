// Use interfaces and inheritance to extend functionality without modifying existing code
// Example: Strategy pattern for payment processors, where new payment methods can be added without changing core checkout code
// In TypeScript: Abstract classes or interfaces that concrete implementations extend

// Bad way
type PaymentMethod = 'credit' | 'paypal' | 'stripe';

class PaymentProcessor {
  processPayment(amount: number, paymentMethod: PaymentMethod) {
    if (paymentMethod === 'credit') {
      // process credit payments
    } else if (paymentMethod === 'paypal') {
      // process paypal payments
    } else if (paymentMethod ==='stripe') {
      // process stripe payments
    }
  }
}

// Good way
interface MyPaymentMethod {
  processPayment(amount: number): Promise<boolean>
}

class CreditCard implements MyPaymentMethod {
  processPayment(amount: number): Promise<boolean> {
    // process credit card payments
    console.log(`processing credit card payment for ${amount}USD`);
    return Promise.resolve(true);
  }
}

class PayPal implements MyPaymentMethod {
  processPayment(amount: number): Promise<boolean> {
    // process PayPal payments
    console.log(`processing paypal payment for ${amount}USD`);
    return Promise.resolve(true);
  }
}

class Stripe implements MyPaymentMethod {
  processPayment(amount: number): Promise<boolean> {
    // process Stripe payments
    console.log(`processing credit stripe for ${amount}USD`);
    return Promise.resolve(true);
  }
}

class Checkout {
  constructor(private paymentModthod: MyPaymentMethod) {}

  processPayment(amount: number): Promise<boolean> {
    return this.paymentModthod.processPayment(amount);
  }
}

const creditCard = new CreditCard();
const checkoutCreditCard = new Checkout(creditCard);
checkoutCreditCard.processPayment(1000);

const stripe = new Stripe();
const checkoutStripe = new Checkout(stripe);
checkoutStripe.processPayment(3000);
