/**
 * @properties={typeid:35,uuid:"CE9CEEBD-C5EA-47A9-97D1-AC21CF0CF5DA",variableType:-4}
 */
var OPERATIONS = scopes.someBusinessLogic.OPERATIONS

/**
 * @properties={typeid:24,uuid:"28F0F7AC-4525-4071-913D-C82D42DF2455"}
 */
function testValidAdd() {
	jsunit.assertEquals(2, scopes.someBusinessLogic.myPublicAPIMethod(1, 1, OPERATIONS.ADD))
}

/**
 * @properties={typeid:24,uuid:"F4F2434F-821F-4787-99C2-E3837F201D0E"}
 */
function testAddwithString() {
	var success = false
	try {
		scopes.someBusinessLogic.myPublicAPIMethod('1', 1, OPERATIONS.ADD)
	} catch (e) {
		if (e instanceof scopes.svyExceptions.IllegalArgumentException) {
			success = true
		}
	}
	if (!success) {
		jsunit.fail('Exception wasn\'t properly thrown')
	}
}