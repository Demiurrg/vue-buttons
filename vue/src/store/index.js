import modals from './modals'
import firstButton from './firstButton'
import ThirteenthButtonStore from "./ThirteenthButtonStore";
import twelfthButton from './twelfthButton'
import fourthButton from './fourthButton';
import secondButton from './secondButton'
import thirdButton from './thirdButton'
import sixthButton from './sixthButton'
import tenthButton from './tenthButton'
import fifthButton from './fifthButton';
import fourteenthButton from './fourteenthButton';
import eighthButton from './eighthButton'
import NinthButton from "./NinthButton";
import seventhButton from './seventhButton'
import newsStore from '@/store/storeBuletin/newsStore'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  modules: {
    modals,
    newsStore,
    firstButton,
    NinthButton,
    ThirteenthButtonStore,
    twelfthButton,
    secondButton,
    thirdButton,
    fourthButton,
    sixthButton,
    tenthButton,
    fifthButton,
    fourteenthButton,
    eighthButton,
    seventhButton
  }
}
