import PropTypes from 'prop-types';
import React from 'react';
import css from "../statistics/Statistics.module.css"

const Statistics = ({ title, stats }) => {
  const backgroundColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
  ];

  const getRandomColor = () => {
    return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  };

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
