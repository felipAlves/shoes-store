import React from 'react'
import { StyledHome } from '../styles/global/StyledHome'

import { ShoppingCart } from '@material-ui/icons';

const Home = () => {
    return(
      <StyledHome>
          <header>
              <section>
                
              </section>

              <nav className="nav-list">
                  <ul>
                      <li>
                          <a>
                              Nike
                          </a>
                      </li>
                      <li>
                          <a>
                              Adidas
                          </a>
                      </li>
                      <li>
                          <a>
                              Hocks
                          </a>
                      </li>
                  </ul>
              </nav>

              <button className="cart-button">
                <ShoppingCart />
              </button>
          </header>
          <main>
              <section className="img-tenis"></section>
              <section className="description">
                  <h2>Nike SB Slip On</h2>
                  <div class="stars">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>

                  <section>
                    <h3>
                        $117
                    </h3>
                    <h1>
                        $98.00
                    </h1>
                  </section>

                  <section>
                      <h3>SIZE CHART</h3>

                      <ul>
                          <li>
                              <button>7</button>
                          </li>
                          <li>
                              <button>8</button>
                          </li>
                          <li>
                              <button>9</button>
                          </li>
                          <li>
                              <button>10</button>
                          </li>
                          <li>
                              <button>11</button>
                          </li>
                      </ul>
                  </section>

                  <section>
                      <h3>COLOR</h3>

                      <ul>
                          <li>
                              <input type="radio" name="color" id="red"/>
                          </li>
                          <li>
                              <input type="radio" name="color" id="green"/>
                          </li>
                          <li>
                              <input type="radio" name="color" id="blue"/>
                          </li>
                      </ul>
                  </section>
                  
              </section>
          </main>
      </StyledHome>
    )
}

export default Home