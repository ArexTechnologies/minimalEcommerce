// import React from "react";
// import { useForm } from "react-hook-form";

// export default function UserForm({ preloadedValues }) {
//   const { register, handleSubmit } = useForm({
//     defaultValues: preloadedValues,
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         ref={register}
//         placeholder="First Name"
//         type="text"
//         name="name"
//       />
//       <input
//         ref={register}
//         placeholder="Last Name"
//         type="text"
//         name="address1"
//       />
//       <button>Submit</button>
//     </form>
//   );
// }
