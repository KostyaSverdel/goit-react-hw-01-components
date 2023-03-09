import React from 'react';
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
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
