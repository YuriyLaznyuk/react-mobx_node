import React from 'react';
import './style-components/counter.scss';
import counter from '../store/counter';
import {observer} from 'mobx-react-lite';

const Counter = observer((props) => {
  return (
    <div className='counter'>
      <div>
        {'Count= ' + counter.count}

      </div>
      <div>
        {counter.total}
      </div>
      <div className="counter__block">
        <button onClick={() => counter.increment()}
                className='counter__block-btn'>+
        </button>
        <button onClick={() => counter.decrement()}
                className='counter__block-btn'>-
        </button>

      </div>
    </div>
  );
});

export default Counter;