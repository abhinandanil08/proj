import Style from "./Pricing.module.css"


function Pricing()
{
    return(
        <>
        <div id={Style.main}>
            <div id={Style.std}>
                <h3>Standard</h3>
                <h2>$400</h2>
                <h4> 
                <ol>
                    <li>Good for using.</li>
                    <li>Fast</li>
                    <li>Secure</li>    
                    
                    
                </ol>        
                </h4>
                <button> Choose Plan </button>   
            </div>
            <div id={Style.prem}>
                <h3>Premium</h3>
                <h2>$4123</h2>
                <h4> 
                <ol>
                    <li>excelleent for using.</li>
                    <li>super fastt</li>
                    <li>verryyy Secure</li>    
                    
                    
                </ol>        
                </h4>
                <button> Choose Plan </button>    
                </div>
                <div id={Style.sp}>
                <h3>Super Premium</h3>
                <h2>$46226848600</h2>
                <h4> 
                <ol>
                    <li>premium for using.</li>
                    <li> premium Fast</li>
                    <li>premium Secure</li>    
                </ol>        
                </h4>
                <button> Choose Plan </button> 
                </div> 
            </div> 

            
        
        </>
      


    );

}


export default Pricing