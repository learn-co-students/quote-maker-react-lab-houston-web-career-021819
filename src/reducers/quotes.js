export default (state = { quotes: [] }, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, quotes: [...state.quotes, {...action.payload}]}
    case 'DELETE_QUOTE':
      return {...state, quotes: state.quotes.filter(q => q.id !== action.payload)}
    case 'UPVOTE':
      return {...state, quotes: state.quotes.map(q => q.id === action.payload ? {...q, votes: q.votes + 1} : q)}
    case 'DOWNVOTE':
      return {...state, quotes: state.quotes.map(q => q.id === action.payload ? {...q, votes: q.votes - 1} : q)}
    default:
      return state
  }
}
