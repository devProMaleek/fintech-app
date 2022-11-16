import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => {
  return (
    <section className="bg-white py-6 border-y border-gray-200 dark:bg-gray-900">
      <div className="container flex justify-between items-center mx-auto px-6">
        <div className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {props.children}
          </ol>
        </div>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
};

export default Breadcrumb;
