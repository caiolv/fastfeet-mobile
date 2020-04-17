import React from 'react';
import PropTypes from 'prop-types';

import { AvatarContainer, AvatarText, AvatarImage } from './styles';

export default function Avatar({ profile, color, big }) {
  const names = profile.name.split(' ');
  return (
    <>
      {profile.avatar ? (
        <AvatarImage source={{ uri: profile.avatar.url }} big={big} />
      ) : (
        <AvatarContainer big={big} color={color}>
          <AvatarText big={big} color={color}>
            {names[0][0] + names[1][0]}
          </AvatarText>
        </AvatarContainer>
      )}
    </>
  );
}

Avatar.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
  big: PropTypes.bool,
};

Avatar.defaultProps = {
  big: false,
  color: '#555',
};
