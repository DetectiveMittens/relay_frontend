import React from 'react';

function NewPostForm(props){
    
    let new_post_text = '';
    
    return(

        <div className="pb-3 py-2 mb-6 mt-3 px-2 mx-5 bg-slate-100 rounded-3 shadow-md">
            <form 
            onSubmit={(e) => {
                e.preventDefault(); //this stops the page from refreshing
                props.makePost(new_post_text);
                console.log("new post form is submitting");
            }}  
            className="max-w-xl mx-auto w-full">
                <div className="md:w-1/3">
                <label className="text-gray-500">
                    Post Text : 
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                    className="mb-2 bg-gray-200 appearance-none border-1 border-gray-500 rounded w-full text-gray-700 focus:outline-4 focus:bg-white" 
                    id="post-text" 
                    type="text" 
                    placeholder="..." 
                    onChange={ 
                        (enteredText) => {
                            new_post_text = enteredText.target.value;
                        } 
                    }
                />
                </div>


                <button type="submit" class="
                shadow-sm 
                border-2
                bg-slate-600 
                hover:bg-cyan-600 
                focus:shadow-outline 
                focus:outline-none 
                text-white 
                font-semibold 
                py-2 
                px-2 
                rounded" onClick={ () => {
                    //send the thing
                    console.log("New Post Send button pushed")
                } }>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Post it

                </button>


            </form> 
        </div>

    )
}


export default NewPostForm;