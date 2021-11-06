const initialState = {
    history: [
        {
            id: 1,
            name: ' Cyberpunk 2077',
            amount: '$400',
            status: 'active'
        }, {
            id: 2,
            name: ' Subway surf',
            amount: '$200',
            status: 'active'
        }, {
            id: 3,
            name: 'Temple run 2',
            amount: '$250',
            status: 'active'
        }, {
            id: 4,
            name: ' Fifa 2021',
            amount: '$200',
            status: 'active'
        }, {
            id: 5,
            name: ' Call of Duty',
            amount: '$100',
            status: 'active'
        }, {
            id: 6,
            name: ' Mortla Kombat',
            amount: '$50',
            status: 'active'
        }
    ]
};

const accountReducer = (state = initialState, action) => {
    switch (action.payload) {
        default:
            return {
                ...state
            }
    }
}

export default accountReducer;
