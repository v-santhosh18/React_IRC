// import React from 'react';


function home() {
  return (
    <>
    <nav className="navbar">
    <h1 className="logo"></h1>
    <h1 class="logo">THE WORLD OF CARZ</h1>
    <ul>
        <li><a href="demo.html">REGISTER</a></li>
        <li><a href="login.html">LOGIN</a></li>
    </ul>
</nav> 

    <div className="App">
      <header className="App-header">
        {/* <h1>GOAT</h1>
        <p>Hello</p> */}

      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>Heyyy</p>
        </section>
        <section>
          <h2>Services</h2>
          <p>Check out our services.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Get in touch with us.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
        </>
  );
}

export default home;
