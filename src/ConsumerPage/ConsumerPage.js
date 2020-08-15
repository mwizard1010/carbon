import React from 'react';
import { Link } from 'react-router-dom'
import Trade from '../TransactionTable/Trade';
import Wallet from '../TransactionTable/Wallet';
import Table from '../TransactionTable/Table';
import Emission from '../TransactionTable/Emission';
import Header from '../HomePage/Header';

class ConsumerPage extends React.Component  {
    
    render(){
        //send these data as props to SequesterPage component
	let carbonTokens = 5;
	let ethers = 10;
    let exchangeRate = "1 Token - A$400 and 100 Carbon units - 1 token"; 
    let emissions = ["Carbon emission","Hydro carbon emission","Miscellaneous emission"];
	let transactionHeaders = ["S.No","Name","No. of Tokens","Type","Status"];
	let transactionRows = [[1,"Aravinthan",3,"type 1","Success"],[2,"Aswin C",4,"type 2","Pending"],[3,"Aswin",5,"type 3","Failure"]];
        return (
			<div>
				<div>
				<Header></Header>
				</div>
				<br></br> <br></br> <br></br>
            <div className="container mx-auto">
                {/* <Link to="/"><button type="button" class="btn btn-primary btn-sm">Go to Home</button></Link> */}
		<p className="name">Welcome, Edwin</p>
		<div className="mx-auto card text-center text-white bg-dark mb-3" style={{width:"80%"}}>		
			<div className="card-body">
    					<h1 className="card-title">CONSUMER</h1>
					<Wallet carbonTokens={carbonTokens} ethers={ethers} exchangeRate={exchangeRate}/>
  			</div>
		</div>
        <Emission emissions = {emissions} />
        <Trade/>
		<h1 className="mt-5">Transaction History</h1>
		<Table headers={transactionHeaders} rows={transactionRows}/>
    </div>
	</div>
          );
    }

}



export default ConsumerPage;
