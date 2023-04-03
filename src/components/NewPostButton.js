function NewPostButton(props){

    //sup

    return(
        <div>
        {/* this is the button to create a new post, if we are creating a new post, hide this div */}
            
            <button class="max-w-xs 
            mx-auto 
            mb-3 
            block 
            shadow-sm 
            border
            bg-slate-600 
            hover:bg-slate-500 
            focus:shadow-outline 
            focus:outline-none 
            text-white 
            font-bold 
            py-2 
            px-2 
            rounded-full" type="button" onClick={ () => {
                props.setcreatingPost(true)
            } }>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>

            </button>
        </div>
    )

}

export default NewPostButton;
