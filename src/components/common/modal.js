import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import * as actions from 'src/store/actions';
import bgImg from 'src/assets/images/do-something-great.jpg';
import Card from 'src/components/material-ui/card';
import { CLOSE_ICON } from 'src/components/material-ui/icons';
import storeConnector from 'src/store/selectors/common';
import { PORTFOLIO } from 'src/constants/portfolio';

function Modal({ isModalOpened, closeModal, selectedPortfolio }) {
  const modalWrapperStyle = { display: isModalOpened ? 'block' : 'none' };
  
  const ModalUI = () => {selectedPortfolio && (
    <Card 
      image={PORTFOLIO[selectedPortfolio].image}
      title={PORTFOLIO[selectedPortfolio].title}
      description={PORTFOLIO[selectedPortfolio].description}
      projectUrl={PORTFOLIO[selectedPortfolio].projectUrl}
      codeUrl={PORTFOLIO[selectedPortfolio].codeUrl}
      isModal
    />
  )};

  return (
    <div 
      className="modal-wrapper" 
      style={modalWrapperStyle}
    >
      <form className="modal-form">
        <div className="wrapper">
          <div className="close-modal">
            <span onClick={closeModal}>{CLOSE_ICON}</span>
          </div>
          {selectedPortfolio && selectedPortfolio !== 0 && (
            <Card 
              image={PORTFOLIO[selectedPortfolio].image}
              title={PORTFOLIO[selectedPortfolio].title}
              description={PORTFOLIO[selectedPortfolio].description}
              projectUrl={PORTFOLIO[selectedPortfolio].projectUrl}
              codeUrl={PORTFOLIO[selectedPortfolio].codeUrl}
              isModal
            />
          )}
          {/* Duplicate Card because of "0" bug in the first array item displayed - To Be Fixed */}
          {selectedPortfolio === 0 && (
            <Card 
              image={PORTFOLIO[selectedPortfolio].image}
              title={PORTFOLIO[selectedPortfolio].title}
              description={PORTFOLIO[selectedPortfolio].description}
              projectUrl={PORTFOLIO[selectedPortfolio].projectUrl}
              codeUrl={PORTFOLIO[selectedPortfolio].codeUrl}
              isModal
            />
          )}
          <div className="divider"></div>
        </div>
      </form>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    closeModal: actions.ui.closeModal,
  },
)(Modal);
