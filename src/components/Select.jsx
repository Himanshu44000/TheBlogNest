import React,{useId} from 'react';

function Select({
    label,
    options,
    className = "",
    ...props
}, ref){

    const id = useId();
    return (
        <div className='w-full'>

        {label && (
            <label
             htmlFor={id}
             className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>            
            </label>
       )}
       <select 
       {...props}
        id={id}
        ref={ref}
        className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-grey-50 duration-200 border border-gray-300 w-full'
        >

            {options?.map((option) => (
                <option key={option} value={option}>
                {option}
                </option> 
            ))}
       </select>
        </div>
    )


}

export default React.forwardRef(Select);