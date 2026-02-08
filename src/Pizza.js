import './App.css';

function PizzaApp() {
  return (
    <div className="PizzaApp">
        <Header />
        <Menu />
        <Pizza />
        <Footer />


    </div>
  );
}

function Pizza() {
  return (
    <div>
          <img src="/pizzas/p1.jpg" alt="Pepperoni Pizza" />
      <h2>Pepperoni Pizza</h2>
      <p>A classic pizza topped with pepperoni slices and melted cheese.</p>
      
    </div>
  );

}

function Header() {
  return (
      <h1>Pizza Menu</h1>
  );
}

function Menu() {
  return (
    <div>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
  );
}

function Footer() {
  return (
      <p>© 2026 Pizza Menu. All rights reserved.</p>
  );
}


export default PizzaApp;
