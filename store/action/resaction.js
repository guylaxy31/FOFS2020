export const FETCH_RES = 'FETCH_RES';
export const CREATE_RES = 'CRREATE_RES';

export const fetchRes = () => {
    return async dispatch => {
        const result = await fetch('http://172.20.10.2:3000/api/restaurant'); //ถ้า expo บน mobile ให้เปลี่ยนเป็น ip
        const resultData = await result.json();
        // console.log(resultData);

        dispatch({
            type: FETCH_RES,
            payload: resultData
        });

    }
}
export const createRes = ({ restaurant_name, addr_line1, addr_line2, state, city, postal_code }) => {
    return async dispatch => {
        const response = fetch('http://localhost:3000/api/restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                restaurant_name,
                address: {
                    addr_line1,
                    addr_line2,
                    state,
                    city,
                    postal_code
                }
            })
        }) 

        const responseData = await response.json();
        // console.log(responseData);

        dispatch({
            type: CREATE_RES,
            payload: responseData
        });

    }
}
