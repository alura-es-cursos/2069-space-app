import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"
const ListaEstilizada = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo="iconos/home-activo.png" iconoInactivo = "iconos/home-inactivo.png" activo>
                     Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="iconos/mas-vistas-activo.png" iconoInactivo = "iconos/mas-vistas-inactivo.png">
                     Más visitados
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>

        </aside>)
}

export default BarraLateral