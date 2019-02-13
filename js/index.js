const inputs = document.querySelectorAll('input');
		const span = document.querySelectorAll('.focus-border');

		inputs.forEach(input => {
			input.addEventListener("change", function(e){
				event.target.value !== '' ? input.classList.add('has-content') : input.classList.remove('has-content')
			})
		})

		inputs.forEach(input => {
			input.addEventListener("blur", function(e){
				if (event.target.value !== '') {
					input.classList.add('valid-content');
					input.classList.remove('invalid-content')
				}
				else {
					input.classList.add('invalid-content');
					input.classList.remove('valid-content')
				}
			})
		})
