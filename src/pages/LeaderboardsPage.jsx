/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { asyncreceiveLeaderboardsActionCreator } from '../states/leaderboards/action';
import LeaderboardItem from '../components/LeaderboardItem';

export default function LeaderboardsPage() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncreceiveLeaderboardsActionCreator());
  }, [dispatch]);

  return (
    <main className="container fs-2">
      <h1 className="mt-4">Pengguna dan Skor</h1>
      <div className="card mt-3">
        <div className="card-header d-flex justify-content-between">
          <span className="font-weight-bold h5">Daftar Pengguna</span>
          <span className="font-weight-bold h5">Skor</span>
        </div>
        <ul className="list-group list-group-flush">
          {leaderboards.map(({ user, score }) => (
            <LeaderboardItem key={user.id} user={user} score={score} />
          ))}
        </ul>
      </div>
    </main>
  );
}

LeaderboardsPage.propTypes = {
  leaderboards: PropTypes.array,
  user: PropTypes.object,
  score: PropTypes.number,
};
