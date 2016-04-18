/**
 * @public 
 * @enum
 * @properties={typeid:35,uuid:"C4E15CEB-2B7B-4CD5-BC23-B84DA97D1372",variableType:-4}
 */
var OPERATIONS = {
	ADD: '+',
	SUBTRACT: '-'
}

/**
 * @param {Number} value1
 * @param {Number} value2
 * @param {String} operation See {@link scopes#someBusinessLogic#OPERATIONS} for possible values
 *
 * @properties={typeid:24,uuid:"AC27E682-4AD9-4FC1-8D2D-2944FDE116F5"}
 */
function myPublicAPIMethod(value1, value2, operation) {
	if (!(value1 instanceof Number)) {
		throw scopes.svyExceptions.IllegalArgumentException('Value not a Number: "' + value1 + '"')
	}
	
	switch (operation) {
		case OPERATIONS.ADD:
			return myPrivateAddLogicImpl(value1, value2)
		case OPERATIONS.SUBTRACT:
			return myPrivateSubtractLogicImpl(value1, value2)
		default:
			throw scopes.svyExceptions.IllegalArgumentException('Unknown operator "' + operation + '"')
	}
}

/**
 * @private
 * @param {Number} value1
 * @param {Number} value2
 *
 * @properties={typeid:24,uuid:"F3DBC2C5-1BD0-408A-9F1F-04805CC69553"}
 */
function myPrivateAddLogicImpl(value1, value2) {
	return value1 + value2
}

/**
 * @private
 * @param {Number} value1
 * @param {Number} value2
 *
 * @properties={typeid:24,uuid:"2EC75A1A-AA9A-4D5E-A9EF-F3FB51B1C810"}
 */
function myPrivateSubtractLogicImpl(value1, value2) {
	return value1 - value2
}