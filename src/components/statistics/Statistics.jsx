import PropTypes from 'prop-types';
import React from 'react';
import css from "../statistics/Statistics.module.css"
import getRandomColor from "../helper/helper"

const Statistics = ({ title, stats }) => {

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.titlest}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className= {css.item} key={id} style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
