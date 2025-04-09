import React from 'react'
import * as Components from './Components';

function CartFooter({amount,setShow}) {
  return (
    <div><Components.FooterContainer>
        <Components.TitleCart>{amount} items added</Components.TitleCart>
        <Components.GhostButton onClick={() => setShow(false)}>
                        View Cart
                     </Components.GhostButton>
        </Components.FooterContainer></div>
  )
}

export default CartFooter