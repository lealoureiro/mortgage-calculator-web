import React, { Component } from 'react';

import InterestTierInput from './InterestTierInput';

import { Form } from './styles';

class InterestTiersForm extends Component {
  state = {
    interestTiers: [
      { id: 0, interest: 2.50, debt: 101 }
    ]
  }

  handleInterestChange = ({ id, currentValues }) => {
    const { interestTiers } = this.state;
    interestTiers[id] = { ...interestTiers[id], ...currentValues };
    this.setState({ interestTiers });
  }

  handleAddTier = () => {
    const { interestTiers } = this.state;

    this.setState({
      interestTiers: [...interestTiers, { id: interestTiers.length, interest: 0, debt: 0 }]
    });
  }

  handleDeleteTier = id => {
    const { interestTiers } = this.state;

    if (interestTiers.length === 1) {
      console.log("Cannot delete last interest tier!");
      return;
    }

    interestTiers.splice(id, 1);
    this.setState({ interestTiers });
  }

  render() {
    const { interestTiers } = this.state;
    const showDeleteButton = interestTiers.length > 1;

    return (
      <Form>
        {interestTiers.map(
        (tier, index) => (
          <InterestTierInput
            id={index}
            interest={tier.interest}
            debt={tier.debt}
            onChange={this.handleChange}
            onDelete={this.handleDeleteTier}
            key={`tier-input-${index}`}
            showDeleteButton={showDeleteButton}
          />
        ))}

        <button type="button" onClick={this.handleAddNewInterestTier}>+</button>
      </Form>
    );
  }
};

export default InterestTiersForm;
