import {createContext} from 'react'

const languageContext = createContext({
    spanish:false,
    setSpanish: (spanish) => {}
});

export default languageContext;