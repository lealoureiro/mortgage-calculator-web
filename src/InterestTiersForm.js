import React, { Component} from 'react'
import InterestTierInput from './InterestTierInput'

class InterestTiersForm extends Component {

  state = {
    interestTiers: ['tier1']
  }

  addNewInterestTier = (e) => {

    var newState = this.state.interestTiers.slice();
    newState.push('tier' + this.state.interestTiers.length);
    this.state({interestTiers: newState});
    e.preventDefault();

  }


  render() {
    return (
      <div className="interest tier form">

        <h2>Interest Tiers:</h2>

        <div id="interest-tier-list">

          {
            this.state.interestTiers.map((e) => {return <InterestTierInput />})
          }

        </div>

        <p><button onClick={this.addNewInterestTier}>Add New Interest Tier</button></p>


      </div>
    );
  }

}

export default InterestTiersForm
