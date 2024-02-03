import styled from "styled-components"
import Imagen from "../Galeria/Imagen"


const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado=styled.dialog`
    position: absolute;
    top:294px;

`
const ModalZoom = ({ foto }) => {

    return <>
        {foto && <>
            <Overlay />
            <DialogEstilizado open={!!foto}>
                <Imagen foto={foto} expandida={true} />
                <form method="dialog">
                    <button>OK</button>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom