import React from 'react';
class Trade extends React.Component  {
	render() {
		return (
		<div className="mx-auto card  text-dark">
                       	
			<div className="card-body">
    					<h1 className="card-title text-center font-weight-bold">Trade</h1>
                      <hr></hr>
  			

                        <h4 className="text-center">Sell Tokens</h4>
                        <form className="mx-auto" style={{width:"70%"}}>
                      <div class="form-group align-center">
    <label for="exampleInputAmount1">Amount</label>
    <input type="text" class="form-control" id="exampleInputAmount1"  placeholder="Enter your Amount"/>
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                  <hr></hr>
			<h4 className="text-center">Send Tokens</h4>
		
                      <form className="mx-auto" style={{width:"70%"}}>
                      <div class="form-group align-center">
    <label for="exampleInputAmount2">Amount</label>
    <input type="text" class="form-control" id="exampleInputAmount2"  placeholder="Enter your Amount"/>
    <div class="form-group align-center">
    <label for="exampleAddress">Address</label>
    <input type="text" class="form-control" id="exampleAddress"  placeholder="Enter your Address"/>
  </div>
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                      </div>
		</div>
		);
	}
}
export default Trade;