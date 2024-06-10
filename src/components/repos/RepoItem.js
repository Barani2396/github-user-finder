import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <a
      className='card fs-4 p-1 px-2 mb-2'
      href={repo.html_url}
      target='_blank'
      rel='noreferrer'
    >
      {repo.name}
    </a>
  );
};

export default RepoItem;
