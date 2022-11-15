import { Action, createReducer, on } from '@ngrx/store';
import * as fromFeaturedAdsNav from './featured-ads-nav.actions'

export interface State {
  isCarsSelected: boolean,
  isElectroSelected: boolean,
  isFashionSelected: boolean,
  isSportsSelected: boolean,
  isOtherSelected: boolean
}

export const initialState: State = {
  isCarsSelected: false,
  isElectroSelected: false,
  isFashionSelected: false,
  isSportsSelected: false,
  isOtherSelected: false
};

export const reducer = createReducer(
  initialState,
  on(fromFeaturedAdsNav.onClickedCarsCategory,
    (state): State => {
      return {
        ...state,
        isCarsSelected: true,
        isElectroSelected: false,
        isFashionSelected: false,
        isSportsSelected: false,
        isOtherSelected: false
      }
    }),
    on(fromFeaturedAdsNav.onClickedElectroCategory,
      (state): State => {
        return {
          ...state,
          isCarsSelected: false,
          isElectroSelected: true,
          isFashionSelected: false,
          isSportsSelected: false,
          isOtherSelected: false
        }
      }),
      on(fromFeaturedAdsNav.onClickedFashionCategory,
        (state): State => {
          return {
            ...state,
            isCarsSelected: false,
            isElectroSelected: false,
            isFashionSelected: true,
            isSportsSelected: false,
            isOtherSelected: false
          }
        }),
        on(fromFeaturedAdsNav.onClickedSportsCategory,
          (state): State => {
            return {
              ...state,
              isCarsSelected: false,
              isElectroSelected: false,
              isFashionSelected: false,
              isSportsSelected: true,
              isOtherSelected: false
            }
          }),
          on(fromFeaturedAdsNav.onClickedOtherCategory,
            (state): State => {
              return {
                ...state,
                isCarsSelected: false,
                isElectroSelected: false,
                isFashionSelected: false,
                isSportsSelected: false,
                isOtherSelected: true
              }
            }) 
);

export const selectIsCarSelected = (state : State) => state.isCarsSelected; 
export const selectIsElectroSelected = (state : State) => state.isElectroSelected;
export const selectIsFashionSelected = (state : State) => state.isFashionSelected;
export const selectIsSportsSelected = (state : State) => state.isSportsSelected;
export const selectIsOthersSelected = (state : State) => state.isOtherSelected;