import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileTab: true,
  cardLinkingTab: false,
  securityTab: false,
  upgradeAccountTab: false,
};

const profileTabSlice = createSlice({
  name: 'profileTab',
  initialState,
  reducers: {
    setProfileTab(state) {
      state.profileTab = true;
      state.cardLinkingTab = false;
      state.securityTab = false;
      state.upgradeAccountTab = false;
    },
    setCardLinkingTab(state) {
      state.profileTab = false;
      state.cardLinkingTab = true;
      state.securityTab = false;
      state.upgradeAccountTab = false;
    },
    setSecurityTab(state) {
      state.profileTab = false;
      state.cardLinkingTab = false;
      state.securityTab = true;
      state.upgradeAccountTab = false;
    },
    setUpgradeAccountTab(state) {
      state.profileTab = false;
      state.cardLinkingTab = false;
      state.securityTab = false;
      state.upgradeAccountTab = true;
    },
  },
});

export const { setProfileTab, setCardLinkingTab, setSecurityTab, setUpgradeAccountTab } = profileTabSlice.actions;

export default profileTabSlice.reducer;
