
const defaultState = {
    list : []
}
const reducer = (state=defaultState,action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD':
            newState.list.push({
                num : action.num,
                name : action.name,
                address : action.address,
                date : action.date,
                area : action.area
            })
            console.log(newState)
        return newState;
        default :return state;
    }
    
}

export default reducer