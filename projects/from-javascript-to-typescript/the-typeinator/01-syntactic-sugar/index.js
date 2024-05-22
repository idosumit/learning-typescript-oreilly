function announceMachines(announce, ...machines) {
	/*
The function now uses rest parameters (...machines) instead of the arguments object. This has several benefits:

Clarity and Intention: It's clear from the function signature that it expects a list of machines. This improves readability and the function's self-documenting nature.
Simplification: The machines variable is an actual array, which means you can use array methods directly on it if needed, and its length property is directly accessible.
*/
	let labelsCount = 0;

	// for (let i = 0; i < machines.length; i += 1){
	//     let label;

	//     const machine = machines[i];

	for (const machine of machines) {
		let label;
		// Block Scope: The label variable's scope is limited to the loop,
		// reducing the chance of bugs related to wider(function) scope.

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announce(label);
	}
	return labelsCount;
}

module.exports.announceMachines = announceMachines;
