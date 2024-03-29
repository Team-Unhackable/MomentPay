import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpenseForm = () => {
	const navigate = useNavigate();

	function GoToHome() {
		navigate('/');
	}

	return (
		<form>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3' onClick={GoToHome}>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;