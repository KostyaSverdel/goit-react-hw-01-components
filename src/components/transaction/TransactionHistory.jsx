import React from 'react';
import PropTypes from 'prop-types';
import css from '../transaction/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.tableStyle}>
    <thead className={css.theadStyle}>
      <tr className={css.trStyle}>
        <th className={css.thStyle}>Type</th>
        <th className={css.thStyle}>Amount</th>
        <th className={css.thStyle}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tbodyStyle}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
