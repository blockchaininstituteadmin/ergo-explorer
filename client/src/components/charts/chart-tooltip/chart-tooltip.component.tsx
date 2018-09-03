import * as dayjs from 'dayjs';
import * as React from 'react';

import { convertInfoItemValue } from '../../../utils/convertInfoItemvalue';

import './chart-tooltip.scss';

export class ChartTooltipComponent extends React.PureComponent {
  props: {
    type: string,
    payload: any[],
    label: string,
    isScale: boolean;
  };
  
  render (): JSX.Element {
    const date = dayjs(this.props.label)
      .format('DD.MM.YYYY');
    
    let value     = null;
    const payload = this.props.payload ? this.props.payload[0] : null;
    
    if (payload) {
      const type           = payload.payload.type || 'chart';
      const transformValue = this.props.isScale ? payload.payload.originalValue : this.props.payload[0].value;
      
      value = convertInfoItemValue(type, transformValue);
    }
    
    return (
      <div className='bi-chart-tooltip'>
        <div className='bi-chart-tooltip__label'>{ date }</div>
        { value }
      </div>
    );
  }
}
