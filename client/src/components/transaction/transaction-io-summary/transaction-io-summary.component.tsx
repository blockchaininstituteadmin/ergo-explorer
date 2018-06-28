import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { IoSummary } from '../../../models/generated/ioSummary';

import './transaction-io-summary.scss';

interface ITransactionIoSummaryProps {
  summary: IoSummary;
  isScriptShown: boolean;
  onScriptToggle: () => void;
}

export class TransactionIoSummaryComponent extends React.Component<ITransactionIoSummaryProps> {
  render (): JSX.Element {
    return (
      <div className='bi-transaction-io-summary'>
        <div className='bi-transaction-io-summary__header'>
          <FormattedMessage id='components.transaction-io-summary.title'/>
        </div>
        
        <div className='bi-transaction-io-summary__body bi-table'>
          <div className='bi-transaction-io-summary__row bi-table__row'>
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-io-summary.totalCoinsTransferred'/>
            </div>
            
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--value bi-table__cell'>
              { this.props.summary.totalCoinsTransferred }
            </div>
          </div>
          
          <div className='bi-transaction-io-summary__row bi-table__row'>
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-io-summary.totalFee'/>
            </div>
            
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--value bi-table__cell'>
              { this.props.summary.totalFee }
            </div>
          </div>
          
          <div className='bi-transaction-io-summary__row bi-table__row'>
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-io-summary.feePerByte'/>
            </div>
            
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--value bi-table__cell'>
              { this.props.summary.feePerByte }
            </div>
          </div>
          
          
          <div className='bi-transaction-io-summary__row bi-table__row'>
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-io-summary.scripts'/>
            </div>
            
            <div className='bi-transaction-io-summary__cell bi-transaction-io-summary__cell--value bi-table__cell'>
              <button className='bi-btn bi-btn--flat bi-btn--link'
                      onClick={ this.props.onScriptToggle }>
                { this.props.isScriptShown ?
                  <FormattedMessage id='components.transaction-io-summary.hideScripts'/> :
                  <FormattedMessage id='components.transaction-io-summary.showScripts'/>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
