import React, { ReactElement } from 'react';
import './TransferLine.scss';

interface Props {
  transferCount: number;
}

function TransferLine({ transferCount }: Props): ReactElement {
  return (
    <div className="transfer-line">
      <div className="transfer-line__text">{transferCount} пересадка</div>
    </div>
  );
}

export default TransferLine;
