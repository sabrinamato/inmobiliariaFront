const [isLoading, setIsLoading] = useState (false)

//Controlar Error
export const login = ({ credentials }) => {

    return client.post ('auth/login', credentials);
}
// const handleSubmit = event => {

//     event.preventDefault ( );
    
//     login (credentials);
    
//     };
   
//    const handleSubmit = async event => {

// event.preventDefault ( );

// try {

// } catch (error) {

// }

// )};
const handleSubmit = async event => {

    event.preventDefault ( );
    
    try {
    
    const {accessToken} = await login (credentials);
    
    console.log (accessToken)
    
    } catch (error) {
    
    console.log (error)
    
    } }
    

{isLoading && <Spinner/>}
<Button

disabled= {!username || !password || isLoading}

>

Log in

</Button>


