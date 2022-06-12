import React, {useState} from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function PasarelaDePago(){

    const [price, setPrice] = useState(0)

    const createOrder=(data, actions)=> {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "0.01",
              },
            },
          ],
        });
      }

      const onApprove=(data, actions)=> {
        return actions.order.capture(handlePay());
      }

      const handlePay=()=>{
          // console.log("El pago ha sido exitoso");
        //   window.location.href = "/"
      }

    //   function handleChange(e){
    //       setPrice(e.target.value)
    //   }

    return(
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}/>
    )
}