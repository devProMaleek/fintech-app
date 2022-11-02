import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Breadcrumb = (props) => {
  const currentPath = props.router.pathname;
  return (
    <section className="bg-white py-6 border-y border-gray-200 dark:bg-gray-900">
      <div className="container flex justify-between items-center mx-auto px-6">
        <div className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/investment">
                <a className="inline-flex items-center font-nunito text-sm font-medium text-primaryTextPlaceholder dark:text-gray-400 dark:hover:text-white">
                  Investments
                </a>
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 font-nunito text-sm font-medium text-primaryTextPlaceholder md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Create Investments
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link href={currentPath === `/investment/create/package` ? '#' : `/investment/create/package`}>
                  <a
                    className={`ml-1 text-sm font-medium font-nunito ${
                      currentPath === `/investment/create/package`
                        ? `text-primaryTextColor cursor-text`
                        : `text-primaryTextPlaceholder cursor-pointer`
                    }  md:ml-2 dark:text-gray-400`}
                  >
                    Easy Save
                  </a>
                </Link>
              </div>
            </li>
            {props.children}
          </ol>
        </div>
      </div>
    </section>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object,
};

export default Breadcrumb;
