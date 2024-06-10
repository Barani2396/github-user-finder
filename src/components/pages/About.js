import React from 'react';

const About = () => {
  return (
    <div className='container my-5'>
      <h1 className='my-3 text-center'>About GitHub User Finder</h1>
      <p className='lead'>
        GitHub User Finder is a powerful tool designed to help you search and
        pin GitHub users effortlessly. Whether you are a developer looking for
        collaborators, a recruiter seeking talented coders, or simply someone
        interested in exploring GitHub profiles, this app is for you.
      </p>
      <h2 className='fs-3 mt-4 mb-2'>Key Features</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>Search Users:</strong> Quickly find GitHub users by their
          username.
        </li>
        <li className='list-group-item'>
          <strong>Pin Users:</strong> Save your favorite users locally using the
          browser's local storage.
        </li>
        <li className='list-group-item'>
          <strong>Smooth Scrolling:</strong> Enjoy a seamless experience with
          smooth scrolling animations.
        </li>
      </ul>
      <h2 className='fs-3 mt-4 mb-2'>Technologies Used</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>React:</strong> A JavaScript library for building user
          interfaces.
        </li>
        <li className='list-group-item'>
          <strong>React Router DOM:</strong> Handles routing in the application.
        </li>
        <li className='list-group-item'>
          <strong>Context API:</strong> Manages the global state across the app.
        </li>
        <li className='list-group-item'>
          <strong>Axios:</strong> Makes HTTP requests to the GitHub API.
        </li>
        <li className='list-group-item'>
          <strong>Local Storage:</strong> Stores the pinned users in the
          browser.
        </li>
        <li className='list-group-item'>
          <strong>CSS:</strong> Custom styling and smooth scrolling animations
          using scrollIntoView.
        </li>
        <li className='list-group-item'>
          <strong>Bootstrap:</strong> Provides responsive design and pre-styled
          components.
        </li>
      </ul>
      <h2 className='fs-3 mt-4 mb-2'>Development and Build Tools</h2>
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>Webpack:</strong> Bundles the app’s JavaScript, CSS, and other
          assets.
        </li>
        <li className='list-group-item'>
          <strong>Babel:</strong> Transpiles modern JavaScript and JSX into a
          format compatible with older browsers.
        </li>
        <li className='list-group-item'>
          <strong>Favicons:</strong> Manages the app’s favicon assets.
        </li>
      </ul>
      <p className='mt-4'>
        This app leverages modern JavaScript libraries and frameworks to create
        a responsive, user-friendly interface. With a focus on smooth
        interactions and easy navigation, GitHub User Finder ensures a pleasant
        user experience.
      </p>
      <p className='text-center'>
        <strong>Version 1.0.0</strong>
      </p>
      <p className='text-center'>Developed by Baranidharan Pasupathi</p>
    </div>
  );
};

export default About;
