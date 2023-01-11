import React from 'react'

const App = () => {
  return (
    <>
      <header class="header">
        <h3 class="logo-nav">B. Monroe Consulting</h3>
        <nav class="main-nav">
          <ul class="main-nav-list">
            <li><a class="main-nav-link" href="#">Section 1</a></li>
            <li><a class="main-nav-link" href="#">Section 2</a></li>
            <li><a class="main-nav-link" href="#">Section 3</a></li>
            <li><a class="main-nav-link" href="#">Section 4</a></li>
            <li><a class="main-nav-link nav-cta" href="#">Section 5</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="section-hero">
          <div class="hero">
            <div class="hero-text-box">
              <h1 class="heading-primary">
                We handle the logistics of your construction project so you can focus on what's important
              </h1>
              <p class="hero-description">
                Receive professional expertise on project management and delegate your legal work such as processing building permits, verifying building code & regulations, and performing safety & efficiency tests
              </p>
              <a href="#" class="btn btn--full margin-right-sm">CONTACT</a>
              <a href="#" class="btn btn--outline">LEARN MORE &darr;</a>
            </div>
            <div class="hero-img-box">
              <img src="/src/assets/hero.svg" class="hero-img" alt="Working Woman" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App