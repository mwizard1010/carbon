import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '../TransactionTable/Table';
import AddTenement from '../TransactionTable/AddTenement';
import Trade from '../TransactionTable/Trade';
import Wallet from '../TransactionTable/Wallet';
import { Link } from 'react-router-dom'
import Header from '../HomePage/Header';

class SequesterPage extends Component {
	render() {
	//send these data as props to SequesterPage component
	let carbonTokens = 5;
	let ethers = 10;
	let exchangeRate = "1 Token - A$400 and 100 Carbon units - 1 token"; 
	let headers = ["Name","ID","Owner","Sequesteration Rate","Details"];
	let button = (<button type="button" class="btn btn-info">Details</button>);
	let rows = [["Sequester 1","312315104024","Aravinthan","3.12",button],["Sequester 2","312315104027","Aswin C","4.12",button],["Sequester 3","312315104028","Aswin C","5.12",button]];
	let transactionHeaders = ["S.No","Name","No. of Tokens","Type","Status"];
	let transactionRows = [[1,"Aravinthan",3,"type 1","Success"],[2,"Aswin C",4,"type 2","Pending"],[3,"Aswin ",5,"type 3","Failure"]];
	return (
		<div>
		<div>
				<Header></Header>
				</div>
				<br></br> <br></br> <br></br>
	<div className="mx-auto container">
     {/* <Link to="/"><button type="button" class="btn btn-primary btn-sm">Go to Home</button></Link> */}
		<p className="name">Welcome, Edwin</p>
		<div className="mx-auto card text-center text-white bg-dark mb-3" style={{width:"80%"}}>		
			<div className="card-body">
    					<h1 className="card-title">SEQUESTER</h1>
					<Wallet carbonTokens={carbonTokens} ethers={ethers} exchangeRate={exchangeRate}/>
  			</div>
		</div>
		<h1 className="mt-5"> Your Tenements </h1>
		<Table headers={headers} rows={rows} />
		<AddTenement/>
		<Trade/>
		<h1 className="mt-5">Transaction History</h1>
		<Table headers={transactionHeaders} rows={transactionRows}/>
	</div>
	</div>
	);
}	
}



export default SequesterPage;

