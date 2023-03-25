import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className='card mb-3'>
      <h3 className='fs-4 p-2'>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
