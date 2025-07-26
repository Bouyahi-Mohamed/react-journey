export default function InputComp({nameInput,valueInput,handleValue}){


    return (
        <>
        
         <label>
            {nameInput}:
            </label>
                <input type="text" name={nameInput} value={valueInput} onChange={(e) => handleValue(e.target.value,{nameInput})
            
            } />

        
        </>

    )
}