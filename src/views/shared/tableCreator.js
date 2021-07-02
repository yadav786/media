import React from 'react';
import { PropTypes } from 'prop-types';
import 'Styles/tableCreator';

const TableCreator = ({
  keys,
  dataArray,
  labels,
  rowClick,
  tableCreatorClass = '',
}) => {
  const handleClick = (row, key) => {
    if (rowClick && key === 'challenge') rowClick(row);
  };
  if (dataArray.length === 0)
    return <div className="not-enough-data"> Data is displayed here</div>;
  return (
    <div className={`tableCreator helvetica ${tableCreatorClass}`}>
      <table>
        <thead>
          <tr>
            {labels.map((label, i) => (
              <th key={i} className={`th ${keys[i]} textType6 color6`}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArray.map((row, i) => (
            <tr key={i} className="row color1">
              {keys.map((key, j) => (
                <td
                  key={j}
                  className={`td ${key}`}
                  onClick={() => handleClick(row, key)}
                >
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableCreator.propTypes = {
  keys: PropTypes.array.isRequired,
  dataArray: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  rowClick: PropTypes.func,
  tableCreatorClass: PropTypes.any,
};

export default TableCreator;
