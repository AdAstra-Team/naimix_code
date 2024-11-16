import React from 'react';
import Avatar from './Avatar';

import { SIGNS } from '../Utils/constants';
import { formatBirthday } from '../Utils/utils';

const UserCard = ({ user, metrics, children }) => {
  return (
    <div
      className="container bg-teal-container rounded-lg p-12 max-w-[1320px]"
    >
      <div className="flex items-center">
        <Avatar src="/images/avatar-default.png" size={140} />
        <div className="ml-4 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{user.name} {user.surname}</h2>
            {metrics && <p className="font-semibold">{metrics}</p>}
          </div>
          <p className="font-semibold text-purple">{SIGNS[user.sign]}</p>
          <div className="flex flex-col gap-1 mt-4 text-iridium text-sm">
            <p>{user.email}</p>
            <p>{user.number}</p>
            <p>{formatBirthday(user.birthday)}</p>
            <div className="flex items-end">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
