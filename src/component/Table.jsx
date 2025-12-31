import Tabu from "./Table.module.css"
function Table()
{
        return(
            <div id={Tabu.pp}>
                <table border={3} > 
                
                        <tr>
                            <th>Features</th>
                            <th>Standard</th>
                            <th>Premium</th>
                            <th>Super Premium</th>
                        </tr>
                        <tr>
                            <td>users</td>
                            <td>2</td>
                            <td>5</td>
                            <td>800</td>
                        </tr>
                        <tr>
                            <td>discount</td>
                            <td>10%</td>
                            <td>20%</td>
                            <td>1%</td>
                        </tr>
                        <tr>
                            <td>Brands</td>
                            <td> Jockey</td>
                            <td> Nike</td>
                            <td>Rolls royce</td>
                        </tr>
                        





                </table>
            </div>
        );

}

export default Table