import { createContext } from 'react'

export const CarrinhoContext = createContext();

export const CarrinhoProdvider = ({ children }) => {
    return (
        <CarrinhoContext.Provider>
            {children}
        </CarrinhoContext.Provider>
    )
}