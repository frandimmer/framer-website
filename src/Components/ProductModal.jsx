import React from 'react'
import styled from 'styled-components'
import '../Styles/ProductModal.css'

function ProductModal({ state, setState, nombre, electrobomba }) {
  return (
    <>
      {state && 
        <Overlay>
          <ModalContainer>
            <ModalTitle>
              <h1>{nombre}</h1>
            </ModalTitle>
            <ModalGrid>
                <div className='centered-div'>
                <img className='grid-image' src={require(`../Images/Products/${nombre}.png`)} alt={nombre} />
                </div>
                <div className='centered-div'>
                  <div className='modal-grid-container'>
                    <div className='grid-div first'>Entrada</div>
                    <div className='grid-div second'>2</div>
                    <div className='grid-div first'>Salida</div>
                    <div className='grid-div second'>4</div>
                    <div className='grid-div first'>Caudal</div>
                    <div className='grid-div second'>6</div>
                    <div className='grid-div first'>Voltaje</div>
                    <div className='grid-div second'>8</div>
                    <div className='grid-div first'>Peso</div>
                    <div className='grid-div second'>10</div>
                  </div>
                </div>
            </ModalGrid>
            <ModalImportant>
              {electrobomba ? (<div className='modal-important-container'><h3 className='modal-important-title'>IMPORTANTE</h3><h3 className='modal-important'>EL RENDIMIENTO FINAL DE LA ELECTROBOMBA ESTÁ DEFINIDO POR LOS ACCESORIOS QUE SE LE COLOCAN A LA MISMA.</h3><h3 className='modal-important'>SE DEBE ESPECIFICAR SI LA ELECTROBOMBA SERÁ UTILIZADA CON GAS-OIL, AGUA O AGROQUÍMICOS.</h3></div>) : ('')}
            </ModalImportant>
            <CloseButton onClick={() => setState(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </CloseButton>

          </ModalContainer>
        </Overlay>
      }
    </>
  )
}

export default ProductModal



const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 1000px;
  min-height: 550px;
  background: #fff;
  position: relative;
  border-radius: 24px;
  padding: 20px;
  font-family: 'Lato', sans-serif;
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  h1 {
    font-weight: 800;
    font-size: 2.5rem;
    color: black;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: black;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ModalGrid = styled.div`
  display: grid; 
  grid-template-rows: ;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  height: 500px;

`;

const ModalImportant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

