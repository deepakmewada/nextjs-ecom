
export const initialUserState = {
  isLoggedIn: false,
  user: {}
}

export function userReducer(state, action) {
  switch (action.type) {
    case 'store-user': {
      return {user: action.payload, isLoggedIn: true  }
    }
    case 'remove-user': {
      return {user: {}, isLoggedIn: false  }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
