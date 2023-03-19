import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import banner from "./assets/images/WhatsApp Image 2023-03-12 at 1.47.14 PM (1).jpeg";
import { constantActions } from "./store/constantSlice";
import { useDispatch, useSelector } from "react-redux";

import OurFarmers from "./components/OurFarmers";

export default function About() {

  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.constant.companyTitle)

  dispatch(constantActions.updatePageTitles(companyName+" . "+"About us")); // company name here
  dispatch(constantActions.setCurrentPage("About"));

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);

  return (
  <section>
        <div className="aboutBanner-blur"></div>
        
        <div className="blogBanner-image">
          <img src={banner} alt="" />
        </div>
        <section className="blogBanner-section">

          <div className="blogBanner-title">
            <h3>About Us</h3>
          </div>
          
          <nav>
          <div className='nav-socials'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-linkedin"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>

            <div>
              <span><Link to="/" className="a" href="">home </Link></span>.
              <span><Link to="/blog" className="a" href="">blog</Link></span>.
              <span><Link to="/about" className="a active" href="">about us </Link></span>.
              {/* <span><Link to="/services" className="a" href="">services</Link></span>. */}
              <span><Link to="/gallery" className="a" href="">gallery</Link></span>.
              <span><Link to="/contact" className="a" href="">contact us</Link></span>
            </div>
          </nav>
        </section>

        <section className="vison-summary-section">
          <section className="vison-summary-section-left">
          <div className="vison-summary-item">
            <h5 data-aos="fade-up">our community <br /> <span>with over</span></h5>
            <span className="vison-summary-item-count-container" data-aos="fade-up">
                <span className="vison-summary-item-count">200k</span>
                 <span className="vison-summary-item-count-title">members</span>
            </span>
          </div>
          
          <div className="vison-summary-item">
            <h5 data-aos="fade-up">vision</h5>
            <span data-aos="fade-up">
            To be a model cooperative in Teso Sub Region
            </span> 
          </div>
          
          <div className="vison-summary-item">
            <h5 data-aos="fade-up">mission</h5>
            <span data-aos="fade-up">
            To provide multipurpose products and services of a superior quality, reliable and relevant for economic transformation of members and local communities.
            </span>
          </div>

          <h4 data-aos="fade-up" className="left-p">startegic goal</h4>

          <p data-aos="fade-up">
          Contribute to sustainable incomes among the member farmers through support to increased production and productivity, processing collective access to inputs, better- paying markets for the cooperative’s products to improve member livelihoods
          </p>

            <div data-aos="fade-up" className="vison-summary-left-thumbnail">
              <img src="" alt="" />
            </div>

            <h4 data-aos="fade-up" className="left-p">objectives of the cooperative</h4>
            
            <p data-aos="fade-up">
            Bulking and Collective Marketing of members produce
            </p>

            <p data-aos="fade-up">
            To conduct training of farmers on best farm practices for better output and quality
            </p>

            <p data-aos="fade-up">
            To support farmers in improving productivity and produce quality in order to receive better prices for their grain by providing modern agriculture equipment, technical training, an organic conversion programme and adequate storage facilities
            </p>

            <p data-aos="fade-up">
            To source for certified up to date agro-inputs for farmers.
            </p>

            <p data-aos="fade-up">
            To negotiate and Lobby on behalf of farmers for better prices for crop produce and other projects which can help to change their livelihood.
            </p>

            <p data-aos="fade-up">
            Financially support its members to expand
            </p>

            <p data-aos="fade-up">
            Promote and advocate for partnerships more especially with input dealers, Non- Governmental organizations, researchers, academic institutions and the government. This will facilitate in resource mobilization, awareness programs, quality input availability, market and any other information accessibility to farmers at appropriate and proper time management for farm activities
            </p>

            <p data-aos="fade-up">
            Provide reliable, trusted and sustained market for agriculture produce to contracted farmers at premium prices to attractive and enable many farmers more especially women and youth join the agribusiness sector
            </p>

            <p data-aos="fade-up">
            Offer reliable and Up to date agriculture extension services to farmers that among many training’s cover good climate smart agriculture practices, life skills, financial management and personal safety, environment and health.
            </p>

            <p data-aos="fade-up">
            To build the capacity of members and governance structures of the cooperative
through membership education, sensitization to achieve better welfare.
            </p>
          </section>

          <div className="vison-summary-section-right">
            <h4 data-aos="fade-up">ongongonja fruit growers' cooperative society limited</h4>
            <div data-aos="fade-up" className="vison-summary-section-thumbnail"><img src="" alt="" /></div>
           
            <h5 data-aos="fade-up" className="left-p">background</h5>

            <p data-aos="fade-up">
            Ongongoja fruit growers’ cooperative society LTD was started in 2012 by a group of farmers who were engaged in fruit growing to look for market for their fruits and in 2014 was registered with the republic of Uganda under permanent registration nationally in November, 2014 and it has been operational since then. However as the market for fruits became scarce, members decided to go multipurpose right from 2018 and the cooperative is engaged in multiple businesses but majorly in the production of selected crops such as Sorghum, Rice, Soya beans, Maize, Sunflower, groundnuts, cassava, millet to mention but few.
            </p>
            
            <p data-aos="fade-up">
            The cooperative is also engaged in bulking, collective marketing through networking with many buyers/off takers for better prices. With over 600 registered farmers and over 2000 out growers registered at the grassroots level engaged in agricultural production.
            </p>

            <p data-aos="fade-up">
            The cooperative was founded as a vehicle for linking farmers to markets for economic transformation of its members reducing exploitation of farmers by middle men. We achieve this by putting into practice the principles of team work, creativity, innovation, social responsibility and respect for nature. On the other hand the cooperative has a strong commitment to its customers, meeting their requirements for the highest quality grain.
            </p>

            <p data-aos="fade-up">
            The co-operative also carries out reforestation, water conservation and environmental educational programs as part of its long-term strategy of sustainable development.
            </p>

            <p data-aos="fade-up">
            Katakwi being in the cattle corridor the cooperative incorporated the aspect of livestock farming as a business where by members will be engaged on to keep quality animals for better market and increased milk production.
          </p>

            <p data-aos="fade-up">
            The cooperative aims at sorting out problems of low bulking capacity, low levels of value addition, weak linkages to profitable markets and difficulties accessing credit to improve productivity.
            </p>

            <h5 data-aos="fade-up" className="left-p" style={{marginTop:" 150px"}}>legal status of the cooperative</h5>
            
            <p data-aos="fade-up">
            The cooperative is registered with the government through the Ministry of Trade and Industry possesses a permanent registration Certificate. It is governed under the overriding authority of the Cooperative Societies Act cap 112 and Cooperative Regulations 1993 under the Constitution of the Republic of Uganda . It is particularly operating under the Model Byelaws of Multipurpose Cooperative Societies in Uganda and manages its operations with various documents that aid the process, such as:
              <ul>
                <li data-aos="fade-up">Audited books of accounts.</li>
                <li data-aos="fade-up">Bank account, centenary bank</li>
                <li data-aos="fade-up">Management structure.</li>
                <li data-aos="fade-up">By laws/ constitution</li>
                <li data-aos="fade-up">Trading license</li>
              </ul>
            </p>

            <h5 data-aos="fade-up" className="left-p" style={{marginTop:" 100px"}}>area of operation</h5>

            <p data-aos="fade-up">
            our cooperative is covering the sub counties of <span>ongongoja, okulonyo, usuk, Guyaguya, Palam, Ngariam</span> and <span>Okore in Katakwi District and Poron, Lorengechora and Iriiri in Napak District</span> which has a population of over 100,000 people and we intend to extend our activities to cover the <span>whole of katakwi district, Amuria, Kapelebyong and Napak district.</span>
            <button data-aos="fade-up" type="button"><Link className="a" to="/contact">contact us</Link></button>
            </p>

          </div>          
        </section>

        <section className="cooperative-values-section">
          <h4 data-aos="fade-up">our core values</h4>
          <div className="cooperative-values-container">
            <div data-aos="fade-up" className="cooperative-values-item">
              <span className="cooperative-values-item-icon"><i className="fa fa-book"></i></span>
              <span className="cooperative-values-item-title">quality</span>
            </div>

            <div data-aos="fade-up" className="cooperative-values-item">
              <span className="cooperative-values-item-icon"><i className="fa fa-book"></i></span>
              <span className="cooperative-values-item-title">integrity</span>
            </div>

            <div data-aos="fade-up" className="cooperative-values-item">
              <span className="cooperative-values-item-icon"><i className="fa fa-book"></i></span>
              <span className="cooperative-values-item-title">accountability</span>
            </div>

            <div data-aos="fade-up" className="cooperative-values-item">
              <span className="cooperative-values-item-icon"><i className="fa fa-book"></i></span>
              <span className="cooperative-values-item-title">team work</span>
            </div>

          </div>
        </section>

        <section className="vison-summary-section" style={{paddingTop: "30px"}}>
          <section className="vison-summary-section-left">
            <h5 data-aos="fade-up">our development parters and sponsors</h5>
            <p data-aos="fade-up">
            The Society has in the past received support from several developments partners and expects to continue to engage with other key partners to support the long term objective of transforming lives of the members.
            </p>

            <div className="aboutsponsors-section">
              <div data-aos="fade-up" className="aboutsponsors-item"><img src="" alt="" /></div>
              <div data-aos="fade-up" className="aboutsponsors-item"><img src="" alt="" /></div>
              <div data-aos="fade-up" className="aboutsponsors-item"><img src="" alt="" /></div>
              <div data-aos="fade-up" className="aboutsponsors-item"><img src="" alt="" /></div>
            </div>


            <h5 data-aos="fade-up" className="left-p" style={{marginTop: "100px",marginBottom: "30px"}}>farmers acreage</h5>
    
            <p data-aos="fade-up">
            The individual members have a combined acreage of over 15,000 and only around 40% of land is utilized because farmers still lack capacity to open more land for production. Most of the members still use oxen to plough. Plans are under way to get a tractor from Microfinance Support Centre under LEGS project. The tractor will enable farmers to open 70% of their land for production and this will boost the output levels to significant levels.
            </p>

            <h5 data-aos="fade-up" className="left-p">office location</h5>
            <p data-aos="fade-up">
            The cooperative is in Katakwi District with its main offices is located at Abarata Keere Weekly Market, Okuda Trading Center, Ongongoja Sub-County Katakwi District Eastern Uganda.
            </p>


            <h5 data-aos="fade-up" className="left-p">our future plans</h5>
            <p data-aos="fade-up">
            As a cooperative we are looking at the future to ensure that we achieve our objective of transforming the economic status of our community on the following ways:-
            <ul>
              <li data-aos="fade-up">
              Enrollment; we want to the best and the biggest cooperatives in katakwi district with over 5000 paid up members and 10 000 out growers
              </li>
              <li data-aos="fade-up">
              Tractor and Truck, this will help us to open more land to boost our production
capacity and simplify transportation of our produce.
              </li>
              <li data-aos="fade-up">
              Partnership. We shall seek for more partners willing to work with us for achievement of our goals.
              </li>
              <li data-aos="fade-up">
              Expansion. We shall expand our coverage to cover the entire katakwi district, Amuria district, kabelebyong district and Karamoja sub region.
              </li>
              <li data-aos="fade-up">
              Value addition. The cooperative intends to bring in maize mills and Sunflower cooking oil processor to add value for better prices and also create job opportunities for the youth.
              </li>
              <li data-aos="fade-up">
              Trainings. We shall conduct regular trainings to our farmers and staff on better agricultural practices
              </li>
              <li data-aos="fade-up">
              Market ,the cooperative will look for better market opportunities that will offer better prices to their grain
              </li>
              <li data-aos="fade-up">
              Cooperate Social Responsibility. This is creating awareness about climate change, HIV/AIDS and killer disease to our farmers to ensure a healthy population.
              </li>
              <li data-aos="fade-up">
              Agent Banking. We intend to introduce agent banking to create convenience to our customers and the civil servants in the community.
              </li>
              <li data-aos="fade-up">
              Radio Programs to help educate farmers the importance of cooperatives and encouraging the farmers to save.
              </li>
              <li data-aos="fade-up">
              Fundraising; we intend to hold fund-raising functions to solicit for funds towards purchase of machinery for value addition
              </li>
            </ul>
            </p>


            <h5 data-aos="fade-up" className="left-p">TYPE OF SERVICES PROVIDED TO MEMBERS</h5>

            <p data-aos="fade-up">
              The members of the cooperative society have access to affordable specialized services in ensuring cost-effectiveness and efficiencies of farmer members capacity to increase farm production and productivity, these services include:-
              <ul>
                <li data-aos="fade-up">Supply high-quality farm (certified & tested) inputs at reasonable prices to members.</li>
                <li data-aos="fade-up">
                Farmers’ produce trading- bulking, processing, marketing, and selling members products-ranging from facilitating sales of members products at the first handler level, to wholesaling, retailing, and exporting.
                </li>
                <li data-aos="fade-up">Provide specialized services such as tractor services, farm extension, drying, or trucking.</li>
                <li data-aos="fade-up">Financing ranging from share savings mobilizations, credit facilities, farm insurances.</li>
                <li data-aos="fade-up">
                The cooperative will lobby the government or any development partner to support improvement of the quality of animals kept so as to add value thereby increasing the price and boosting milk production capacity.
                </li>
              </ul>
            </p>



          </section>

          <div className="vison-summary-section-right">
            <h5 data-aos="fade-up" className="left-p">major activities of the cooperative</h5>
            <p data-aos="fade-up">Bulking of produce</p>
            <p data-aos="fade-up">Collective marketing of our produce.</p>
            <p data-aos="fade-up">Members are engaged in farming and we mostly grow sunflower, soya beans, groundnuts and maize</p>
            <p data-aos="fade-up">Training farmers on best farming practices</p>
            <p data-aos="fade-up">Providing farmers with better agricultural inputs like seeds, fertilizers and pesticides to increase on our production</p>

            <h4 data-aos="fade-up">out growers</h4>
            <p data-aos="fade-up">
            Ongongoja Fruit Growers Cooperative Society Limited has over 2000 out growers who feed directly into the cooperative. The out growers are active farmers clustered into groups of 32 members from different villages. Each group has its own leadership that is Chairman, Secretary and Treasurer. The Cooperative has a coordinator in each Sub county responsible for these groups and reports directly to the Manager Operations.
            </p>

            <h4 data-aos="fade-up">bulking store</h4>
            <p data-aos="fade-up">
            The cooperative has a magnificent bulking store located at Abarata Kere Weekly
market with storage capacity of 1000 tones .This will be used as a central point for storage of grain and off takers/buyers will pick it from here. With this kind of modern facility the issue of food Security and Market will be addressed.
            </p>

            <h4 data-aos="fade-up" className="left-p" style={{marginTop:" 50px"}}>benefits of the bulk to the cooperative</h4>
            
            <p data-aos="fade-up">
              <ul>
                <li data-aos="fade-up">improved storage problems of the produce</li>
                <li data-aos="fade-up">Assured food security and enough space</li>
                <li data-aos="fade-up">The store has given this place face lift in terms of hygiene and sanitation</li>
              </ul>
            </p>

            <h5 data-aos="fade-up" className="left-p">major crops/value chains</h5>
            <p data-aos="fade-up">The Cooperative majorly deals in bulking the following crops;- Sun Flower, Sorgum, SoyaBean, Groundnuts, Maize, Rice, Simsim, Cassava and other groups</p>
          
          

            <h4 data-aos="fade-up" className="left-p" style={{marginTop:" 50px"}}>suppliers of the cooperative</h4>
            <p data-aos="fade-up">
            The out growers who will diretly supply the cooperative with produce
            </p>
            <p data-aos="fade-up">
            Certified seed dealers like Serere Research Station and Achila Enterprises for improved seeds and Equator seeds and others
            </p>
            <p data-aos="fade-up">
            Dealers in fertilizers and pesticides for improved output and pest management
            </p>
          

            <h4 data-aos="fade-up" className="left-p" style={{marginTop:" 50px"}}>target market and customer base</h4>
            <p data-aos="fade-up">
              The target market segments for the Cooperative include:-
              <ul>
                <li data-aos="fade-up">
                Local Market located right in Abarata Kere Weekly Market for potential Market
                </li>
                <li data-aos="fade-up">
                The institutions like Serere Research Station markets , schools and others
                </li>
                <li data-aos="fade-up">
                Off takers and other established buyers such as Achila Enterprises,Mukwano Industries in Lira,Mt.Meru Millers, MMP Agro and Guru nanak Oils Mills in Lira.
                </li>
              </ul>
            </p>
            <p data-aos="fade-up">
            The Cooperative focus is to engage in market development activities to build market potential by establishing key sales outlets or networking with off takers and exporters especially from Kenya ease access the products.
            </p>


            <h4 data-aos="fade-up" className="left-p" style={{marginTop:" 50px"}}>membership</h4>

            <p data-aos="fade-up">
            The cooperative currently has 530 members out of which 318 are female,212 are male, 150 youth and 5 disabilities . The society is addressing the needs of members and expects membership to increase to over 1000 in the next two years and would embark on youth and women mobilization to form 60% of the membership and turn the underutilized land to full production.

              <button type="button"><Link to="/contact" className="a">join today</Link></button>
            </p>

          </div>
        </section>

        <section className="governance-section">
          <h4 data-aos="fade-up">governance system</h4>
          <p data-aos="fade-up">
          Ongongoja Fruit Growers Cooperative Society Limited is democratically governed through cooperative rules and regulations, bye-laws, and standard operating procedures. The Board of directors and supervisory committees are elected from its members basing on their reputation and during the annual General Assembly. The Supreme Authority is vetted in the General Meeting of the members at which every member has a right to attend and to vote on all questions irrespective of the shares held.
          </p>
        </section>

        <section className="board-structure-section">
          <h4 data-aos="fade-up">the board management structure of the cooperative</h4>
          <p data-aos="fade-up">
          Management Structure of Ongongoja Fruit Growers Cooperative Society Limited. The cooperative Society Regulations 1993 entrust the governing Authority of the registered cooperative to the Board Committee who are responsible for safeguarding of its assets and full decision making.
          </p>
          <p data-aos="fade-up">
          The cooperative has Nine Board Members led by the Chairperson with Secretary and the Treasurer who are responsible for making all the decisions regarding Management and Control of the Entity
          </p>
          <p data-aos="fade-up">
          The decisions made by the Board Committee are implemented by the Manager Operations and his technical team who are responsible for day today operations of the cooperative
          </p>
        </section>

        <OurFarmers />

        <OurFarmers />

  </section>
  );
}
