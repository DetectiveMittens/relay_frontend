import Modal from 'react-bootstrap/Modal';
import { useState,  } from 'react';
import { Link } from 'react-router-dom'

function PopupLogin(props) {

    const [Userpassword,setUserpassword] = useState("***");
    const [Useremail,setUseremail] = useState("***");
   

    function clickRegister(){
        props.setmodalshow(0);
    }


    console.log('value of props.loginFailure=' + props.loginFailure);


    return (
      <Modal 
        {...props}
        size="md" 
        show={props.modalshow ? 1 : 0}
        onHide={ () => {
            props.setmodalshow(0);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Sign-in
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <form 
            onSubmit={async (e) => {

                const button = document.getElementById('login_button');
                if (button) {
                    button.disabled = true;
                }

                e.preventDefault(); //this stops the page from refreshing

                props.attempttologin(Userpassword,Useremail);


            }}  
            className="max-w-sm mx-auto w-full max-w-sm">

                {(props.loginFailure===1) ? 
                    <div className='text-red-500'>
                        *No details matching those entered!
                    </div>
                 : null}

            <div className="md:flex md:items-center mb-6">    
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4" >
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" 
                    id="inline-full-name" 
                    type="text" 
                    placeholder="name@email.com"
                    onChange={ 
                        (enteredText) => {setUseremail(enteredText.target.value)} 
                    }
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-semibold md:text-right mb-1 md:mb-0 pr-4">
                    Password
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="inline-password" type="password" 
                    placeholder="***********"
                    onChange={ 
                        (enteredText) => {setUserpassword(enteredText.target.value)} 
                    }
                />
                </div>
            </div>


            <div class="-ml-2.5">
                <div class="inline-flex items-center">
                <label
                    class="relative flex cursor-pointer items-center rounded-full p-3"
                    data-ripple-dark="true"
                >
                    <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-cyan-500 checked:bg-cyan-500 checked:before:bg-cyan-500 hover:before:opacity-10"
                    id="checkbox"
                    />
                    <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        ></path>
                    </svg>
                    </span>
                </label>
                <label
                    class="mt-px cursor-pointer select-none font-light text-gray-700"
                >
                    Remember Me
                </label>
                </div>
            </div>
            <div class="p-6 pt-0">
            <button
                class="block w-full select-none rounded-lg bg-cyan-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                id="login_button" type="submit"
                data-ripple-light="true"
            >
                Sign In
            </button>
            <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                Don't have an account? &nbsp;
                <Link to={{pathname: '/'}} onClick={clickRegister} >
                 Sign up
                </Link>
            </p>
            </div>


        </form>
          
        </Modal.Body>
      </Modal>
    );
  }


  export default PopupLogin;