import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import User from '../../public/assets/svgs/user.svg';
import Card from '../../public/assets/svgs/card.svg';
import Setting from '../../public/assets/svgs/settings.svg';
import Shield from '../../public/assets/svgs/shield.svg';
import ProfileContent from './ProfileContent';
import CardLinking from './CardLinking';
import Security from './Security';
import UpgradeAccount from './UpgradeAccount';

const Profile = (props) => {
  const initialState = {
    profileContent: true,
    cardLinking: false,
    security: false,
    upgradeAccount: false,
  };

  const profileReducer = (state, action) => {
    switch (action.type) {
      case 'PROFILE': {
        return {
          ...state,
          profileContent: true,
          cardLinking: false,
          security: false,
          upgradeAccount: false,
        };
      }
      case 'CARD_LINKING': {
        return {
          ...state,
          cardLinking: true,
          profileContent: false,
          security: false,
          upgradeAccount: false,
        };
      }
      case 'SECURITY': {
        return {
          ...state,
          security: true,
          profileContent: false,
          cardLinking: false,
          upgradeAccount: false,
        };
      }
      case 'UPGRADE_ACCOUNT': {
        return {
          ...state,
          upgradeAccount: true,
          profileContent: false,
          cardLinking: false,
          security: false,
        };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);
  

  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="bg-primaryPurple min-h-screen">
          <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="text-2xl text-primaryTextColor font-bold">Profile</h2>
          </div>
          <div className="bg-white h-full rounded-lg w-full dark:bg-gray-900">
            <div className="grid grid-cols-3 gap-8">
              <div className=" bg-white p-8 mt-2 mx-4">
                <div className="w-full text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'PROFILE' })}
                    className={`${state.profileContent && `bg-primaryYellow`} relative inline-flex items-center w-full p-3 my-2 text-sm font-medium rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}
                  >
                    <div className="flex justify-center items-center bg-primaryPurple w-10 h-10 rounded-full">
                      <Image src={User} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
                    </div>
                    <span className="px-4 font-bold text-base">My Profile</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'CARD_LINKING' })}
                    className={`${state.cardLinking && `bg-primaryYellow`} relative inline-flex items-center w-full p-3 mb-2 text-sm font-medium rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}
                  >
                    <div className="flex justify-center items-center bg-primaryLightGreen w-10 h-10 rounded-full">
                      <Image src={Card} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
                    </div>
                    <span className="px-4 font-bold text-base">Card Linking</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'SECURITY' })}
                    className={`${state.security && `bg-primaryYellow`} relative inline-flex items-center w-full p-3 mb-2 text-sm font-medium rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}
                  >
                    <div className="flex justify-center items-center bg-primaryLightPurple w-10 h-10 rounded-full">
                      <Image src={Setting} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
                    </div>
                    <span className="px-4 font-bold text-base">Security</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: 'UPGRADE_ACCOUNT' })}
                    className={`${state.upgradeAccount && `bg-primaryYellow`} relative inline-flex items-center w-full p-3 text-sm font-medium rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}
                  >
                    <div className="flex justify-center items-center bg-primaryPurple w-10 h-10 rounded-full">
                      <Image src={Shield} className="mr-3 h-6 sm:h-9" alt="Mobile Logo" />
                    </div>
                    <span className="px-4 font-bold text-base">Upgrade Account</span>
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                {state.profileContent && <ProfileContent />}
                {state.cardLinking && <CardLinking />}
                {state.security && <Security />}
                {state.upgradeAccount && <UpgradeAccount />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Profile.propTypes = {};

export default Profile;
