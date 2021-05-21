import React, { Component } from 'react'
import HeroSection from "./LandingPage/HeroArea/HeroSection"
import Layout from "./LandingPage/Layout/Layout";
import RecentlyViewed from "./LandingPage/RecentlyView/RecentlyView";
import { Route,Switch,} from 'react-router-dom';
import Discover from './LandingPage/DiscoverSection/Discover';
import ShopOurSelections from "./LandingPage/ShopOurSelection/ShopOurSelection";
import WhatIsEtsy from "./LandingPage/WhatIsEsty/WhatisEtsy";

class LandingPages extends Component {
  render() {
    return (
      <div>
      
      <Layout>
      <HeroSection/>
      </Layout>
  <Switch>
     <Route exact path="/" />
  </Switch>
  <RecentlyViewed/>
  <Discover/>
  <ShopOurSelections/>
  <WhatIsEtsy/>
  </div>
    )
  }
}
export default LandingPages;
