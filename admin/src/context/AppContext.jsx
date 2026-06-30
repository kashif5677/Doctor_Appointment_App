
import { createContext } from 'react'
export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = '₹'

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }
    const month = ["", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]


    const slotDateFormate = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + ' ' + month[Number(dateArray[1])] + ' ' + " " + dateArray[2]
    }
    const value = {
        calculateAge,
        slotDateFormate,
        currency
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider