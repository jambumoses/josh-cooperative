import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { constantActions } from './store/constantSlice';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Gallery() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"Gallery")); // company name here
  dispatch(constantActions.setCurrentPage("Gallery"));


  return (
    <>
      <section>
        <NavBar/>

        <div className='gallery-collection-component' style={{paddingTop: "50px"}}>
            <div className='gallery-collection-component-header'>
              <h5>collection</h5>
              <span>small note</span>
            </div>
            <div className='gallery-collection-component-note'>
            Advocating an acute reduction in the consumpption of factory-farmed meat, fish, eggs, and dairy by encouraging read more
            </div>
            <div className='gallery-collection-component-container'>
              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name' >Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>


              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

            </div>
{/*             <div className='seemore'>
              <button>see more</button>
            </div> */}
          </div>

        <section className='gallery-section'>
          <div className='gallery-whole-component'>
            <div className='gallery-whole-component-main'><img src="" alt="" /></div>
            <div className='gallery-whole-component-aside'>
              <h5>Organic Farming Revert Back</h5>
              <span className='gallery-whole-component-aside-notes'>advocating an acute reduction in the consumpption of factory-farmed meat, fish, eggs, and dairy by encouraging advocating an acute reduction in the consumpption of factory-farmed meat, fish, eggs, and dairy by encouraging 
                <span>read more</span>
              </span>
              <span className='gallery-whole-component-aside-date'>10:35:05 - 12-6-2023</span>
            </div>
          </div>
        </section>


        <section className='galler-normal'>
          <div className='galler-normal-left'>
            <div className='galler-normal-left-cont'>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
            </div>

            <div className='galler-normal-left-cont'>
            <div className='galler-normal-left-item'><img src="" alt="" /></div>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
            </div>
          </div>
          <div className='galler-normal-right'>
            <img src="" alt="" />
          </div>
        </section>


        

        <section className='galler-normal-reverse'>
          <div className='galler-normal-left'>
            <div className='galler-normal-left-cont'>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
            </div>
            
            <div className='galler-normal-left-cont'>
            <div className='galler-normal-left-item'><img src="" alt="" /></div>
              <div className='galler-normal-left-item'><img src="" alt="" /></div>
            </div>
          </div>
          <div className='galler-normal-right'>
            <img src="" alt="" />
          </div>
        </section>




        <div className='gallery-collection-component'>
            <div className='gallery-collection-component-header'>
              <h5>collection</h5>
              <span>small note</span>
            </div>
            <div className='gallery-collection-component-note'>
            Advocating an acute reduction in the consumpption of factory-farmed meat, fish, eggs, and dairy by encouraging read more
            </div>
            <div className='gallery-collection-component-container'>
              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>


              <div className='gallery-collection-component-item'>
                <div className='gallery-collection-component-item-image'><img src="" alt="" /></div>
                <div className='gallery-collection-component-item-name'>Advocating an acute </div>
                <div className='gallery-collection-component-item-date'>10.56.34-12/34/2033</div>
              </div>

            </div>
            <div className='seemore'>
              <button>see more</button>
            </div>
          </div>
      </section>
    </>
  )
}
