let promise = new Promise((fulfill, reject) =>{
	fulfill('I FIRED')
	
	reject(new Error('REJECTED!'))
	
})

function onReject(error){
	console.log('I DID NOT FIRE')
}

promise.then(console.log, onReject)