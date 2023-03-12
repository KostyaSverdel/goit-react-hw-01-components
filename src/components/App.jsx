import React from 'react';
import user from '../data-base/user.json';
import data from '../data-base/data.json';
import friends from '../data-base/friends.json';
import transactions from '../data-base/transactions.json';
import Profile from '../components/profile/Profile';
import Statistics from '../components/statistics/Statistics';
import FriendList from '../components/friends/FriendList';
import TransactionHistory from '../components/transaction/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
