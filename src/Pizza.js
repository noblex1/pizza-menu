import './App.css';

function PizzaApp() {
  return (
    <div className="PizzaApp">
      <h1>Welcome to the Pizza Menu!</h1>
      <p>Choose your favorite pizza from our delicious menu.</p>
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />

    </div>
  );
}

function Pizza() {
  return (
    <div>
    
      <h2>Pepperoni Pizza</h2>
      <p>A classic pizza topped with pepperoni slices and melted cheese.</p>
        <img src="/pizzas/p1.jpg" alt="Pepperoni Pizza" />
    </div>
  );
}

export default PizzaApp;
