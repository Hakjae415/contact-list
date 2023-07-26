import React from "react";

const ContactRow = ({contact}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
        </tr>
    )
}
// Below is how i did it T^T
// const ContactRow = () => {
//     return (
//         <>
//             {
//                 dummyContacts.map((dummy) => {
//                     return (
//                         <>
//                             <tr>
//                                 <td>{dummy.name}</td>
//                                 <td>{dummy.phone}</td>
//                                 <td>{dummy.email}</td>
//                             </tr>
//                         </>
//                     )
//                 })
//             }
//         </>
//     )
// }

export default ContactRow