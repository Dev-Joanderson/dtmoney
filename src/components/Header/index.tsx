import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


 
interface HeaderProps{
    onOpenNewTransitionModal: () => void;

}
export function Header({onOpenNewTransitionModal}:HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransitionModal}>
                    Nova trasação
                </button>
                
            </Content>
        </Container>
    )
}