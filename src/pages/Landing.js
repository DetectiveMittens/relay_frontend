import { useState } from 'react';

function Landing(props) {

    const [Username,setUsername] = useState("Kirby");
    const [Userpassword,setUserpassword] = useState("***");
    const [RecoveryMail,setRecoveryMail] = useState("name@mail.com");
    

    return (
        <div>
            Welcome to RELAY!

            Create an account to get started!

            <br></br>
            <br></br>

            <form 
            onSubmit={(e) => {
                e.preventDefault(); //this stops the page from refreshing
                props.SendNewLoginToBackend(Username,Userpassword,RecoveryMail);
            }}  
            className="max-w-sm mx-auto w-full max-w-sm">

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Nickname
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" 
                    id="inline-full-name" 
                    type="text" 
                    defaultValue="Kirby" 
                    onChange={ 
                        (enteredText) => {setUsername(enteredText.target.value)} 
                    }
                />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-email" type="email" 
                    placeholder="email@email.com"
                    onChange={ 
                        (enteredText) => {setRecoveryMail(enteredText.target.value)} 
                    }
                />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                    Password
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-password" type="password" 
                    placeholder="***********"
                    onChange={ 
                        (enteredText) => {setUserpassword(enteredText.target.value)} 
                    }
                />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-semibold">
                <input className="mr-2 leading-tight" type="checkbox"/>
                <span className="text-sm">
                    Remember Login Details
                </span>
                </label>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                <button type="submit" className="shadow bg-cyan-600 hover:bg-cyan-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Create Account
                </button>
                </div>
            </div>
        </form>


        </div>
    )

}

export default Landing;