import React from 'react'

import Form from './shared/Form'
import Toggler from './shared/Toggler'

function App() {
    return (
        <div>
            <Form inputs= {{
                name: '',
                occupation: ''
            }}/>
            reset
            submit={inputData => alert('Submission successful!')}
            render={props => {
                const {handleSubmit, handleChange, inputs} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} name='name' type='text' />
                        <input onChange={handleChange} name='occupation' type='text' />
                        <button>Submit</button>
                    </form>
                )
            }}
        </div>
    )
}

export default App

// import React from 'react';

// // components
// import Form from "./shared/Form";
// import Toggler from "./shared/Toggler";

// function App() {
//     return (
//         <div>
//             <Toggler render={props => {
//                 const { toggled, handleToggle } = props;
//                 return (
//                     <div>
//                         <button onClick={handleToggle}>EDIT</button>
//                         {toggled && <Form inputs={{
//                             socialSecurity: "",
//                             cc: "",
//                             mothersMaidenName: ""
//                         }}
//                             submit={inputData => alert(JSON.stringify(inputData))}
//                             render={props => {
//                                 const { handleSubmit, handleChange, inputs } = props;
//                                 return (
//                                     <form onSubmit={handleSubmit}>
//                                         <input onChange={handleChange} value={inputs.socialSecurity} name="socialSecurity" type="text" />
//                                         <input onChange={handleChange} value={inputs.cc} name="cc" type="text" />
//                                         <input onChange={handleChange} value={inputs.mothersMaidenName} name="mothersMaidenName" type="text" />
//                                         <button>Submit</button>
//                                     </form>
//                                 )
//                             }}
//                         />}
//                     </div>
//                 )

//             }} />
//         </div>
//     )
// }

// export default App;