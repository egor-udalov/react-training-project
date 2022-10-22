import React from 'react';
import Styles from'./Invitations.module.scss';
import { Success } from './InvitationsComponents/Success';
import { Users } from './InvitationsComponents/Users';

// Тут список пользователей: https://reqres.in/api/users

function Invitations() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState([true]);
  const [success, setSuccess] = React.useState([false]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert('Ошибка при получении пользователя')
      }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className={Styles.Invitations}>
      {
        success ? (
          <Success count={invites.length} />
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}
          />
        )
      }
    </div>
  );
}

export default Invitations;
