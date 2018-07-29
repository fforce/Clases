import { CHANGE_DRAFT } from '../constants/actionTypes'


//estos son actions creators por q devuelven una accion

export const changeDraft = draft => ({
  type: CHANGE_DRAFT,
  draft
})

export const getDraft = draft => ({
  type: CHANGE_DRAFT,
  draft
})
