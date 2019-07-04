import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { formatNumberMetricPrefix } from '../../../utils/formatNumberMetricPrefix';

import { TransactionSummary } from '../../../models/generated/transactionSummary';

import { TimestampComponent } from '../../common/timestamp/timestamp.component';

import './transaction-summary.scss';

interface ITransactionSummaryProps {
  summary: TransactionSummary;
}

export class TransactionSummaryComponent extends React.Component<ITransactionSummaryProps> {
  render (): JSX.Element {
    return (
      <div className='bi-transaction-summary'>
        <div className='bi-transaction-summary__header'>
          <FormattedMessage id='components.transaction-summary.title'/>
        </div>

        <div className='bi-transaction-summary__body bi-table'>
          <div className='bi-transaction-summary__row bi-table__row'>
            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-summary.size'/>
            </div>

            <div
              className='bi-transaction-summary__cell bi-transaction-summary__cell--value bi-table__cell'>
              { formatNumberMetricPrefix(this.props.summary.size, { desiredFormat: 'k' }) }B
            </div>
          </div>

          <div className='bi-transaction-summary__row bi-table__row'>
            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-summary.timestamp'/>
            </div>

            <div
              className='bi-transaction-summary__cell bi-transaction-summary__cell--value bi-table__cell'>
              <TimestampComponent timestamp={ this.props.summary.timestamp }/>
            </div>
          </div>
          <div className='bi-transaction-summary__row bi-table__row'>
            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-summary.blocks'/>
            </div>

            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--value bi-table__cell'>
              <Link to={ `/blocks/${this.props.summary.block.id}` }>
                { this.props.summary.block.height }
              </Link>
            </div>
          </div>

          <div className='bi-transaction-summary__row bi-table__row'>
            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--header bi-table__cell'>
              <FormattedMessage id='components.transaction-summary.confirmationsCount'/>
            </div>

            <div className='bi-transaction-summary__cell bi-transaction-summary__cell--value bi-table__cell'>
              { this.props.summary.confirmationsCount }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
