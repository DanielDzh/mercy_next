import React, { useEffect, useRef } from 'react'

const PayPal = () => {
   const paypal = useRef();

   useEffect(() => {
      window.paypal.Buttons({
         createOrder: (data, action, err) => {
            return action.order.create({
               intent: "CAPTURE",
               purchase_units: [
                  {
                     description: "Cool lloking",
                     amount: {
                        currency_code: "USD",
                        value: 650.00
                     }
                  }
               ]
            })
         },
         onApprove: async (data, actions) => {
            const order = await actions.order.capture()
            console.log("Successful order:" + order);
         },
         onError: (err) => {
            console.log(err);
         },
      }).render(paypal.current)
   }, []);
   return (
      <div>
         <div ref={paypal}></div>
      </div>
   )
}

export default PayPal 