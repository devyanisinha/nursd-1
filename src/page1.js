import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const page1 = () => {
	return (
		<div>
			<Container>
				<form>
					<div> <h2>Confirm your phone number</h2> </div>

					<Grid>
						<Grid item xs={12}>
							<div><label className="OTP">
								Enter the code you recieved via SMS</label></div>
							<input type="number" />
						</Grid>
					</Grid>
					<Grid>
						<Grid item xs={12}>
							<div><h4>A code has been sent to the phone you entered via SMS</h4>
								<h4><a href="https://google.com/">Edit</a></h4></div>
						</Grid>
					</Grid>
				</form>
				<div>
					<button type="submit">Submit</button>
				</div>
			</Container>

		</div>
	);
}
export default page1;